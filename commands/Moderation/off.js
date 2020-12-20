const { MessageEmbed } = require ("discord.js");
const { FOOTER, FOOTERI, THUMBAIL } = require('./../../config');

module.exports.run = async (client, message) => {

  const embed = new MessageEmbed()
    .setAuthor(message.member.user.tag)
    .setColor("#FF004D")
    .setTitle(':x: **Serveur fermer** !')
    .setDescription("```Le serveur est fermé actuellement veuillez attendre l'annonce de la réouverture ! Cordialement le staff de SullyLand ❤️```")
    .setTimestamp()
    .setThumbnail(THUMBAIL)
    .setFooter(FOOTER, FOOTERI);

    message.delete(),

    client.channels.cache.get('789998267949645876').send(embed);

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