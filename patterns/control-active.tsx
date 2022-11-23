import { matchPatternMatrix } from "tarat-renderer";
import { action, signal } from 'atomic-signal'
import * as token from "./token";

/**
 * for components:
 * - Button
 */
// export function primaryControlPattern (arg: {
//   hover: () => boolean // '' | 'hover' | 'press' | 'focus' | 'active',
//   active: () => boolean,
//   selected: boolean,
//   disabled: boolean,
// }) {

//   return matchPatternMatrix(
//     [arg.hover(), arg.active(), arg.selected, arg.disabled]
//   )({
//     container: {
//       backgroundColor: {
//         [colors.primary]:   [],
//         [colors.secondary]: [true, '*', '*', '*'],
//         [colors.active]:    ['*', true, '*', '*'],
//       }
//     },
//     text: {
//       color: {
//         [colors.none]: []
//       }
//     }
//   })
// }

// export function defaultControlPattern (arg: {
//   hover: () => boolean // '' | 'hover' | 'press' | 'focus' | 'active',
//   active: () => boolean,
//   selected: boolean,
//   disabled: boolean,
// }) {

//   return matchPatternMatrix(
//     [arg.hover(), arg.active(), arg.selected, arg.disabled]
//   )({
//     container: {
//       backgroundColor: {
//         [colors.none]:     [],
//         [colors.grays[0]]: [true, '*', '*', '*'],
//         [colors.grays[1]]: ['*', true, '*', '*'],
//       }
//     },
//     text: {
//       color: {
//         [colors.text]: []
//       }
//     }
//   })
// }
export function useInteractive (props: { disabled?: boolean, selected?: boolean }) {
  const hover = signal(false)
  const active = signal(false)

  const mouseEnter = action(() => {
    if (props.disabled) return
    hover(() => true)
  })
  const mouseLeave = action(() => {
    if (props.disabled) return
    hover(() => false)
  })
  const mouseDown = action(() => {
    if (props.disabled) return
    active(() => true)
  })
  const mouseUp = action(() => {
    if (props.disabled) return
    active(() => false)
  })
  
  return {
    states: {
      hover: hover,
      active: active,
      // selected: !!props.selected,
      // disabled: !!props.disabled,
    },
    events: {
      onMouseEnter: mouseEnter,
      onMouseLeave: mouseLeave,
      onMouseDown: mouseDown,
      onMouseUp: mouseUp,
    }
  }
}

type NormalColor = string
type HoverColor = string
type ActiveColor = string
type SelectedColor = string

export function blockPattern (
  arg: {
    hover: () => boolean // '' | 'hover' | 'press' | 'focus' | 'active',
    active: () => boolean,
    selected: boolean,
    disabled: boolean,
  },
  colors: {
    bg: [NormalColor, HoverColor, ActiveColor?, SelectedColor?],
    text: [NormalColor, HoverColor?, ActiveColor?, SelectedColor?]
  },
) {

  return matchPatternMatrix(
    [arg.hover(), arg.active(), arg.selected, arg.disabled]
  )({
    container: {
      backgroundColor: {
        [colors.bg[0]]:             [],
        [colors.bg[1]]:             [true, '*', '*', false],
        [colors.bg[2]]:             ['*', true, '*', false],
        [colors.bg[3]]:             ['*', '*', true, false],
        [token.colors.disables[0]]: ['*', '*', '*', true],
      },
      cursor: {
        pointer: [],
        'not-allowed': ['*', '*', '*', true],
      },
      userSelect: {
        none: [],
      }
    },
    text: {
      color: {
        [colors.text[0]]: [],
        [colors.text[1]]: [true, '*', '*', false],
        [colors.text[2]]: ['*', true, '*', false],
        [colors.text[3]]: ['*', '*', true, false],
        [token.colors.disables[1]]: ['*', '*', '*', true],
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
  colors: {
    bdw?: number,
    border: [NormalColor, HoverColor, ActiveColor?],
    text: [NormalColor, HoverColor, ActiveColor?]
  },
) {

  return matchPatternMatrix(
    [arg.hover(), arg.active(), arg.selected, arg.disabled]
  )({
    container: {
      backgroundColor: {
        [token.colors.disables[0]]: ['*', '*', '*', true],
      },
      cursor: {
        'not-allowed': ['*', '*', '*', true],
      }
    },
    border: {
      borderStyle: {
        solid: [],
      },
      borderWidth: {
        [`${colors.bdw}px`]: [],
        '0px': ['*', '*', '*', true],
      },
      borderColor: {
        [colors.border[0]]:     [],
        [colors.border[1]]: [true, '*', '*', false],
        [colors.border[2]]: ['*', true, '*', false],
        [token.colors.disables[1]]: ['*', '*', '*', true],
      },
    },
    text: {
      color: {
        [colors.text[0]]: [],
        [colors.text[1]]: [true, '*', '*', false],
        [colors.text[2]]: ['*', true, '*', false],
        [token.colors.disables[1]]: ['*', '*', '*', true],
      }
    }
  })
}
