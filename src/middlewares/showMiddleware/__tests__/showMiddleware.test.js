/*import showMiddleware from "../showMiddleware";

jest.mock("../../../Api");

const show = require("../../../Api").show;
show.mockImplementation(() => new Promise(r => r(["test", "data"])));

describe("showMiddleware", () => {
  it("Вызывается функция show из модуля ../api если приходит action с типом SEARCH_REQUEST", () => {
    const storeMock: any = {
      dispatch: jest.fn().mockImplementation(() => "")
    };
    showMiddleware(storeMock)(jest.fn())({ type: "SEARCH_REQUEST" });
    expect(show).toHaveBeenCalledTimes(1);
  });
});*/
