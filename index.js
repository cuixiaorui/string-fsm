// 先定义状态
// in_string -> 在字符串内部
// look_for_string -> 查找字符串
// copy_next_string -> 复制下一个字符串

// 动作
// new_start_string -> 创建一个新的字符串
// ignore -> 忽略掉 什么也不做
// finish_current_string -> 完成当前的字符串
// add_current_string -> 添加当前的字符串

// 每个状态的转换之前都需要执行以下动作

const transitions = {
  look_for_string: {
    '"': ["in_string", "new_start_string"],
    default: ["look_for_string", "ignore"],
  },
  in_string: {
    '"': ["look_for_string", "finish_current_string"],
    "\\": ["copy_next_chat", "add_current_string"],
    default: ["in_string", "add_current_string"],
  },
  copy_next_chat: {
    default: ["in_string", "add_current_string"],
  },
};

module.exports = function stringFSM(string) {
  let state = "look_for_string";
  let result = [];
  let currentStringArr = [];
  for (let index = 0; index < string.length; index++) {
    const ch = string[index];
    const info = transitions[state][ch] || transitions[state]["default"];
    state = info[0];
    let action = info[1];
    switch (action) {
      case "new_start_string":
        currentStringArr = [];
        break;
      case "add_current_string":
        currentStringArr.push(ch);
        break;
      case "ignore":
        break;
      case "finish_current_string":
        result.push(currentStringArr.join(""));
        break;
      default:
        break;
    }
  }
  return result;
};
