const Validator = require('fastest-validator')

const v = new Validator({
	defaults: {
		string: { empty: false }
	}
})


module.exports = (schema) => {
	const validate = v.compile(schema)
	return (req, res, next) => {
		const check = validate(req.body)
		if (check !== true) {
			return res.status(422).send({ errors: check })
		} else {
			next()
		}
	}
}
