export const getSecret = ( secret ) => {
  return {
    get: () => secret
  };
};


