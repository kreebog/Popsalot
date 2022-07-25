import { Balloon } from "../src/Balloon";
import { COLORS } from "../src/Consts";
import { BalloonStates } from "../src/BalloonStates";

const color = COLORS[0];
const size = 1;
const state = BalloonStates.empty;

let balloon = new Balloon(size, color, state);

test(`New balloon.color should be ${color}`, () => {
  expect(balloon.color).toBe(color);
});

test(`New balloon.size should be ${size}`, () => {
  expect(balloon.size).toBe(size);
});

test(`New balloon.state should be ${state}`, () => {
  expect(balloon.state).toBe(state);
});

test(`balloon.fill should change state from empty to filled`, () => {
  balloon.fill();
  expect(balloon.state).toBe(BalloonStates.full);
});

test(`balloon.fill on a full balloon should throw`, () => {
  expect(balloon.fill()).toThrow();
});

test(`ballloon.pop should change state to popped`, () => {
  balloon.pop();
  expect(balloon.state).toBe(BalloonStates.popped);
});

test(`balloon.pop on a popped balloon should throw`, () => {
  expect(balloon.pop()).toThrow();
});
