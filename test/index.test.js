const stringFSM = require("../index");
describe("string_fsm", () => {
  it('"ignore\\"name\\"" 应该解析为一个字符串', () => {
    const str = '"ignore\\"name\\""';
    const result = stringFSM(str);
    expect(result.length).toBe(1);
    expect(result[0]).toBe('ignore\\"name\\"');
  });

  it("name 应该解析为一个字符串", () => {
    const str = `"name"`;
    const result = stringFSM(str);
    expect(result.length).toBe(1);
    expect(result[0]).toBe("name");
  });
});
