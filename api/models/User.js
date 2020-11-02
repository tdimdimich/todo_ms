import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const UserSchema = new Schema({
	username: String,
	password: { type: 'string', select: false },
})

const User = mongoose.model('User', UserSchema)

export default User
