const Weixinbot = require('../weixinbot');

const bot = new Weixinbot();

const _head_img = '[Pig] ：';


/*
* 知言机器人配置
* */
const Nextai = require('../nextai');
const isdebug = false;
const nai = new Nextai({
    token:'856C53213FEF50370E5BD0484AC7BD8B',
});

nai.on('iqa', (msg) => {
    console.log('iqa >>>');
    console.log(JSON.stringify(msg, null, 2));

    // bot.sendText(msg.botmsg.ToUserName, _head_img + msg.botmsg.Content);

    try {
        const iqa_answer = nai.delHtmlTag(msg.result.tip[0].answer) ;
        if(iqa_answer){
            bot.sendText(msg.botmsg.ToUserName, _head_img +  iqa_answer);
        }
    } catch (e) {
        console.error(e);
    }


});
nai.on('event', (msg) => {
    console.log('event >>>');
    console.log(JSON.stringify(msg, null, 2));
});
nai.on('echo', (msg) => {
    console.log('echo >>>');
    console.log(JSON.stringify(msg, null, 2));
});
nai.on('ask', (msg) => {
    console.log('ask >>>');
    console.log(JSON.stringify(msg, null, 2));
});
nai.on('confirm', (msg) => {
    console.log('confirm >>>');
    console.log(JSON.stringify(msg, null, 2));
});
nai.on('dim', (msg) => {
    console.log('dim >>>');
    console.log(JSON.stringify(msg, null, 2));
});



bot.on('qrcode', console.log);

bot.on('to_filehelper', (msg,CODES) => {
    console.log('to_filehelper >>>');
    if (msg.MsgType === CODES.MSGTYPE_SYSNOTICE) {
      return;
    }

    switch (msg.MsgType) {
      case CODES.MSGTYPE_APP:
        break;
      case CODES.MSGTYPE_EMOTICON:
        break;
      case CODES.MSGTYPE_IMAGE:
        break;
      case CODES.MSGTYPE_VOICE:
        break;
      case CODES.MSGTYPE_VIDEO:
        break;
      case CODES.MSGTYPE_MICROVIDEO:
        break;
      case CODES.MSGTYPE_TEXT:
        try {

            nai.send({
                uid:msg.FromUserName,
                txt:msg.Content,
                timestamp:msg.CreateTime,
                botmsg:msg,
            });

        } catch (e) {
          console.error(e);
        }
        break;
      case CODES.MSGTYPE_RECALLED:
        break;
      case CODES.MSGTYPE_LOCATION:
        break;
      case CODES.MSGTYPE_VOIPMSG:
      case CODES.MSGTYPE_VOIPNOTIFY:
      case CODES.MSGTYPE_VOIPINVITE:
        break;
      case CODES.MSGTYPE_POSSIBLEFRIEND_MSG:
        break;
      case CODES.MSGTYPE_VERIFYMSG:
        break;
      case CODES.MSGTYPE_SHARECARD:
        break;
      case CODES.MSGTYPE_SYS:
        break;
      default:
    }


});

bot.on('friend', (msg,CODES) => {
    // if (msg.MsgType === CODES.MSGTYPE_SYSNOTICE) {
    //   return;
    // }

    // switch (msg.MsgType) {
    //   case CODES.MSGTYPE_APP:
    //     break;
    //   case CODES.MSGTYPE_EMOTICON:
    //     break;
    //   case CODES.MSGTYPE_IMAGE:
    //     break;
    //   case CODES.MSGTYPE_VOICE:
    //     break;
    //   case CODES.MSGTYPE_VIDEO:
    //     break;
    //   case CODES.MSGTYPE_MICROVIDEO:
    //     break;
    //   case CODES.MSGTYPE_TEXT:
    //     try {
    //       await this.sendText(msg.FromUserName, msg.Content);
    //     } catch (e) {
    //       console.error(e);
    //     }
    //     break;
    //   case CODES.MSGTYPE_RECALLED:
    //     break;
    //   case CODES.MSGTYPE_LOCATION:
    //     break;
    //   case CODES.MSGTYPE_VOIPMSG:
    //   case CODES.MSGTYPE_VOIPNOTIFY:
    //   case CODES.MSGTYPE_VOIPINVITE:
    //     break;
    //   case CODES.MSGTYPE_POSSIBLEFRIEND_MSG:
    //     break;
    //   case CODES.MSGTYPE_VERIFYMSG:
    //     break;
    //   case CODES.MSGTYPE_SHARECARD:
    //     break;
    //   case CODES.MSGTYPE_SYS:
    //     break;
    //   default:
    // }
  // console.log(msg.Member.NickName + ': ' + msg.Content);
  // bot.sendText(msg.FromUserName, 'Got it');
});


bot.run();


