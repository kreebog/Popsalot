import { BalloonStates } from "./BalloonStates"; //
import * as Consts from "./Consts";

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
        throw Error(Consts.ERROR_ALREADY_FULL);
      case BalloonStates.popped:
        throw Error(Consts.ERROR_POPPED_CANT_FILL);
      case BalloonStates.empty: {
        this.state = BalloonStates.full;
      }
    }
  }

  pop() {
    switch (this.state) {
      case BalloonStates.popped:
        throw Error(Consts.ERROR_ALREADY_POPPED);
      case BalloonStates.empty:
        throw Error(Consts.ERROR_EMPTY_CANT_POP);
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
