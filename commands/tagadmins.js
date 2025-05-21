module.exports = {
  name: 'tagadmins',
  description: 'Mentionne tous les admins du groupe',
  category: 'group',
  usage: '!tagadmins',
  async execute(sock, m) {
    if (!m.isGroup) return m.reply('𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝙴 𝚁𝙴́𝚂𝙴𝚁𝚅𝙴́𝙴 𝙰𝚄𝚇 𝙶𝚁𝙾𝚄𝙿𝙴🤖.')

    try {
      const groupMetadata = await sock.groupMetadata(m.chat)
      const admins = groupMetadata.participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin').map(p => p.id)
      if (admins.length === 0) return m.reply('Aucun admin trouvé.')
      let text = 'Admins du groupe :\n'
      for (const admin of admins) {
        text += `@${admin.split('@')[0]} `
      }
      await sock.sendMessage(m.chat, { text, mentions: admins })
    } catch (e) {
      console.error(e)
      m.reply('Erreur lors de la mention des admins.')
    }
  }
}