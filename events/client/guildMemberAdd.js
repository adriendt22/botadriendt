const { MessageEmbed } = require("discord.js");
const { FOOTER, FOOTERI } = require('./../../config');

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(member.user.username, member.user.displayAvatarURL())
    .setColor("#35f092")
    .setDescription(`Bienvenue `  + `${member.user}` +  `\nEn espérant que la ville `  + `${member.guild.name}` + ` te plaise ` )
    .setThumbnail("https://i.imgur.com/qTbMAHy.png")
    .setTimestamp()
    .setFooter(FOOTER, FOOTERI);

  client.channels.cache.get('763706320205381632').send(embed);
}