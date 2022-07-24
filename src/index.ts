require('module-alias/register');

import CountTracker from './classes/CountTracker';

import Count from '@/interfaces/Count';
import CountUpdate from '@/interfaces/CountUpdate';

export default class PitchTracker {
  private currentCountTracker: CountTracker;

  constructor() {
    this.currentCountTracker = new CountTracker();
  }

  public getCurrentCount(): Count {
    return this.currentCountTracker.getCount();
  }

  public updateCurrentCount(update: CountUpdate): Count {
    return this.currentCountTracker.updateCount(update);
  }
}
