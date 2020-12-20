const { MessageEmbed } = require("discord.js");
const { FOOTER, FOOTERI, THUMBAIL } = require("../../config");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
  .setTitle(`Salut ${member.user.username},\nBienvenue sur SullyLand!`)
  .setColor("#A210EB")
  .setThumbnail(THUMBAIL)
  .setFooter(FOOTER, FOOTERI)
  .setTimestamp();

  client.channels.cache.get('789998267680555027').send(embed);

  var role = member.guild.roles.cache.find(role => role.name === '🧑・Citoyens');
  member.roles.add(role)
}