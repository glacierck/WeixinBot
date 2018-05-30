const { DEFAULTS, sendRequest } = require('./common');
const EventEmitter = require('events');
class Nextai extends EventEmitter {
    constructor(options) {
        super();
        Nextai.options = Object.assign({}, DEFAULTS, options);
        this.send = async (opts) => {
            this.params = Object.assign({}, Nextai.options, opts);
            const timeout = this.params.timeout;
            delete this.params.timeout;
            let ret = sendRequest(this,this.params, timeout);

            return ret
        };


    }

    /*
     * 清除html标签
    * */
    delHtmlTag(str) {
        return (str + "").replace(/<br\s*\/?>/gi,'\n')
            .replace(/<[^>]+>/g, "")
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;');
        ;//去掉所有的html标记
    }

    /*
    * 富文本转化
    * */
    escape_html(str) {
        return (str + '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    /*
    * 去除换行
    * */
    ClearBr(str) {
        str = str.replace(/<\/?.+?>/g, "");
        str = str.replace(/[\r\n]/g, "");
        return str;
    }

    /*
    * 去除字符串中间空格
    * */
    CTim(str) {
        return str.replace(/\s/g, '');
    }

};

module.exports = Nextai