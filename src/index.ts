require('module-alias/register');

import CountTracker from './classes/CountTracker';

import Count from '@/interfaces/Count';
import CountUpdate from '@/interfaces/CountUpdate';
import PitcherIDs from '@/interfaces/PitcherIDs';

export default class PitchTracker {
  private currentCountTracker: CountTracker;

  pitches = [];

  private _activePitcherIds: PitcherIDs = {
    home: '',
    away: ''
  };

  private activeDefense: 'home' | 'away' = 'home';

  private get activePitcherID() {
    return this._activePitcherIds[this.activeDefense];
  }

  private set activePitcherIDs(pitcherIDs: PitcherIDs) {
    this._activePitcherIds = pitcherIDs;
  }

  constructor(
    startingPitcherIDs: PitcherIDs = {
      home: 'DEFAULT-HOME',
      away: 'DEFAULT-AWAY'
    }
  ) {
    this.activePitcherIDs = startingPitcherIDs;

    this.currentCountTracker = new CountTracker();
  }

  public getCurrentCount(): Count {
    return this.currentCountTracker.getCount();
  }

  public updateCurrentCount(update: CountUpdate): Count {
    return this.currentCountTracker.updateCount(update);
  }

  public getActivePitcherID(): string {
    return this.activePitcherID;
  }
}
