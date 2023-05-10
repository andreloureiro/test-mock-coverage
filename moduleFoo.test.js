const { sum } = require("./moduleFoo")
const { startTransaction } = require('./startTransaction')

const mockCallback = jest.fn();

jest.mock('./startTransaction', () => ({
	// startTransaction: jest.fn(), // coverage fail
	startTransaction: jest.fn().mockImplementation((foo, bar, callback) => callback()), //coverage success
}));

describe('sum', () => {
	it('sums', () => {
		sum();

		expect(startTransaction).toHaveBeenCalled();
	});
});