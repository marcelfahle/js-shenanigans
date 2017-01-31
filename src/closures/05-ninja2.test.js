import Ninja from './05-ninja2.js';


describe('Ninja', () => {
  const ninja1 = new Ninja();
  const ninja2 = new Ninja();
  it('should not expose private variables', () => {
    expect(ninja1.feints).toBeFalsy();
  })
  it('should have a getter to acess private variables', () => {
    expect(ninja1.getFeints()).toBe(0);
  });
  it('should expose methods to increment private variables', () => {
    ninja1.feint();
    expect(ninja1.getFeints()).toBe(1);
  });
  it('private variables should be tied to each object', () => {
    expect(ninja1.getFeints()).toBe(1);
    expect(ninja2.getFeints()).toBe(0);
  });
});
