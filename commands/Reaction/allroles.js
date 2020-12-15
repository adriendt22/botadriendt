const { MessageEmbed } = require ("discord.js");
const { FOOTER, FOOTERI } = require('./../../config');

module.exports.run = (client, message, args) => {
  const bobSpeedRole = message.guild.roles.cache.get("788424588295274577");
  const alienWarRole = message.guild.roles.cache.get("788424790976757760");
  const bobSpeedEmoji = message.guild.emojis.cache.get("679262066875301899");
  const alienWarEmoji = message.guild.emojis.cache.get("783673502858870794");

  const embed = new MessageEmbed()
    .setTitle("Rôles")
    .setDescription("Cliquer sur une réaction pour y recevoir le rôle")
    .setColor("#dc143c")
    .setFooter(FOOTER, FOOTERI)
    .addField(
    "Les rôles",
    `
    ${bobSpeedEmoji} - ${bobSpeedRole.toString()}
    ${alienWarEmoji} - ${alienWarRole.toString()}
    `
  );

  client.channels.cache.get('762733000176959518').send(embed).then(async msg => {
    await msg.react(bobSpeedEmoji);
    await msg.react(alienWarEmoji);
  })
};

module.exports.help = {
  name: "allroles",
  aliases: ['allroles'],
  category: 'reaction',
  description: "Renvoie un message avec des réactions!",
  cooldown: 10,
  usage: '',
  isUserAdmin1: true,
  permissions: false,
  args: false
};