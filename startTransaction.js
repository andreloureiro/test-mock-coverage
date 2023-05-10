async function startTransaction(foo, bar, callback) {
	const transaction = 'transaction';

	const result = await callback(transaction);
}

module.exports = {
	startTransaction,
};