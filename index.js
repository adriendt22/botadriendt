const Discord = require('discord.js')
const client = new Discord.Client();


client.on("raedy", () => {
  console.log("pret!");
});

client.on("message", message => {
  if (message.content.startsWith('salut')) message.channel.send('Salut !');
});

client.login(process.env.TOKEN)