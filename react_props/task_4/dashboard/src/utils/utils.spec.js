import "./utils"
import { getCurrentYear, getFooterCopy, getLatestNotification} from "./utils"

test("testing the getCurrentYear function", () => {
    const CurrentYear = new Date
    expect(getCurrentYear()).toBe(CurrentYear.getFullYear())
})

test("testing the getFooterCopy function", () => {
    expect(getFooterCopy(true)).toBe("Holberton School")
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard")
})

test("testing the getLatestNotification function", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
})