import { matchPatternMatrix } from "tarat-renderer";
import { colors } from "./token";

/**
 * for components:
 * - Button
 */
export function primaryControlPattern (arg: {
  hover: () => boolean // '' | 'hover' | 'press' | 'focus' | 'active',
  active: () => boolean,
  selected: boolean,
  disabled: boolean,
}) {

  return matchPatternMatrix(
    [arg.hover(), arg.active(), arg.selected, arg.disabled]
  )({
    container: {
      backgroundColor: {
        [colors.primary]:   [],
        [colors.secondary]: [true, '*', '*', '*'],
        [colors.active]:    ['*', true, '*', '*'],
      }
    },
    text: {
      color: {
        [colors.none]: []
      }
    }
  })
}

export function defaultControlPattern (arg: {
  hover: () => boolean // '' | 'hover' | 'press' | 'focus' | 'active',
  active: () => boolean,
  selected: boolean,
  disabled: boolean,
}) {

  return matchPatternMatrix(
    [arg.hover(), arg.active(), arg.selected, arg.disabled]
  )({
    container: {
      backgroundColor: {
        [colors.none]:     [],
        [colors.grays[0]]: [true, '*', '*', '*'],
        [colors.grays[1]]: ['*', true, '*', '*'],
      }
    },
    text: {
      color: {
        [colors.text]: []
      }
    }
  })
}

export function blockPattern (
  arg: {
    hover: () => boolean // '' | 'hover' | 'press' | 'focus' | 'active',
    active: () => boolean,
    selected: boolean,
    disabled: boolean,
  },
  colors: { bg: [string, string, string], text: string },
) {

  return matchPatternMatrix(
    [arg.hover(), arg.active(), arg.selected, arg.disabled]
  )({
    container: {
      backgroundColor: {
        [colors.bg[0]]:     [],
        [colors.bg[1]]: [true, '*', '*', '*'],
        [colors.bg[2]]: ['*', true, '*', '*'],
      }
    },
    text: {
      color: {
        [colors.text]: []
      }
    }
  })
}
export function strokePattern (
  arg: {
    hover: () => boolean // '' | 'hover' | 'press' | 'focus' | 'active',
    active: () => boolean,
    selected: boolean,
    disabled: boolean,
  },
  colors: { bdw: number, border: [string, string, string], text: [string, string, string] },
) {

  return matchPatternMatrix(
    [arg.hover(), arg.active(), arg.selected, arg.disabled]
  )({
    container: {
      backgroundColor: {
      }
    },
    border: {
      borderStyle: {
        solid: [],
      },
      borderWidth: {
        [`${colors.bdw}px`]: [],
      },
      borderColor: {
        [colors.border[1]]:     [],
        [colors.border[0]]: [true, '*', '*', '*'],
        [colors.border[2]]: ['*', true, '*', '*'],
      },
    },
    text: {
      color: {
        [colors.text[1]]: [],
        [colors.text[0]]: [true, '*', '*', '*'],
        [colors.text[2]]: ['*', true, '*', '*'],
      }
    }
  })
}
