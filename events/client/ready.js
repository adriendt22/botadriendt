module.exports = (client, member) => {
  console.log(`Connecté à ${client.user.tag}!`);

 client.user.setStatus('dnd');
}