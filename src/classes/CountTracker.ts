import Count from '@/interfaces/Count';
import CountUpdate from '@/interfaces/CountUpdate';

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

  constructor(count: Count = { balls: 0, strikes: 0 }) {
    const { balls, strikes } = count;

    this.balls = balls;
    this.strikes = strikes;
  }

  public getCount(): Count {
    const { balls, strikes } = this;

    return {
      balls,
      strikes
    };
  }

  public updateCount(update: CountUpdate): Count {
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
    // now update by type
  }
}
