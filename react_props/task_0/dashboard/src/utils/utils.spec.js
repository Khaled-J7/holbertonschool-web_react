// Import the functions to test
import { getCurrentYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Utils Tests", () => {
  // Test for getCurrentYear
  describe("getCurrentYear", () => {
    it("should return the current year", () => {
      const currentYear = new Date().getFullYear();
      expect(getCurrentYear()).toBe(currentYear);
    });

    it("should not be a time bomb (year should always match the current year)", () => {
      // Mock the current date to ensure the function doesn't depend on a hardcoded year
      const realDate = Date;
      global.Date = jest.fn(() => ({
        getFullYear: () => 2023,
      }));
      expect(getCurrentYear()).toBe(2023);

      // Restore the original Date object
      global.Date = realDate;
    });
  });

  // Test for getFooterCopy
  describe("getFooterCopy", () => {
    it("should return 'Holberton School' when isIndex is true", () => {
      expect(getFooterCopy(true)).toBe("Holberton School");
    });

    it("should return 'Holberton School main dashboard' when isIndex is false", () => {
      expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    });
  });

  // Test for getLatestNotification
  describe("getLatestNotification", () => {
    it("should return the correct HTML string", () => {
      const expectedString = "<strong>Urgent requirement</strong> - complete by EOD";
      expect(getLatestNotification()).toBe(expectedString);
    });
  });
});
