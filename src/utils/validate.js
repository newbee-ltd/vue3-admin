/**
 * @description: 表单字符串验证
 * @param {string} msg
 * @return {*}
 */
export const requiedMsg = msg => ({
  required: true,
  message: msg,
  trigger: ["change", "blur"]
});
