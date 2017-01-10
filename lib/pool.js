/**
 * Created by northka.chen on 2017/1/10.
 */
const Redis  = require('ioredis')

module.exports = function (addressList, option, id) {
    let pool = new Redis.Cluster(addressList, option)
    pool.id = id
    return pool
}