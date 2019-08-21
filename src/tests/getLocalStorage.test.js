import { getLocalStorage } from "../scripts/utils/getLocalStorage";

describe("getLocalStorage", () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, "getItem");
  });

  afterEach(() => {
    localStorage.getItem.mockRestore();
  });

  it("should get feedback localeStorage", () => {
    getLocalStorage();
    expect(localStorage.getItem).toHaveBeenCalledWith("feedback");
  });
});
