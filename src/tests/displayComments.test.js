import displayComments from "../scripts/utils/displayComments";
import writeSingleComment from "../scripts/components/comment";
import { getLocalStorage } from "../scripts/utils/getLocalStorage";
import { comments } from "./__mocks__/comments";
jest.mock("../scripts/components/comment");
jest.mock("../scripts/utils/getLocalStorage", () => ({
  getLocalStorage: jest.fn()
}));
describe("displayComments", () => {
  beforeEach(() => {
    writeSingleComment.mockClear();
  });

  afterEach(() => {});

  it("it should call writeSingleComment once with comment", () => {
    getLocalStorage.mockReturnValueOnce(comments.oneComment);
    JSON.parse = jest.fn().mockImplementationOnce(() => comments.oneComment);
    displayComments();
    expect(writeSingleComment).toHaveBeenCalledTimes(1);
    expect(writeSingleComment).toHaveBeenCalledWith(comments.oneComment[0]);
  });

  it("it should call writeSingleComment for each comment when we have more than one", () => {
    getLocalStorage.mockReturnValueOnce(comments.twoComments);
    JSON.parse = jest.fn().mockImplementationOnce(() => comments.twoComments);
    displayComments();
    expect(writeSingleComment).toHaveBeenCalledTimes(2);
    expect(writeSingleComment).toHaveBeenCalledWith(comments.twoComments[0]);
    expect(writeSingleComment).toHaveBeenCalledWith(comments.twoComments[1]);
  });
});
