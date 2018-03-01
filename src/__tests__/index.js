import FormData from 'form-data';
import tofd from '../index';

const object = {
  a: 'some_random_a',
  b: 'some_random_b',
  users: [
    { name: 'john doe '}
  ],
  hello: {
    world: Buffer.from([1, 2, 3])
  }
};

describe('tofd', () => {
  it('should convert an object to a fd representation', () => {
    const converted = tofd(object);
    expect(converted instanceof FormData).toBe(true);
  });
});
