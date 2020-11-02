

global.R = require('ramda')
global.sleep = (t) => new Promise((r) => setTimeout(r, t))


export const MONGODB_URL = 'mongodb://username:password@mongo:27017'

export const AUTH_SECRET_KEY = 'i3ce65JTMXjEpnuvghCblFGJpgZa2x2M'
export const AUTH_COOKIE_KEY = 'jsonwebtoken'
export const AUTH_COOKIE_TIME = 14 * 24 * 60 * 60





