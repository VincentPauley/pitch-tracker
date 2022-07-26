import Count from '@/interfaces/Count';
import CountUpdate from '@/interfaces/CountUpdate';
import CountData from '@/interfaces/CountData';

/**
 * @class CountTracker
 *
 * This simple class maintains the balls/strikes during a single
 * player's at-bat.  it ensures count cannot be exceeded and can
 * determine if the count has ended at the plate (Strikeout/Walk).
 * A new CountTracker class should be instantiated for every at-bat.
 */
export default class CountTracker {
  private _balls: number = 0;
  private _strikes: number = 0;

  private _maxBalls: number = 4;
  private _maxStrikes: number = 3;

  private get balls() {
    return this._balls;
  }

  private get strikes() {
    return this._strikes;
  }

  private set balls(balls: number) {
    this._balls = balls;
  }

  private set strikes(strikes: number) {
    this._strikes = strikes;
  }

  private get maxBalls() {
    return this._maxBalls;
  }

  private get maxStrikes() {
    return this._maxStrikes;
  }

  private determineResult() {
    if (this.balls >= this.maxBalls) return 'WALK';
    if (this.strikes >= this.maxStrikes) return 'STRIKEOUT';
    return 'PENDING';
  }

  constructor(count: Count = { balls: 0, strikes: 0 }) {
    const { balls, strikes } = count;

    this.balls = balls;
    this.strikes = strikes;
  }

  public getCount(): CountData {
    const { balls, strikes } = this;
    const result = this.determineResult();

    return {
      balls,
      strikes,
      result
    };
  }

  public updateCount(update: CountUpdate): CountData {
    const { type } = update;

    if (this.balls >= this.maxBalls) {
      throw new Error(`cannot increase ${update.type}s, already at max.`);
    }

    if (this.strikes >= this.maxStrikes) {
      throw new Error(`cannot increase ${update.type}s, already at max.`);
    }

    if (type === 'BALL') this.balls = this.balls + 1;
    if (type === 'STRIKE') this.strikes = this.strikes + 1;

    return this.getCount();
  }
}
