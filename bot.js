const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "B";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});

client.on('ready', async() => {
var server = "504608224402604045"; // ايدي السررفر
var channel = "504956473629999105";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**@evreyone @here كس امك يا ابن الزانيه  @evreyone @here كس امك يا ابن الزانيه @evreyone @here كس امك يا ابن الزانيه @evreyone @here كس امك يا ابن الزانيه @evreyone @here كس امك يا ابن الزانيه @evreyone @here كس امك يا ابن الزانيه @evreyone @here كس امك يا ابن الزانيه @evreyone @here كس امك يا ابن الزانيه **')
    },305);
})

client.on('ready', async() => {
var server = "504608224402604045"; // ايدي السررفر
var channel = "504956473629999105";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

client.login(process.env.BOT_TOKEN);
