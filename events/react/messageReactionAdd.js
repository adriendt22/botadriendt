module.exports = (client, messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '762733000176959518');
  const bobSpeedRole = message.guild.roles.cache.get("788424588295274577");
  const alienWarRole = message.guild.roles.cache.get("788424790976757760");
  if (member.user.bot) return;

  if (["bobspeed", "alienwar"].includes(emoji) && message.channel.id === channel.id) {
  switch (emoji) {
    case "bobspeed":
      member.roles.add(bobSpeedRole);
      client.channels.cache.get('788436763651735593').send(`Le rôle ${bobSpeedRole.name} a été ajouté avec succès à ${user}!`);
      break;

      case "alienwar":
      member.roles.add(alienWarRole);
      client.channels.cache.get('788436763651735593').send(`Le rôle ${alienWarRole.name} a été ajouté avec succès à ${user}!`);
      break;

    }
  }
}