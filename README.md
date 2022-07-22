# Pitch Tracker

should be able to log a pitch being thrown

count({
  balls: 0
  strikes: 0,
})

pitch: {
  throwerID: 'a0sd9f888',
  type: 'Slider',
  location: number >= 1 or <= 39 representing where it crossse plate
  countPrior: {
    balls: 1,
    strikes: 2
  }

  // batter/swing info
  batterID: 'sd09f88sdf'
  swing: boolean,
  contact: {
    made: boolean,
    exitVelocity: number,
    launchAngle: number
    direction: number
  }

  // varying types here
  result: {
    'strike', 'ball', 'foul', 'play'
  }
}
