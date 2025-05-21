const fs = require('fs');
const { proto } = require('@whiskeysockets/baileys');

module.exports = {
  name: "menu",
  execute: async (sock, msg) => {
    const jid = msg.key.remoteJid;
    const mediaPath = './media/menu.jpg';

    const menuText = `
╭───「 *♧🕷️ＭＵＲＰＨＹ-ＭＤ🕷️♧* 」───╮
│
├■🕷️!ＫＩＣＫ
├■🕷️!ＴＡＧ
├■🕷️!ＰＲＯＭＯＴＥ
├■🕷️!ＤＥＭＯＴＥ
├■🕷️!ＳＴＩＣＫＥＲ
├■🕷️!ＦＵＮ
├■🕷️!ＨＥＬＰ
├■🕷️!ＴＡＧＡＤＭＩＮＳ
├■🕷️!ＳＥＬＦ
├■🕷️!ＰＵＢＬＩＣ
├■🕷️!ＩＮＦＯ
├■🕷️!ＷＥＬＣＯＭＥ
├■🕷️!ＧＯＯＤＢＹＥ
│ＤＥＶ ＢＹ ＭＵＲＰＨＹ ＭＯＤＳ🕷️
 |ＯＷＮＥＲＳ:242068554596
╰────────────────────╯`;

    const buffer = fs.readFileSync(mediaPath);
    await sock.sendMessage(jid, { image: buffer, caption: menuText }, { quoted: msg });
  }
};
