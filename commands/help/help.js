const { MessageEmbed } = require ("discord.js");
const { PREFIX } = require("../../config")
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');
const { FOOTER, FOOTERI } = require('./../../config');

module.exports.run = (client, message, args) => {

  if (!args.length) {
    const embed = new MessageEmbed()
    .setColor("#36393f")
    .setFooter(FOOTER, FOOTERI)
    .addField("Liste des commandes", `Une liste de toutes les sous-catégories disponibles et leur commandes.\nPour plus d'informations sur une commande, tapez \`${PREFIX}help <command_name>\``)

    for (const category of categoryList) {
      embed.addField(
        `${category}`,
        `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
      );
    };

    message.delete();

    return message.channel.send(embed);
  } else {
    const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
    if (!command) return message.reply("cette commande n'existe pas!");

    const embed = new MessageEmbed()
    .setColor("#36393f")
    .setTitle(`\`${command.help.name}\``)
    .setThumbnail("https://i.imgur.com/HNfSGe9.png")
    .addField("Description", `${command.help.description}`)
    .addField("Utilisation", command.help.usage ? `${PREFIX}${command.help.name} ${command.help.usage}` : `${PREFIX}${command.help.name}`, true)

    message.delete();

    if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);
    return message.channel.send(embed);

  }
};

module.exports.help = {
  name: "help",
  aliases: ['help'],
  category: 'help',
  description: "Renvoie une liste de commandes ou les informations sur une seule!",
  cooldown: 10,
  usage: '<command_name>',
  isUserAdmin: false,
  permissions: false,
  args: false
};