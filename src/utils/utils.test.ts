import { expect, describe, it } from "vitest";
import { formatCurrency } from ".";

describe("formatCurruncy", () => {
  it("return '$100' with amount = 100", () => {
    expect(formatCurrency(100)).toBe("$100");
  });

  it("return '$300.25' with amount = 300.25", () => {
    expect(formatCurrency(300.25)).toBe("$300.25");
  });

  it("return '$1,000' with amount = 1000 ", () => {
    expect(formatCurrency(1000)).toBe("$1,000");
  });

  it("return '$32,000.25' with amount = 32000.25", () => {
    expect(formatCurrency(32000.25)).toBe("$32,000.25");
  });
});
