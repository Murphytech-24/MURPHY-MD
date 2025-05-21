const { setGoodbye, getGoodbye } = require('../../lib/settings');

module.exports = {
  name: 'goodbye',
  description: 'Active ou désactive le message d\'au revoir dans le groupe',
  category: 'group',
  usage: '!goodbye on/off',
  async execute(sock, m, args) {
    if (!m.isGroup) return m.reply('𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝙴 𝚁𝙴́𝚂𝙴𝚁𝚅𝙴́𝙴 𝙰𝚄𝚇 𝙶𝚁𝙾𝚄𝙿𝙴𝚂 𝙱𝚁𝙾🤖.');
    if (!m.isAdmin) return m.reply('𝚃𝚄 𝙳𝙾𝙸𝚂 𝙴̂𝚃𝚁𝙴 𝙰𝙳𝙼𝙸𝙽 𝙿𝙾𝚄𝚁 𝚄𝚃𝙸𝙻𝙸𝚂𝙴𝚁 𝙲𝙴𝚃𝚃𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝙴 𝙱𝚁𝙾🤖.');

    const state = args[0]?.toLowerCase();
    if (!['on', 'off'].includes(state)) {
      return m.reply('Utilisation : !goodbye on ou !goodbye off');
    }

    setGoodbye(m.chat, state === 'on');
    m.reply(`Message d'au revoir ${state === 'on' ? 'activé' : 'désactivé'} pour ce groupe.`);
  }
};