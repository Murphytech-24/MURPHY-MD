module.exports = {
  name: 'tag',
  description: 'Mentionne tous les membres du groupe',
  category: 'group',
  usage: '!tag',
  async execute(sock, m, args, store) {
    if (!m.isGroup) return m.reply('𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝙴 𝚁𝙴́𝚂𝙴𝚁𝚅𝙴́𝙴 𝙰𝚄𝚇 𝙶𝚁𝙾𝚄𝙿𝙴 𝙱𝚁𝙾🤖.')

    try {
      const groupMetadata = await sock.groupMetadata(m.chat)
      const participants = groupMetadata.participants.map(p => p.id)
      let text = 'Voici tous les membres :\n'
      for (const participant of participants) {
        text += `@${participant.split('@')[0]} `
      }
      await sock.sendMessage(m.chat, { text, mentions: participants })
    } catch (e) {
      console.error(e)
      m.reply('Erreur lors de la mention des membres.')
    }
  }
}