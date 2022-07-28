import PitchTracker from '../src/index';

describe('class: PitchTracker', () => {
  const testHomePitcher = 'Lucas Giolitto';
  const testAwayPitcher = 'Clayton Kershaw';

  const testPitchTracker: PitchTracker = new PitchTracker({
    home: testHomePitcher,
    away: testAwayPitcher
  });

  describe('given a new pitch tracker is instantiated with starting pitchers', () => {
    test('then the starting home pitcher is returned as the active pitcher ID', () => {
      expect(testPitchTracker.getActivePitcherID()).toBe(testHomePitcher);
    });
  });

  describe('given the active pitching side is switched', () => {
    test('then the starting away pitcher is returned as the active pitcher ID', () => {
      testPitchTracker.toggleActivePitchingSide();
      expect(testPitchTracker.getActivePitcherID()).toBe(testAwayPitcher);
    });
  });
});
