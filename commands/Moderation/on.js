const { MessageEmbed } = require ("discord.js");
const { FOOTER, FOOTERI } = require('./../../config');

module.exports.run = async (client, message) => {

  const embed = new MessageEmbed()
    .setAuthor(message.member.user.tag)
    .setColor("#35f092")
    .setTitle(":white_check_mark: Serveur ouvert !")
    .setDescription("```Vous pouvez maintenant vous connecter au serveur via l'ip 185.157.246.250 et profite de votre nouvelle vie ! Cordialement le staff de Nosria ❤️```")
    .setTimestamp()
    .setThumbnail("https://i.imgur.com/qTbMAHy.png")
    .setFooter(FOOTER, FOOTERI);

    message.delete(),

    client.channels.cache.get('762733000176959518').send(embed);

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