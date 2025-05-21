const commandsList = [
  'kick', 'tag', 'promote', 'demote', 'sticker', 'fun', 'help', 'tagadmins', 'self', 'public', 'info'
]

module.exports = {
  name: 'help',
  description: 'Liste les commandes disponibles',
  category: 'core',
  usage: '!help',
  async execute(sock, m) {
    let text = 'Voici les commandes disponibles :\n'
    for (const cmd of commandsList) {
      text += `- ${cmd}\n`
    }
    m.reply(text)
  }
}