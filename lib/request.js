/**
 * Created by northka.chen on 2017/1/10.
 */
const poolCache = require('./poolCache')

function request(reqObj, successCallback, errorCallback){
    if(this.option.isPool == true){
        let pool = poolCache.getPool(this.poolId)
        query.call(this, pool, reqObj, successCallback, errorCallback)
    }
}

function query(pool, reqObj, successCallback, errorCallback){
    let self = this,
        type = reqObj.type || this.option.type,
        params = reqObj.params
    if(Array.isArray(reqObj.params)){
        pool[type](...params,function (err, result) {
            if(err){
                errorCallback(err)
            }
            successCallback(result)
        })
    }else{
        pool[type](params,function (err, result) {
            if(err){
                errorCallback(err)
            }
            successCallback(result)
        })
    }
}

module.exports = request