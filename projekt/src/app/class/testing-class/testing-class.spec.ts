import { TestingClass } from './testing-class';

describe('TestingClass', () => {
  it('should create an instance', () => {
    expect(new TestingClass()).toBeTruthy();
  });

  it('should test that true is truthy', () => {
    expect(true).toBeTruthy();
  });
});
