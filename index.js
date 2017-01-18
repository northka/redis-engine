/**
 * Created by northka.chen on 2016/11/28.
 */
const request = require('./lib/request')
const poolConfig = require('./lib/poolConfig')
const parseReqObj = require('./lib/parseReqObj')
module.exports = {
    request,
    poolConfig,
    parseReqObj
}