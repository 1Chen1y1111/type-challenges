type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * js实现
 */
function _MyPick(todo, keys) {
  const obj = {};
  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });
  return obj;
}
