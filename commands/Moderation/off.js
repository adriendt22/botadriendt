const { MessageEmbed } = require ("discord.js");
const { FOOTER, FOOTERI } = require('./../../config');

module.exports.run = async (client, message) => {

  const embed = new MessageEmbed()
    .setAuthor(message.member.user.tag)
    .setColor("#FF004D")
    .setTitle(':x: **Serveur fermer** !')
    .setDescription("```Le serveur est fermé actuellement veuillez attendre l'annonce de la réouverture ! Cordialement le staff de Nosria ❤️```")
    .setTimestamp()
    .setThumbnail("https://i.imgur.com/qTbMAHy.png")
    .setFooter(FOOTER, FOOTERI);

    message.delete(),

    client.channels.cache.get('762733000176959518').send(embed);

};

module.exports.help = {
  name: "off",
  aliases: ['off'],
  category: 'moderation',
  description: "message fermé",
  cooldown: 10,
  isUserAdmin: false,
  permissions: true,
  args: false
};