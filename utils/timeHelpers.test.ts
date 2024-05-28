import { humanFriendlyMovieDuration } from "./timeHelpers";

describe("human friendly movie duration", () =>{

  test('converts seconds to xh ymin format', () => {
    const durationInSeconds = 8100;
    const expectedOutput = '2h 15min';
    expect(humanFriendlyMovieDuration(durationInSeconds)).toBe(expectedOutput);
  })

  test('does not output hours if it is less than one', () => {
    const durationInSeconds = 2040; 
    const expectedOutput = '34min';
    expect(humanFriendlyMovieDuration(durationInSeconds)).toBe(expectedOutput);
  })

  test('outputs 0 mins if it is less than one minute', () => {
    const durationInSeconds = 45;
    const expectedOutput = '0min';
    expect(humanFriendlyMovieDuration(durationInSeconds)).toBe(expectedOutput);
  })
})