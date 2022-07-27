import PitchTracker from '../src/index';

describe('class: PitchTracker >> class: CountTracker', () => {
  let TestPitchTracker: PitchTracker;

  beforeEach(() => {
    TestPitchTracker = new PitchTracker();
  });

  test('it can return an active count', () => {
    const defaultCount = { balls: 0, strikes: 0, result: 'PENDING' };

    expect(TestPitchTracker.getCurrentCount()).toStrictEqual(defaultCount);
  });

  describe('given the count is updated to increase the balls', () => {
    test('it reflects the updated count accurately', () => {
      const expectedCount = { balls: 1, strikes: 0, result: 'PENDING' };

      expect(
        TestPitchTracker.updateCurrentCount({ type: 'BALL' })
      ).toStrictEqual(expectedCount);
    });
  });

  describe('given the count is update to increase the strikes', () => {
    const expectedCount = { balls: 0, strikes: 1, result: 'PENDING' };

    test('it reflects the updated count accurately', () => {
      expect(
        TestPitchTracker.updateCurrentCount({ type: 'STRIKE' })
      ).toStrictEqual(expectedCount);
    });
  });

  describe('given the count is updated with a strike 3 times', () => {
    test('then the result becomes a strikeout', () => {
      TestPitchTracker.updateCurrentCount({ type: 'STRIKE' });
      TestPitchTracker.updateCurrentCount({ type: 'STRIKE' });

      const expectedCount = { balls: 0, strikes: 3, result: 'STRIKEOUT' };

      // assertion on 3rd strike
      expect(
        TestPitchTracker.updateCurrentCount({
          type: 'STRIKE'
        })
      ).toStrictEqual(expectedCount);
    });
  });
});
