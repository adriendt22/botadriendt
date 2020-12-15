const { MessageEmbed } = require ("discord.js");
const { FOOTER, FOOTERI } = require("./../../config");

module.exports.run = async (client, message) => {
  const { guild } = message

    const { name, region, memberCount, owner,  afkTimeout, createdAt, id, premiumSubscriptionCount } = guild
    const icon = guild.iconURL()

    const embed = new MessageEmbed()
      .setTitle(`Serveur information`)
      .setThumbnail(icon)
      .setColor("#0039FF")
      .setFooter(FOOTER, FOOTERI)
      .setTimestamp(new Date())
      .addFields(
        {
          name: "Nom du serveur",
          value:"```" + `${name}` + "```",
          inline: true,
        },
        {
          name: 'Propriétaire',
          value:"```" + `${owner.user.tag}` + "```",
          inline: true,
        },
        {
          name: 'Membres + Boost',
          value:"```" + "Membres : " + `${memberCount}` + " | Boost : " + `${premiumSubscriptionCount}` +  "```",
          inline: false,
        },
        {
          name: 'Region',
          value:"```" + `${region}` + "```",
          inline: true,
        },
        {
          name: 'Discord ID',
          value:"```" + `${id}` + "```",
          inline: true,
        },
        {
          name: 'Date serveur discord créer',
          value:"```" + `${createdAt}` + "```",
          inline: false,
        },
        {
          name: 'AFK Timeout',
          value:"```" + `${afkTimeout / 60}` + " Minutes" + "```",
          inline: true,
        }
      )

      message.delete(),

    message.channel.send(embed)
};

module.exports.help = {
  name: "info",
  aliases: ['info'],
  category: 'moderation',
  description: "info serveur",
  cooldown: 10,
  isUserAdmin: false,
  permissions: true,
  args: false
};