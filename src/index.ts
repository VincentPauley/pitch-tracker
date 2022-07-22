require('module-alias/register');

import CountTracker from './classes/CountTracker';

export default class PitchTracker {
  pitches() {
    return 78;
  }

  private currentCountTracker: CountTracker;

  constructor() {
    this.currentCountTracker = new CountTracker();
  }

  public getCurrentCount() {
    return this.currentCountTracker.getCount();
  }
}
