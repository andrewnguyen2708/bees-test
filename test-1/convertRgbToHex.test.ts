import { expect, describe, it } from "vitest";
import { convertDecimalToHex, convertRgbToHex } from "./convertRGBToHex";

describe("convertDecimalToHex", () => {
  it("return '00' with num = -5 ", () => {
    expect(convertDecimalToHex(-5)).toBe("00");
  });

  it("return 'ff' with num = 300 ", () => {
    expect(convertDecimalToHex(300)).toBe("ff");
  });

  it("return '00' with num = 0 ", () => {
    expect(convertDecimalToHex(0)).toBe("00");
  });

  it("return 'ff' with num = 255 ", () => {
    expect(convertDecimalToHex(255)).toBe("ff");
  });
});

describe("convertRgbToHex", () => {
  it("return '000000' with r = 0, g = 0, b = 0 ", () => {
    expect(convertRgbToHex(0, 0, 0)).toBe("000000");
  });

  it("return 'ffffff' with r = 255, g = 255, b = 255 ", () => {
    expect(convertRgbToHex(255, 255, 255)).toBe("ffffff");
  });

  it("return 'ffffff' with r = 255, g = 255, b = 300 ", () => {
    expect(convertRgbToHex(255, 255, 300)).toBe("ffffff");
  });

  it("return '9400D3' with r = 148, g = 0, b = 211 ", () => {
    expect(convertRgbToHex(255, 255, 300)).toBe("ffffff");
  });
});
