const { Client, Collection } = require('discord.js');
const { TOKEN, HOST, PORT, GAME } = require('./config');
const { readdirSync } = require("fs");
const Gamedig = require('gamedig');

const client = new Client();
["commands", "cooldowns"].forEach(x => client[x] = new Collection());


const loadCommands = (dir = "./commands/") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
      console.log(`Commande Chargée: ${getFileName.help.name}`);
    };
  });
};

const loadEvents = (dir = "./events/") => {
  readdirSync(dir).forEach(dirs => {
    const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const event of events) {
      const evt = require(`${dir}/${dirs}/${event}`);
      const evtName = event.split(".")[0];
      client.on(evtName, evt.bind(null, client));
      console.log(`Evenement chargé: ${evtName}`);
    };
  });
};

client.on('ready', () => {
  let interval = setInterval(function() {
      Gamedig.query({
          type: GAME,
          host: HOST,
          port: PORT
      }).then((state) => {
          client.user.setActivity(`${state.players.length} / ${state.maxplayers} Habitants En Ville`, {
              type: 'WATCHING'
          });
      }).catch((error) => {
          client.user.setActivity("❌ Serveur éteint ❌", {
              type: 'WATCHING'
          });
      });
  }, 5000);
});

loadCommands();
loadEvents();

client.login(process.env.TOKEN);