import{ getSecret } from './01-secret';


describe('secret', () => {
  it('should not be accessible via object.', () => {
    const obj = getSecret(1);
    expect(obj.secret).toBeFalsy(); 
  });

  it('should be accessible via closure,', () => {
    const expected = 1;
    const obj = getSecret(1);
    const actual = obj.get();

    expect(actual).toBe(expected);
  });
});
