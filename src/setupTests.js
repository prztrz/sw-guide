import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { HTTPMock } from "testUtils";

// do not display warning messages in jest console
const consoleWarn = jest.spyOn(console, "warn").mockImplementation(() => {});

beforeEach(() => {
  consoleWarn.mockClear();
});

afterEach(() => {
  HTTPMock.reset();
});

afterAll(() => {
  consoleWarn.mockRestore();
});
