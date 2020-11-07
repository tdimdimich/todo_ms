
module.exports = (err, req, res, next) => {
	console.error(err)
	res.status(err.status || 500).send({ error: err.message })
}
