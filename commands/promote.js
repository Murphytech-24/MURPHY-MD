module.exports = {
  name: 'promote',
  description: 'Promouvoir un membre en admin',
  category: 'group',
  usage: '!promote @utilisateur',
  async execute(sock, m) {
    if (!m.isGroup) return m.reply('𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝙴 𝚁𝙴́𝚂𝙴𝚁𝚅𝙴́𝙴 𝙰𝚄𝚇 𝙶𝚁𝙾𝚄𝙿𝙴𝚂 𝙱𝚁𝙾🤖.')
    if (!m.isAdmin) return m.reply('𝚃𝚄 𝙳𝙾𝙸𝚂 𝙴̂𝚃𝚁𝙴 𝙰𝙳𝙼𝙸𝙽 𝙱𝚁𝙾🤖.')
    if (!m.mentionedJid || m.mentionedJid.length === 0) return m.reply('𝙼𝙴𝙽𝚃𝙸𝙾𝙽𝙽𝙴 𝚄𝙽 𝚄𝚃𝙸𝙻𝙸𝚂𝙰𝚃𝙴𝚄𝚁 𝙰̊ 𝙿𝚁𝙾𝙼𝙾𝚄𝚅𝙾𝙸𝚁 𝙱𝚁𝙾🤖.')

    try {
      await sock.groupParticipantsUpdate(m.chat, [m.mentionedJid[0]], 'promote')
      m.reply('𝚄𝚝𝚒𝚕𝚒𝚜𝚊𝚝𝚎𝚞𝚛 𝚙𝚛𝚘𝚖𝚞 𝚊𝚍𝚖𝚒𝚗 🤖.')
    } catch (e) {
      console.error(e)
      m.reply('𝙸𝚖𝚙𝚘𝚜𝚜𝚒𝚋𝚕𝚎 𝚍𝚎 𝚙𝚛𝚘𝚖𝚘𝚞𝚟𝚘𝚒𝚛 𝚌𝚎𝚝 𝚞𝚝𝚒𝚕𝚒𝚜𝚊𝚝𝚎𝚞𝚛 🤖.')
    }
  }
}