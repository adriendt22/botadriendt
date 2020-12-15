const { MessageEmbed } = require("discord.js");
const { FOOTER, FOOTERI } = require('./../../config');


module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(member.user.username, member.user.displayAvatarURL())
    .setColor("#dc143c")
    .setDescription(`Au revoir `  + `${member.user}` +  `\nIl y a l'air que tu n'a pas aimé la ville `  + `${member.guild.name}` + ` 😢` )
    .setThumbnail("https://i.imgur.com/qTbMAHy.png")
    .setTimestamp()
    .setFooter(FOOTER, FOOTERI);

  client.channels.cache.get('763706320205381632').send(embed);
}