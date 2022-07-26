export default interface CountData {
  balls: number;
  strikes: number;
  result: 'PENDING' | 'STRIKEOUT' | 'WALK';
}
