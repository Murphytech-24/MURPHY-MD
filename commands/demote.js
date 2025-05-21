module.exports = {
  name: 'demote',
  description: 'Retrograder un admin en membre',
  category: 'group',
  usage: '!demote @utilisateur',
  async execute(sock, m) {
    if (!m.isGroup) return m.reply('𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝙴 𝚁𝙴́𝚂𝙴𝚁𝚅𝙴́𝙴 𝙰𝚄𝚇 𝙶𝚁𝙾𝚄𝙿𝙴 𝙱𝚁𝙾🤖.')
    if (!m.isAdmin) return m.reply('𝚃𝚄 𝙳𝙾𝙸𝚂 𝙴̂𝚃𝚁𝙴 𝙰𝙳𝙼𝙸𝙽𝚂 𝙼𝚈 𝙱𝚁𝙾🤖.')
    if (!m.mentionedJid || m.mentionedJid.length === 0) return m.reply('𝙼𝚎𝚗𝚝𝚒𝚘𝚗𝚗𝚎 𝚞𝚗 𝚞𝚝𝚒𝚕𝚒𝚜𝚊𝚝𝚎𝚞𝚛 𝙰̊ 𝙳𝙴𝙼𝙾𝚃𝙴 𝙱𝚁𝙾🤖.')

    try {
      await sock.groupParticipantsUpdate(m.chat, [m.mentionedJid[0]], 'demote')
      m.reply('𝚄𝚝𝚒𝚕𝚒𝚜𝚊𝚝𝚎𝚞𝚛 𝚛𝚎́𝚝𝚛𝚘𝚐𝚛𝚊𝚍𝚎́ 𝚖𝚎𝚖𝚋𝚛𝚎🤖.')
    } catch (e) {
      console.error(e)
      m.reply('𝙸𝚖𝚙𝚘𝚜𝚜𝚒𝚋𝚕𝚎 𝚍𝚎 𝚛𝚎́𝚝𝚛𝚘𝚐𝚛𝚊𝚍𝚎𝚛 𝚌𝚎𝚝 𝚞𝚝𝚒𝚕𝚒𝚜𝚊𝚝𝚎𝚞𝚛🤖.')
    }
  }
        }
