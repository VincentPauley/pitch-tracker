import Count from '@/interfaces/Count';

export default class CountTracker {
  private _balls: number = 0;
  private _strikes: number = 0;

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

  constructor(count = { balls: 0, strikes: 0 }) {
    const { balls, strikes } = count;

    this.balls = balls;
    this.strikes = strikes;
  }

  public getCount(): Count {
    return {
      balls: 0,
      strikes: 0
    };
  }
}
