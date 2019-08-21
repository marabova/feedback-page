import Form from "../scripts/components/form";
import writeSingleComment from "../scripts/components/comment";
import getRating from "../scripts/utils/getRating";
import { getLocalStorage } from "../scripts/utils/getLocalStorage";
import { comments } from "./__mocks__/comments";

jest.mock("../scripts/utils/getLocalStorage", () => ({
  getLocalStorage: jest.fn()
}));
jest.mock("../scripts/utils/getRating");
jest.mock("../scripts/components/comment");

function FormDataMock() {
  this.replace = jest.fn();
  this.forEach = jest.fn();
}
global.FormData = FormDataMock;

describe("Form class", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div>
      <form id="feedback-form" name="feedback-form">
              <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input type="text" required="required" class="form-control required" id="name" name="name" placeholder="Full Name">
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                Rating
                <div class="starrating risingstar d-flex justify-content-end flex-row-reverse">
                  <input type="radio" checked="" id="star5" name="rating" value="5"><label for="star5" title="5 star"></label>
                  <input type="radio" id="star4" name="rating" value="4"><label for="star4" title="4 star"></label>
                  <input type="radio" id="star3" name="rating" value="3"><label for="star3" title="3 star"></label>
                  <input type="radio" id="star2" name="rating" value="2"><label for="star2" title="2 star"></label>
                  <input type="radio" id="star1" name="rating" value="1"><label for="star1" title="1 star"></label>
                </div>
              </div>
              <div class="form-group">
                <label for="comment">Comment</label>
                <textarea class="form-control" name="comment" id="comment" rows="5"></textarea>
              </div>
              <input type="submit" class="btn btn-primary" value="Submit">
            </form>
            </div>
      `;
    jest.spyOn(Storage.prototype, "setItem");
    getRating.mockClear();
    writeSingleComment.mockClear();
  });

  afterEach(() => {
    localStorage.setItem.mockRestore();
  });

  it("should attach event listener", () => {
    const dummyForm = document.querySelector("form");
    const attachEventListener = (Form.prototype.attachEventListener = jest.fn());
    const form = new Form(dummyForm);
    expect(attachEventListener).toHaveBeenCalledTimes(1);
  });

  it("should set feedback in local storage when updateFeedBackStore is called", () => {
    const dummyForm = document.querySelector("form");
    getLocalStorage.mockReturnValueOnce(comments.oneComment);
    JSON.parse = jest.fn().mockImplementationOnce(() => comments.oneComment);
    const form = new Form(dummyForm);
    form.updateFeedBackStore(comments.oneComment[0]);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "feedback",
      JSON.stringify(comments.oneComment)
    );
  });

  it("handleSubmit", () => {
    const dummyForm = document.querySelector("form");
    const event = {
      preventDefault: jest.fn()
    };

    const updateFeedBackStore = (Form.prototype.attachEventListener = jest.fn());
    const form = new Form(dummyForm);
    form.handleSubmit(event);

    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(updateFeedBackStore).toHaveBeenCalledTimes(1);
    expect(getRating).toHaveBeenCalledTimes(1);
    expect(writeSingleComment).toHaveBeenCalledTimes(1);
  });
});
