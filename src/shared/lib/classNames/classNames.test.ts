import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional class", () => {
    const expected = "someClass class1 class2";
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });

  test("with mods &&  additional class", () => {
    const expected = "someClass class1 class2 hovered scrollable";
    expect(
      classNames("someClass", { hovered: true, scrollable: true }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });

  test("with mod=false && additional class", () => {
    const expected = "someClass class1 class2";
    expect(
      classNames("someClass", { hovered: false }, ["class1", "class2"])
    ).toBe(expected);
  });

  test("with mod=undefined && additional class", () => {
    const expected = "someClass class1 class2";
    expect(
      classNames("someClass", { hovered: undefined }, ["class1", "class2"])
    ).toBe(expected);
  });
});
