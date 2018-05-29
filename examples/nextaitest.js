const Nextai = require('../nextai');


const nai = new Nextai({key: 'xxx'});

(async() => {
    const result = await nai.send({
        userid: 1,
        info: '你好吗',
        loc: '南京市'
    });
    console.log(result);
})();