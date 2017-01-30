export const partialApply = (fn, ...fixedArgs) => {
  return (...remainingArgs) => {
    return fn.apply(this, fixedArgs.concat(remainingArgs)); 
  };
};
