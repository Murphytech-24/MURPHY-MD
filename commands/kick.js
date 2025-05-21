module.exports = {
  name: 'kick',
  description: 'Expulse un utilisateur du groupe',
  category: 'group',
  usage: '!kick @utilisateur',
  async execute(sock, m, args) {
    if (!m.isGroup) return m.reply('𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝙴 𝚁𝙴́𝚂𝙴𝚁𝚅𝙴́𝙴 𝙰𝚄𝚇 𝙶𝚁𝙾𝚄𝙿𝙴🤖.')
    if (!m.isAdmin) return m.reply('𝚃𝚄 𝙳𝙾𝙸𝚂 𝙴̂𝚃𝚁𝙴 𝙰𝙳𝙼𝙸𝙽  𝙿𝙾𝚄𝚁 𝚄𝚃𝙸𝙻𝙸𝚂𝙴𝚁 𝙲𝙴𝚃𝚃𝙴 c𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝙴 𝙱𝚁𝙾🤖.')
    if (!m.mentionedJid || m.mentionedJid.length === 0) return m.reply('Mentionne un utilisateur à expulser.')

    try {
      await sock.groupParticipantsUpdate(m.chat, [m.mentionedJid[0]], 'remove')
      m.reply('Utilisateur expulsé.')
    } catch (e) {
      console.error(e)
      m.reply('Impossible d’expulser cet utilisateur.')
    }
  }
}