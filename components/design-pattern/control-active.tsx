import { matchMatrix } from "../../shared/pattern-utils";

/**
 * for components:
 * - Button
 */
export default function pattern (arg: {
  actionType: string,
  disable: boolean,
  selected: boolean,
  active: boolean,
}) {

  return matchMatrix(
    [arg.actionType, arg.disable, arg.selected, arg.active]
  )({
    container: {
      backgroundColor: {
        blue: ['1', true, true, true],
      }
    },
    border: {
      ['border-color']: {
        blue: ['1', true, true, true],
      }
    },
    text: {
      ['font-size']: {
        small: ['1', true, true, true],
      }
    }
  })
}
