import * as Consts from './Consts'
import { Balloon } from './Balloon'
import { BalloonStates } from './BalloonStates'

const color = Consts.COLORS[0]
const size = 1
const state = BalloonStates.empty
const description = 'I am a red ballon that is empty and I am 1 inches in diameter.'

const balloon = new Balloon(size, color, state)

test(`New balloon.color should be ${color}`, () => {
  expect(balloon.color).toBe(color)
})

test(`New balloon.size should be ${size}`, () => {
  expect(balloon.size).toBe(size)
})

test(`New balloon.state should be ${state}`, () => {
  expect(balloon.state).toBe(state)
})

test(`New balloon.state name should be ${balloon.getStateName(BalloonStates.empty)}`, () => {
  expect(balloon.getStateName(balloon.state)).toBe(balloon.getStateName(BalloonStates.empty))
})

test(`Balloon.describe should be ${description}`, () => {
  expect(balloon.describe()).toBe(description)
})

test('balloon.pop on an empty balloon should throw', () => {
  function popBalloon (): void {
    balloon.pop()
  }

  expect(popBalloon).toThrowError(Consts.ERROR_EMPTY_CANT_POP)
})

test('balloon.fill should change state from empty to filled', () => {
  balloon.fill()
  expect(balloon.state).toBe(BalloonStates.full)
})

test(`New balloon.state name should be ${balloon.getStateName(BalloonStates.full)}`, () => {
  expect(balloon.getStateName(balloon.state)).toBe(balloon.getStateName(BalloonStates.full))
})

test('balloon.fill on a full balloon should throw', () => {
  function fillBalloon (): void {
    balloon.fill()
  }

  expect(fillBalloon).toThrowError(Consts.ERROR_ALREADY_FULL)
})

test('ballloon.pop should change state to popped', () => {
  balloon.pop()
  expect(balloon.state).toBe(BalloonStates.popped)
})

test(`New balloon.state name should be ${balloon.getStateName(BalloonStates.popped)}`, () => {
  expect(balloon.getStateName(balloon.state)).toBe(balloon.getStateName(BalloonStates.popped))
})

test('balloon.pop on a popped balloon should throw', () => {
  function popBalloon (): void {
    balloon.pop()
  }

  expect(popBalloon).toThrow(Consts.ERROR_ALREADY_POPPED)
})

test('balloon.fill on a popped balloon should throw', () => {
  function fillBalloon (): void {
    balloon.fill()
  }

  expect(fillBalloon).toThrow(Consts.ERROR_POPPED_CANT_FILL)
})
