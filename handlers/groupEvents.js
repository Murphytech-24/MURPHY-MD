const { downloadContentFromMessage, proto } = require('@whiskeysockets/baileys');
const fs = require("fs");
const config = require("../config");

async function welcomeHandler(sock, update) {
    const metadata = await sock.groupMetadata(update.id);
    for (const participant of update.participants) {
        if (update.action === 'add') {
            const name = (await sock.onWhatsApp(participant))[0]?.notify || participant;
            const message = `Bienvenue à ${name} dans le groupe ${metadata.subject}!`;
            const image = { url: config.welcomeImage };
            await sock.sendMessage(update.id, { image, caption: message });
        }
    }
}

async function goodbyeHandler(sock, update) {
    const metadata = await sock.groupMetadata(update.id);
    for (const participant of update.participants) {
        if (update.action === 'remove') {
            const name = (await sock.onWhatsApp(participant))[0]?.notify || participant;
            const message = `${name} a quitté le groupe ${metadata.subject}.`;
            const image = { url: config.goodbyeImage };
            await sock.sendMessage(update.id, { image, caption: message });
        }
    }
}

module.exports = { welcomeHandler, goodbyeHandler };
