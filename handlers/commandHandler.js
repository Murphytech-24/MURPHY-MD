const fs = require("fs");
const path = require("path");
const config = require("../config");

const commands = new Map();

const commandFiles = fs.readdirSync(path.join(__dirname, "../commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`../commands/${file}`);
  commands.set(command.name, command);
}

module.exports = async (sock, msg) => {
  try {
    const from = msg.key.remoteJid;
    const type = Object.keys(msg.message)[0];
    const body = msg.message.conversation || msg.message[type]?.caption || msg.message[type]?.text || "";
    const prefix = config.prefix;

    if (!body.startsWith(prefix)) return;
    const args = body.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = commands.get(commandName);
    if (command) {
      command.execute(sock, msg, args);
    }
  } catch (err) {
    console.error(err);
  }
};
