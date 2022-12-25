import { matchPatternMatrix } from 'tarat-renderer'
import { action, dispose, signal } from 'atomic-signal'
import * as token from './token'

export function useInteractive(props: { disabled?: boolean }) {
  const hover = signal(false)
  const active = signal(false)
  const focus = signal(false)

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
    focus(() => true)
  })
  const focusIn = () => {
    if (props.disabled) return
    focus(() => false)
  }
  document.addEventListener('mouseup', focusIn, true)
  dispose(() => {
    document.removeEventListener('mouseup', focusIn)
  })

  return {
    states: {
      hover,
      active,
      focus
    },
    events: {
      onMouseEnter: mouseEnter,
      onMouseLeave: mouseLeave,
      onMouseDown: mouseDown,
      onMouseUp: mouseUp
    }
  }
}

type NormalColor = string
type HoverColor = string
type ActiveColor = string
type SelectedColor = string
type DisabledColor = string

export function blockPattern(
  arg: {
    hover: boolean // '' | 'hover' | 'press' | 'focus' | 'active',
    active: boolean
    selected: boolean
    disabled: boolean
  },
  colors: {
    bg: [NormalColor, HoverColor, ActiveColor?, SelectedColor?]
    text: [NormalColor, HoverColor?, ActiveColor?, SelectedColor?]
  }
) {
  return matchPatternMatrix([
    !!arg.hover,
    !!arg.active,
    !!arg.selected,
    !!arg.disabled
  ])({
    container: {
      backgroundColor: {
        [colors.bg[0]]: [],
        [colors.bg[1]]: [true, '*', '*', false],
        [colors.bg[2]]: ['*', true, '*', false],
        [colors.bg[3]]: ['*', '*', true, false],
        [token.colors.disables[0]]: ['*', '*', '*', true]
      },
      cursor: {
        pointer: [],
        'not-allowed': ['*', '*', '*', true]
      },
      userSelect: {
        none: []
      },
      border: {
        [`solid 1px ${token.colors.disables[0]}`]: ['*', '*', '*', true]
      }
    },
    text: {
      color: {
        [colors.text[0]]: [],
        [colors.text[1]]: [true, '*', '*', false],
        [colors.text[2]]: ['*', true, '*', false],
        [colors.text[3]]: ['*', '*', true, false],
        [token.colors.disables[0]]: ['*', '*', '*', true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors.text[0]]: [],
        [colors.text[1]]: [true, '*', '*', false],
        [colors.text[2]]: ['*', true, '*', false],
        [colors.text[3]]: ['*', '*', true, false],
        [token.colors.disables[1]]: ['*', '*', '*', true]
      }
    },
  })
}
export function blockPattern2(
  arg: {
    selected: boolean
    disabled: boolean
  },
  colors: {
    bg: [NormalColor, SelectedColor?]
    text: [NormalColor, SelectedColor?]
  }
) {
  return matchPatternMatrix([!!arg.selected, !!arg.disabled])({
    container: {
      backgroundColor: {
        [colors.bg[0]]: [],
        [colors.bg[1]]: [true, false],
        [token.colors.disables[0]]: ['*', true]
      },
      cursor: {
        pointer: [],
        'not-allowed': ['*', true]
      },
      userSelect: {
        none: []
      }
    },
    text: {
      color: {
        [colors.text[0]]: [],
        [colors.text[1]]: [true, false],
        [token.colors.disables[1]]: ['*', true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors.text[0]]: [],
        [colors.text[1]]: [true, false],
        [token.colors.disables[1]]: ['*', true]
      }
    }
  })
}

export function strokePattern(
  arg: {
    hover: boolean // '' | 'hover' | 'press' | 'focus' | 'active',
    active: boolean
    selected: boolean
    disabled: boolean
  },
  colors: {
    bdw?: number
    border: [NormalColor, HoverColor, ActiveColor?]
    text?: [NormalColor, HoverColor, ActiveColor?]
  }
) {
  return matchPatternMatrix([
    !!arg.hover,
    !!arg.active,
    !!arg.selected,
    !!arg.disabled
  ])({
    container: {
      backgroundColor: {
        [token.colors.disables[0]]: ['*', '*', '*', true]
      },
      cursor: {
        'not-allowed': ['*', '*', '*', true]
      }
    },
    decoration: {
      borderStyle: {
        solid: []
      },
      borderWidth: {
        /** @TODO maybe have a better solution */
        [`1px`]: [
          [],
          ['*', '*', '*', true]
        ],
        // '1px': ['*', '*', '*', true]
      },
      borderColor: {
        [colors.border[0]]: [],
        [colors.border[1]]: [
          [true, '*', '*', false],
          ['*', '*', true, false]
        ],
        [colors.border[2]]: ['*', true, '*', false],
        [token.colors.disables[0]]: ['*', '*', '*', true]
      }
    },
    text: {
      color: {
        [colors.text?.[0]]: [],
        [colors.text?.[1]]: [true, '*', '*', false],
        [colors.text?.[2]]: ['*', true, '*', false],
        [token.colors.disables[0]]: ['*', '*', '*', true]
      }
    }
  })
}

export function strokePattern2(
  arg: {
    // selected: boolean
    disabled: boolean
  },
  colors: {
    bdw?: number
    border: [NormalColor, DisabledColor?]
    text?: [NormalColor, DisabledColor?]
  }
) {
  const borderDisabledColor = colors.border[1] || token.colors.disables[0]
  const textDisabledColor = colors.text[1] || token.colors.disables[0]

  return matchPatternMatrix([!!arg.disabled])({
    container: {
      backgroundColor: {
        [token.colors.disables[0]]: [true]
      },
      cursor: {
        'not-allowed': [true]
      }
    },
    decoration: {
      borderRadius: {
        [token.radius.normal]: []
      },
      borderStyle: {
        solid: []
      },
      borderWidth: {
        [`${colors.bdw}px`]: [],
        '0px': [true]
      },
      borderColor: {
        [colors.border[0]]: [],
        [borderDisabledColor]: [true]
      }
    },
    text: {
      color: {
        [colors.text?.[0]]: [],
        [textDisabledColor]: [true]
      }
    }
  })
}
