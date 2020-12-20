const { MessageEmbed } = require ("discord.js");

module.exports.run = (client, message, args) => {
  const user = message.mentions.users.first();
  const reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');
  user ? message.guild.member(user).ban({reason}) : message.channel.send("L'utilisateur n'existe pas");

  const embed = new MessageEmbed()
    .setAuthor(`${user.tag} (${user.id})`)
    .setColor("#dc143c")
    .setDescription(`**Action**: Ban\n**Raison**: ${reason}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

    message.delete();

    client.channels.cache.get('789998267282489371').send(embed);

};

module.exports.help = {
  name: "ban",
  aliases: ['ban'],
  category: 'moderation',
  description: "ban un utilisateur",
  cooldown: 10,
  usage: '<@user> <raison>',
  isUserAdmin: true,
  permissions: true,
  args: true
};