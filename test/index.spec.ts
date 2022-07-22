import PitchTracker from '../src/index';

const TestPitchTracker = new PitchTracker();

describe('class: PitchTracker', () => {
  test('it can return an active count', () => {
    const defaultCount = { balls: 0, strikes: 0 };

    expect(TestPitchTracker.getCurrentCount()).toMatchObject(defaultCount);
  });
});
