import { MaxWordPipe } from './max-word.pipe';

describe('MaxWordPipe', () => {
  it('create an instance', () => {
    const pipe = new MaxWordPipe();
    expect(pipe).toBeTruthy();
  });
});
