/**
网络传输有时候会压缩字符串，实现解压缩算法
规则是如果有连续的重复模式，前面可以加数字表示重复次数，并且把重复的部分用中括号括起来

如："3[a]2[bc]"，解压后是 aaabcbc
如："3[  a2[c]  ]" 解压后是 "acc acc acc"
如："aa 333 [  a2[c]  ]  bb33[   a2[c] ]"

假设所有输入均合法，最终内容只有英文字母
**/

function decodeString(input: string): string {
  
  function task (str: string) {

    const stack: string[] = []

    let numStack: string[] = []

    let prevNum = -1
    let prevIndex = -1

    for (let i = 0; i < str.length; i++) {
      const char = str[i]

      if (char === ']') {

        let subStr = task(
          str.substring(prevIndex + 1, i)
        )
        
        stack.push(
          new Array(prevNum).fill(subStr).join('')
        )

        numStack = []
        prevNum = -1
        prevIndex = -1
      }

      if(prevNum > 0) {
        continue
      }

      if (/[a-zA-Z]/.test(char)) {

        stack.push(char)

      } else if (/0-9/.test(char)) {

        numStack.push(char)

      } else if (char  === '[') {

        prevNum = parseInt(numStack.join(''))

        prevIndex = i

      }
    }
    return stack.join('')
  }
  const r = task(input)

  return r
}