module.exports = {
  name: 'info',
  description: 'Affiche les infos du bot',
  category: 'core',
  usage: '!info',
  async execute(sock, m) {
    const infoText = `
𝙱𝚘𝚝: 𝙼𝚄𝚁𝙿𝙷𝚈-𝙼𝙳
𝚟𝚎𝚛𝚜𝚒𝚘𝚗: 1.0.0
𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙿𝙴𝚁 𝙿𝙰𝚁: 𝙼𝚄𝚁𝙿𝙷𝚈 𝙼𝙾𝙳𝚂
𝙲𝙾𝙽𝚃𝙰𝙲𝚃: 𝙼𝚄𝚁𝙿𝙷𝚈242068554596@whatsapp.com
 𝚕𝚒𝚗𝚔 𝚌𝚑𝚊𝚒̂𝚗𝚎:https://whatsapp.com/channel/0029Vb6i9ym8qIzuNwnLLe0g
 
   𝙼𝚄𝚁𝙿𝙷𝚈 𝚅𝙾𝚄𝚂 𝚂𝙾𝚄𝙷𝙰𝙸𝚃𝙴𝚉 𝙻𝙴 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝚄𝙴 𝙱𝚈 𝙼𝚄𝚁𝙿𝙷𝚈-𝙼𝙳 `
    m.reply(infoText)
  }
}