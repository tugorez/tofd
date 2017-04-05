import FormData from 'form-data';
import tofd from '../index';

const object = {
  a: 'some_random_a',
  b: 'some_random_a',
  c: undefined,
};

describe('tofd', () => {
  it('should convert an object to a fd representation', () => {
    const converted = tofd(object);
    expect(converted instanceof FormData).toBe(true);
  });
});
