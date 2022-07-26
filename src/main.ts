import { COLORS } from './Consts';
import { Balloon } from './Balloon';
import { BalloonStates } from './BalloonStates';

export const doMultiply = (num1: number, num2: number): number => num1 * num2;

export const pause = (delayMs: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, delayMs));

export const makeBalloon = (color: string, size: number, state: BalloonStates): Balloon => {
  return new Balloon(size, color, state);
};

export const getRandomInt = (max: number): number => {
  return parseInt((Math.random() * max).toFixed());
};

export const getRandomState = (): BalloonStates => {
  switch (getRandomInt(3)) {
    case 1:
      return BalloonStates.empty;
    case 2:
      return BalloonStates.full;
    default:
      return BalloonStates.popped;
  }
};

export const getRandomColor = (): string => {
  return COLORS[getRandomInt(COLORS.length - 1)];
};

export const makeBalloons = async (): Promise<boolean> => {
  const MAX: number = 10;

  for (let pos: number = 1; pos < MAX + 1; pos++) {
    let action = getRandomInt(2);

    const balloon = makeBalloon(getRandomColor(), getRandomInt(10) + 1, getRandomState());

    try {
      switch (action) {
        case 1: // fill
          balloon.fill();
          break;
        case 2: // pop
          balloon.pop();
          break;
        default: // nothing
          balloon.describe();
      }
    } catch (err) {
      console.error(`  ERROR :: Action ${action} failed --> ${err}`);
    }

    console.log(`${pos} of ${MAX} :: ${balloon.describe()}`);

    await pause(250);
  }

  return true;
};

makeBalloons();
