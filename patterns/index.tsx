/**
 * 由状态 驱动 出 视图样式，这属于“视觉逻辑”
 */
function colorPattern (arg: {
  actionType: string,
  disable: boolean,
  selected: boolean,
  active: boolean,
}) {
  return {
    blue: [1, 0, 0, 0],
    red: [0, 1, 0, 0],
    yellow: [0, , 1, 1],
    black: [1, 1, 1, 1]
  }
}

