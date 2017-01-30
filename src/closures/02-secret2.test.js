import { secret } from './02-secret2.js';

describe('secret2', () => {
  it('should return a function that returns a secret', () =>{
    const theSecret = 'I am the secret';
    const mySecret = secret(theSecret);

    const actual = mySecret();
    const expected = theSecret;

    expect(actual).toBe(theSecret);
  });
});
