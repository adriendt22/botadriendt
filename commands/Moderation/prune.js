const { MessageEmbed } = require ("discord.js");

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first());
  if (isNaN(args[1]) || (args[1] < 1 || args[1] > 100)) return message.reply('il faut spécifier un ***nombre*** entre 1 et 100');

  const messages = (await message.channel.messages.fetch({
    limit: 100,
    before: message.id,
  })).filter(a => a.author.id === user.id).array();

  messages.lenght = Math.min(args[1], messages.lenght);

  if (messages.length === 0 || !user) return message.reply('aucun message à supprimer sur cet utilisateur (ou cet utilisateur n\'existe pas).');

  if (message.lenght === 1) await messages[0].delete();
  else await message.channel.bulkDelete(messages);
  const { FOOTER, FOOTERI, THUMBAIL } = require('./../../config');

  await message.channel.bulkDelete(messages);

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#0AFFF8")
    .setDescription(`**Action**: prune\n**Nbr de message**: ${args[1]}\n**Utilisateur**: ${args[0]}`)
    .setThumbnail(THUMBAIL)
    .setFooter(FOOTER, FOOTERI);

    message.delete();

    client.channels.cache.get('789998267680555018').send(embed);

};

module.exports.help = {
  name: "prune",
  aliases: ['prune'],
  
  category: 'moderation',
  description: "Purge un nombre de message spécifié sur un utilisateur spécifié",
  cooldown: 10,
  usage: '<@user> <nbr_messages>',
  isUserAdmin: true,
  permissions: true,
  args: true
};