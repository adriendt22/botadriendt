const { MessageEmbed } = require ("discord.js");
const { FOOTER, FOOTERI, THUMBAIL } = require('./../../config');

module.exports.run = async (client, message) => {

  const embed = new MessageEmbed()
    .setAuthor(message.member.user.tag)
    .setColor("#35f092")
    .setTitle(":white_check_mark: Serveur ouvert !")
    .setDescription("```Vous pouvez maintenant vous connecter au serveur via l'ip IP et profite de votre nouvelle vie ! Cordialement le staff de SullyLand ❤️```")
    .setTimestamp()
    .setThumbnail(THUMBAIL)
    .setFooter(FOOTER, FOOTERI);

    message.delete(),

    client.channels.cache.get('789998267949645876').send(embed);

};

module.exports.help = {
  name: "on",
  aliases: ['open'],
  category: 'moderation',
  description: "message ouverture",
  cooldown: 10,
  isUserAdmin: false,
  permissions: true,
  args: false
};