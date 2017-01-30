export let later;
export const ninjaFunction = () => {
  const val = 'ninja';
  const innerFunction = () => {
    return val;
  }
  later = innerFunction;
}
