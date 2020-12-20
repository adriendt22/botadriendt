const { MessageEmbed } = require ("discord.js");
const { FOOTER, FOOTERI, THUMBAIL } = require('./../../config');

module.exports.run = async (client, message, args) => {
  if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('il faut spécifier un ***nombre*** entre 1 et 100');

  const messages = await message.channel.messages.fetch({
    limit: Math.min(args[0], 100),
    before: message.id,
  });

  await message.channel.bulkDelete(messages);

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#0AFFF8")
    .setDescription(`**Action**: purge\n**Nbr de message**: ${args[0]}\n**Salon**: ${message.channel}`)
    .setThumbnail(THUMBAIL)
    .setFooter(FOOTER, FOOTERI);

    message.delete();

    client.channels.cache.get('789998267680555018').send(embed);

};

module.exports.help = {
  name: "purge",
  aliases: ['purge'],
  category: 'moderation',
  description: "Purge un nombre de message spécifié",
  cooldown: 10,
  usage: '<nbr_messages>',
  isUserAdmin: false,
  permissions: true,
  args: true
};