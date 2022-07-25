import { BalloonStates } from "./BalloonStates"; //

export class Balloon {
  size: number;
  color: string;
  state: BalloonStates;

  constructor(size: number, color: string, state: BalloonStates) {
    this.size = size;
    this.color = color;
    this.state = state;
  }

  describe() {
    return `I am a ${this.color} ballon that is ${this.getStateName(this.state)} and I am ${this.size} inches in diameter.`;
  }

  fill() {
    switch (this.state) {
      case BalloonStates.full:
        throw Error(`I can't be filled because I'm' already full.`);
      case BalloonStates.popped:
        throw Error(`I can't be filled because I'm popped.`);
      case BalloonStates.empty: {
        this.state = BalloonStates.full;
      }
    }
  }

  pop() {
    switch (this.state) {
      case BalloonStates.popped:
        throw Error(`I've already been popped and can't be popped again.`);
      case BalloonStates.empty:
        throw Error(`I'm empty and must be filled before I can be popped.`);
      case BalloonStates.full:
        this.state = BalloonStates.popped;
        return;
    }
  }

  getStateName(state: number): string {
    switch (state) {
      case BalloonStates.empty:
        return "empty";
      case BalloonStates.full:
        return "full";
      case BalloonStates.popped:
        return "popped";
      default:
        throw Error(`Invalid BalloonState value --> ${state}`);
    }
  }
}
