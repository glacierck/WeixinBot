const request = require('request');
/**
 * getDefer
 * @return {object} deferred
 */
const getDefer = () => {
    const deferred = {};
    deferred.promise = new Promise((resolve, reject) => {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });
    return deferred;
};

exports.DEFAULTS = {
    token:'856C53213FEF50370E5BD0484AC7BD8B',
    uid:'5EC1604D8D59AA087DE0101AC4F55BE3',
    eid:'02ABF0D8AE9D76EA588218F8039B64FA',
    txt:'开港股账户',
    timestamp:null,
    enable_verify:false,
    verify_sum:'',
    is_debug:false,
    timeout: 5000,
    debug: false
};

exports.sendRequest = (_hand,params = {}, timeout = 5000) => {
    const deferred = getDefer();
    request({
        method: 'POST',
        url: 'https://www.dolphin.ai/rest/v1/p.do',
        headers: [
            {
                name: 'content-type',
                value: 'application/x-www-form-urlencoded'
            }
        ],
        timeout: parseInt(timeout, 10),
        form: params
    }, (err, res) => {
        if (err) {
            deferred.reject(err);
        }else{
            const data = JSON.parse(res.body);
            deferred.resolve(data);

            const analyse_result = data.result[0];
            const reqtime = data.timestamp;
            const session = data.sid;
            const respcode = data.retnum;

            if (respcode != "0") {
                // that.showMessage(that.nobackmesg);
                return;
            }else{
                var josonob = analyse_result;

                var jsontemp = josonob;

                if(params.debug){//测试模式
                    console.log(JSON.stringify(data, null, 2));
                }else{
                    _hand.emit(jsontemp.action, Object.assign({},params, jsontemp));
                }

            }
        }



    });
    return deferred.promise;
};