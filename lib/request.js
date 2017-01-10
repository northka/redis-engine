/**
 * Created by northka.chen on 2017/1/10.
 */
const poolCache = require('./poolCache')

function request(reqObj, successCallback, errorCallback){
    if(this.option.isPool == true){
        let pool = poolCache.getPool(this.poolId)
    }
}