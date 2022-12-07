type oldTree = {
  type: 'div',
  children: [
    {
      type: 'span',
      children: [
        {
          type: 'a'
        }
      ]
    },
    {
      type: 'span',
      children: [
        {
          innerText: 'hello'
        }
      ]
    }
  ]
}

type commands = [
  {
    type: 'addChild',
    parent: ['div', 'span'],
    child: {
      innerText: 'hello'
    }
  },
  {
    type: 'addChild',
    parent: ['div'],
    child: {
      type: 'p',
      value: 'i am content'
    }
  }  
]

type Tree = oldTree
type Commands = commands

type JSONTree = {
  div: ['div'] & {
    span: ['div', 'span'] & {
      a: ['div', 'span', 'a']
    }
  }
}

type Parent = JSONTree['div']['span']

type ParentPath = Parent[number]



// test case 1
type Path = ['a', 'b']

type MyObj = {
  a: {
    b: {
      value: string
    }
  }
  d: {}
}

type MyObjKeys = keyof MyObj

type PickByPath<T extends Record<string, any>, X> = X extends keyof T ? T[X] : never

type Shift<T> = T extends [infer First, ...infer Rest] ? Rest : never
type First<T> = T extends [infer First, ...infer Rest] ? First : never

type PickByPathArr<T extends Record<string, any>, Paths> = 
  Paths extends [infer First, ...infer Rest]
  ? Rest extends []
    ? PickByPath<T, First>
    : PickByPathArr<PickByPath<T, First>, Rest>
  : never

type v = PickByPathArr<MyObj, ['a', 'b']>
type v2 = PickByPathArr<Tree, ['children', 0, 'children']>

// test case 2

type MyObj2 = {
  type: 'div',
  children: [
    {
      type: 'span',
      children: []
    }
  ]
}

type MyCmd = { op: 'addChild', parent: ['div', 'span'], child: { type: 'p'} } 
type MyCmd2 = { op: 'removeChild', parent: ['div', 'span'], child: { type: 'p'} } 
type MyCmd3 = { op: 'replaceChild', parent: ['div', 'span'], child: { type: 'p'} } 

interface MyObjTree {
  type: 'div' | 'span' | 'p',
  children?: MyObjTree[]
}

interface Command {
  op: 'addChild' | 'removeChild' | 'replaceChild',
  parent: MyObjTree['type'][]
  child: MyObjTree
}

type Assign<U, T> = Omit<U, keyof T> & T

type PickSecond<T extends any[]> = T extends [infer First, infer Second, ...any[]] ? [Second] : never

type v33 = PickSecond<[string, 2]>

type RemoveItem<Children extends MyObjTree['children'], child extends MyObjTree> =
  Children extends [infer First, ...infer Rest]
    ? First extends child
      ? Rest extends []
        ? []
        : Rest extends MyObjTree['children'] ? RemoveItem<Rest, child> : []
      : Rest extends MyObjTree['children'] ? [First, ...RemoveItem<Rest, child>] : []
    : []


type DoCommand<T extends MyObjTree, Cmd extends Command> =
  Cmd['op'] extends 'addChild'
    ? Assign<T, { children: [...T['children'], Cmd['child']] }>
    : Cmd['op'] extends 'removeChild'
      ? Assign<T, { children: RemoveItem<T['children'], Cmd['child']> }>
      : Cmd['op'] extends 'replaceChild'
        ? Cmd['child']
        : never

type vEmpty<T> = T extends [infer First, ...infer Rest] ? 123 : never;

type PatchToChildren<T extends MyObjTree['children'], Cmd extends Command> =
  T extends [infer FirstChild, ...infer RestChildren]
    ? FirstChild extends MyObjTree 
      ? RestChildren extends MyObjTree['children']
        ? [PatchChildToObj<FirstChild, Cmd>, ...PatchToChildren<RestChildren, Cmd>]
        : never
      : never
    : T


type V22Cmd = { op: 'addChild', parent: ['span'], child: { type: 'p'} }
type V22Obj = [
  {
    type: 'span',
    children: []
  },
  {
    type: 'span',
    children: []
  }
]

type v22 = PatchToChildren<V22Obj,  V22Cmd >
type v22c = v22[1]['children']

type PatchChildToObj<T extends MyObjTree, Cmd extends Command> = 
  Cmd['parent'] extends [infer First, ...infer Rest]
    ? Rest extends []
      ? T extends { type: First } 
        ? DoCommand<T, Cmd>
        : never
      : Rest extends Command['parent']
        ? Assign<T, { children: PatchToChildren<T['children'], Assign<Cmd, { parent: Rest }>> }>
        : never
    : T;

type v3 = PatchChildToObj<MyObj2, MyCmd>
type c1 = v3['children'][0]['children']

type v4 = PatchChildToObj<v3, MyCmd2>
type c2 = v4['children'][0]

type v5 = PatchChildToObj<v4, MyCmd3>
type c3 = v5['children']

type ShowResult<T> =  {
  [P in keyof T]: T[P]
}

type v5s = ShowResult<v3>

type A1 = { children: ['string'] }
type A2 = { children: ['string', 'number'] }
type A3 = Assign<A1, A2>
type A4 = A3['children']


function a () {
  return 1 as const
}
const v = a() // not as const here
