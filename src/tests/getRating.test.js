import getRating from "../scripts/utils/getRating";
import ratingChart from "../scripts/components/chart";
import { getLocalStorage } from "../scripts/utils/getLocalStorage";
import { comments } from "./__mocks__/comments";

jest.mock("../scripts/utils/getLocalStorage", () => ({
  getLocalStorage: jest.fn()
}));
jest.mock("../scripts/components/chart");

describe("getRating", () => {
  beforeEach(() => {
    ratingChart.mockClear();
  });

  afterEach(() => {});

  it("it should call ratingChart once with one comment", () => {
    const expectedChart = [0, 0, 0, 0, 1];
    getLocalStorage.mockReturnValueOnce(comments.oneComment);
    JSON.parse = jest.fn().mockImplementationOnce(() => comments.oneComment);
    getRating();
    expect(ratingChart).toHaveBeenCalledTimes(1);
    expect(ratingChart).toHaveBeenCalledWith(expectedChart);
  });

  it("it should call ratingChart once with two comments", () => {
    const expectedChart = [0, 0, 0, 1, 1];
    getLocalStorage.mockReturnValueOnce(comments.twoComments);
    JSON.parse = jest.fn().mockImplementationOnce(() => comments.twoComments);
    getRating();
    expect(ratingChart).toHaveBeenCalledTimes(1);
    expect(ratingChart).toHaveBeenCalledWith(expectedChart);
  });
});
