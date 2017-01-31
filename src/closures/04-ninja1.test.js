import { ninjaFunction, later, ninjaFunction2 } from './04-ninja1.js';

describe('ninjaFunction', () => {
  it('inner var should be visible', () => {
    ninjaFunction();
    expect(later()).toBe('ninja'); 
  })
});

describe('ninjaFunction2', () => {
  it('val should be visible later in time', () => {
    
  });
});
