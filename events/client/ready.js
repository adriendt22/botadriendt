module.exports = client => {
  console.log(`Connecté à ${client.user.tag}!`);

 client.user.setStatus('dnd');
}