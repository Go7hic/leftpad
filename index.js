export default leftpad
function leftpad (str, len, ch) {
  str = String(str)
  len = len - str.length
  if (len < 1) return str
  if (!ch && ch !== 0) ch = ' '
  return ch.repeat(len) + str
}
