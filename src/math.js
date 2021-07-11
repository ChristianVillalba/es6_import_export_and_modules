const pi = 3.1416;

function doublePi() {
  return pi * 2;
}
function triplePi() {
  return pi * 3;
}

export default pi; // only one element can be exported as default
export { doublePi, triplePi };
