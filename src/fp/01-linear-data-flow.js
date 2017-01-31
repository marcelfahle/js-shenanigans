const Box = x =>
({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
});
export const nextCharForNumberString = str =>
  Box(str)
  .map(s => s.trim())
  .map(s => parseInt(s))
  .map(i => i+1)
  .map(i => String.fromCharCode(i))
  .fold(c => c.toLowerCase())
