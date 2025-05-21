let isSelf = false

module.exports = {
  name: 'self',
  description: 'Met le bot en mode self (privé)',
  category: 'core',
  usage: '!self',
  async execute(sock, m) {
    isSelf = true
    m.reply('𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵 𝙰𝙲𝚃𝙸𝚅𝙴́ 𝙰𝚅𝙴𝙲 𝚂𝚄𝙲𝙲𝙴̀𝚂✅. 𝙻𝙴 𝙱𝙾𝚃 𝚁𝙴́𝙿𝙾𝙽𝙳𝚁𝙰 𝚄𝙽𝙸𝚀𝚄𝙴𝙼𝙴𝙽𝚃 𝙰𝚄 𝙿𝚁𝙾𝙿𝚁𝙸𝙴́𝚃𝙰𝙸𝚁𝙴⚜️.')
  }
}