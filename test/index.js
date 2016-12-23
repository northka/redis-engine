/**
 * Created by northka.chen on 2016/12/23.
 */
const redis = require('redis'),
    port  = 6379,
    host  = '10.10.62.105'
let client = redis.createClient(port,host,{})
client.on('error', function (er) {
    console.trace('Here I am');
    console.error(er.stack);
});
//client.quit()