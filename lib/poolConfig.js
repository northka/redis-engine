/**
 * Created by northka.chen on 2017/1/10.
 */
const pool      = require('./pool')
const poolCache = require('./poolCache')

module.exports = function (config) {
    if(!config.id){
        throw new Error('Pool need id')
    }
    let address = []
    if(Array.isArray(config.host)){
        if(Array.isArray(config.port)){
            if(config.host.length !== config.port.length){
                throw new Error('the number of host is not equal to  port')
            }
            for(let i = 0 ; i  < config.host.length ; i++){
                address.push({
                    host: config.host[i],
                    port: config.port[i]
                })
            }
        }else{
            for(let i = 0 ; i  < config.host.length ; i++){
                address.push({
                    host: config.host[i],
                    port: config.port
                })
            }
        }
    }else{
        address.push({
            host: config.host,
            port: config.port
        })
    }

    poolCache.addPool(pool(address, config.option))
}