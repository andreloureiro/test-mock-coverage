const { startTransaction } = require('./startTransaction')

function sum(a, b) {
	startTransaction(a, b, transaction => transaction)
}

module.exports = { sum }