/**
 * Created by northka.chen on 2017/1/10.
 */
const Redis  = require('ioredis')

module.exports = function (addressList, option, id) {
    let pool
    if(option.isCluster){
        pool = new Redis.Cluster(addressList, option)
    }else{
        let configure = Object.assign({
            host: addressList[0].host,
            port: addressList[0].port
        }, option)
        pool = new Redis(configure)
    }
    pool.id = id
    return pool
}