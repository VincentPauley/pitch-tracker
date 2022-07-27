import PitchTracker from '../src/index';

describe('class: PitchTracker', () => {
  const testHomePitcher = 'Lucas Giolitto';

  const testPitchTracker: PitchTracker = new PitchTracker({
    home: testHomePitcher,
    away: 'Clayton Kershaw'
  });

  describe('given a new pitch tracker is initiated with starting pitchers', () => {
    test('then the starting home pitcher is correctly returned from active state', () => {
      expect(testPitchTracker.getActivePitcherID()).toBe(testHomePitcher);
    });
  });
});
