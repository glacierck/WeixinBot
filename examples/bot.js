const Weixinbot = require('../weixinbot');

const bot = new Weixinbot();

const _head_img = '[Pig] ：';

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
            bot.sendText(msg.ToUserName, _head_img + msg.Content);
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
