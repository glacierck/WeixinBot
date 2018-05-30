const Nextai = require('../nextai');

const isdebug = false;
const nai = new Nextai({
    token:'856C53213FEF50370E5BD0484AC7BD8B',
});

nai.on('iqa', (msg) => {
    console.log('iqa >>>');
    console.log(JSON.stringify(msg, null, 2));
});

nai.on('event', (msg) => {
    console.log('iqa >>>');
    console.log(JSON.stringify(msg, null, 2));
});
nai.on('echo', (msg) => {
    console.log('iqa >>>');
    console.log(JSON.stringify(msg, null, 2));
});
nai.on('ask', (msg) => {
    console.log('iqa >>>');
    console.log(JSON.stringify(msg, null, 2));
});
nai.on('confirm', (msg) => {
    console.log('iqa >>>');
    console.log(JSON.stringify(msg, null, 2));
});
nai.on('dim', (msg) => {
    console.log('iqa >>>');
    console.log(JSON.stringify(msg, null, 2));
});

(async() => {
    const data = await nai.send({
        uid:'5EC1604D8D59AA087DE0101AC4F55BE',
        txt:'开港股账户',
        timestamp:null,
    });

    //
    // console.log(data);




})();