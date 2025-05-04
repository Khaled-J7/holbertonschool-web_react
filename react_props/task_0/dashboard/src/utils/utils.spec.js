import { getFooterCopy, getFullYear, getLatestNotification }  from './utils';

describe('correct year', () => {
    let now = new Date();
    it('function getFullYear returns the correct year', () => {
        expect(getFullYear()).toBe(now.getFullYear());
    });
});

describe('getFooterCopy:returns the correct string when the argument is true or false', () => {
    it('true value', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });
    it('false value', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
});
  
describe('getLatestNotification:checking the returned string', () => {
    it('return value', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});