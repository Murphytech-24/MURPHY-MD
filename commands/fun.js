module.exports = {
  name: 'fun',
  description: 'Commande fun simple',
  category: 'utility',
  usage: '!fun',
  async execute(sock, m) {
    const responses = [
      'Pourquoi les développeurs aiment le café ? Parce que ça les réveille !',
      'Coder c’est comme écrire un poème, mais pour une machine.',
      'Erreur 404 : blague non trouvée.',
      'Les bugs, c’est des fonctionnalités cachées !'
    ]
    const response = responses[Math.floor(Math.random() * responses.length)]
    m.reply(response)
  }
}