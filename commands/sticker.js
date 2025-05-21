module.exports = {
  name: 'sticker',
  description: 'Créer un sticker à partir d\'une image ou vidéo',
  category: 'utility',
  usage: '!sticker (répondre à une image ou vidéo)',
  async execute(sock, m) {
    try {
      if (!m.quoted || (!m.quoted.imageMessage && !m.quoted.videoMessage)) {
        return m.reply('Réponds à une image ou vidéo pour créer un sticker.')
      }
      const media = m.quoted
      const buffer = await sock.downloadMediaMessage(media)
      const sticker = { sticker: { url: buffer }, mimetype: 'image/webp' }
      await sock.sendMessage(m.chat, sticker, { quoted: m })
    } catch (e) {
      console.error(e)
      m.reply('Erreur lors de la création du sticker.')
    }
  }
}