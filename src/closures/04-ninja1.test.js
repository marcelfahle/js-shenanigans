import { ninjaFunction, later } from './04-ninja1.js';

describe('ninja', () => {
  it('inner var should be visible', () => {
    ninjaFunction();
    expect(later()).toBe('ninja'); 
  })
});
