import { partialApply } from './03-partial-apply';

describe('partial apply', () => {
  it('should add 10', () => {
    const add = (a, b) => a + b;
    const add10 = partialApply(add, 10);

    expect(add10(5)).toBe(15);
  });
});
