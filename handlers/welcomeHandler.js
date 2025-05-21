
const fs = require('fs');
const config = require('../config');
const { downloadMediaMessage } = require('@whiskeysockets/baileys');

async function welcomeHandler(sock, update) {
    const { id, participants, action } = update;
    for (const user of participants) {
        try {
            const pp = await sock.profilePictureUrl(user, 'image').catch(_ => config.welcomeImage);
            const name = (await sock.onWhatsApp(user))[0]?.notify || "Quelqu’un";

            let message = {
                image: { url: action === 'add' ? config.welcomeImage : config.goodbyeImage },
                caption: action === 'add'
                    ? `Bienvenue @${user.split('@')[0]} dans le groupe !`
                    : `Au revoir @${user.split('@')[0]} !`,
                mentions: [user]
            };

            await sock.sendMessage(id, message);
        } catch (e) {
            console.error("Welcome/Goodbye error:", e);
        }
    }
}

module.exports = { welcomeHandler };
