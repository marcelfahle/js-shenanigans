import { nextCharForNumberString } from './01-linear-data-flow';

it('should increment number string and return character', () => {
  expect(nextCharForNumberString(' 64 ')).toBe('a');
});
