const { MessageEmbed } = require ("discord.js");
const { FOOTER, FOOTERI } = require('./../../config');

module.exports.run = (client, message, args) => {
  
  
  const member = message.member.displayName;
  const arg = message.content.split(" ").join(" ").slice(8);

  message.channel.send("@everyone");
  const annonce = new MessageEmbed()
    .setColor("#000000")
    .setAuthor(`Annonce de ${member}`)
    .setDescription(arg)
    .setThumbnail("https://i.imgur.com/TEl2ItS.png")
    .setFooter(FOOTER, FOOTERI)
    .setTimestamp(new Date());

    message.channel.send(annonce)

    message.delete();
};

module.exports.help = {
  name: "annonce",
  aliases: ['annonce'],
  category: 'moderation',
  description: "Faire une annonce",
  cooldown: 10,
  usage: '<message>',
  isUserAdmin1: false,
  permissions: false,
  args: true
};