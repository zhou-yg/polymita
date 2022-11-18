type PatternStructureValueMatcher = (number | string | boolean)[]

interface PatternStructure<T extends PatternStructureValueMatcher> {
  [mainSematic: string]: { 
    [propertyKey: string]: {
      [value: string]: T
    }  
  }
}

interface PatternStructureResult {
  [mainSematic: string]: { 
    [propertyKey: string]: string[]
  }
}

function equal (arr: any[], arr2: any[]) {
  return arr.length === arr2.length && arr.every((v, i) => v === arr2[i])
}

export function matchMatrix<T extends PatternStructureValueMatcher> (pm: T) {
  return (ps: PatternStructure<T>) => {
    let result: PatternStructureResult = {}
    for (let mainSemantic in ps) {
      result[mainSemantic] = {}
      for (let propertyKey in ps[mainSemantic]) {
        result[mainSemantic][propertyKey] = []
        for (let value in ps[mainSemantic][propertyKey]) {
          const matcher = ps[mainSemantic][propertyKey][value]
          if (equal(matcher, pm)) {
            result[mainSemantic][propertyKey].push(value)
          }
        }
      }
    }
    return result
  }
}
