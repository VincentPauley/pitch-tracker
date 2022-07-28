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

  private _activePitchingSide: 'home' | 'away' = 'home';

  private get activePitcherID() {
    return this._activePitcherIds[this._activePitchingSide];
  }

  private set activePitcherIDs(pitcherIDs: PitcherIDs) {
    this._activePitcherIds = pitcherIDs;
  }

  private get activePitchingSide(): 'home' | 'away' {
    return this._activePitchingSide;
  }

  private set activePitchingSide(side: 'home' | 'away') {
    this._activePitchingSide = side;
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

  public toggleActivePitchingSide(): void {
    const otherSide = this.activePitchingSide === 'home' ? 'away' : 'home';
    this.activePitchingSide = otherSide;
  }
}
