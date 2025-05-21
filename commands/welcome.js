const { setWelcome, getWelcome } = require('../../lib/settings');

module.exports = {
  name: 'welcome',
  description: 'Active ou désactive le message de bienvenue dans le groupe',
  category: 'group',
  usage: '!welcome on/off',
  async execute(sock, m, args) {
    if (!m.isGroup) return m.reply('𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝙴 𝚁𝙴́𝚂𝙴𝚁𝚅𝙴́𝙴 𝙰𝚄𝚇 𝙶𝚁𝙾𝚄𝙿𝙴🤖.');
    if (!m.isAdmin) return m.reply('𝚃𝚄 𝙳𝙾𝙸𝚂 𝙴̂𝚃𝚁𝙴 𝙰𝙳𝙼𝙸𝙽 𝙿𝙾𝚄𝚁 𝚄𝚃𝙸𝙻𝙸𝚂𝙴𝚁 𝙲𝙴𝚃𝚃𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝙴🤖.');

    const state = args[0]?.toLowerCase();
    if (!['on', 'off'].includes(state)) {
      return m.reply('Utilisation : !welcome on ou !welcome off');
    }

    setWelcome(m.chat, state === 'on');
    m.reply(`Message de bienvenue ${state === 'on' ? 'activé' : 'désactivé'} pour ce groupe.`);
  }
};