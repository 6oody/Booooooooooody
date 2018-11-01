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
var channel = "504956523240357888";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**كس امك يا ابن الزانيه يا ابن الوسخه اخرك بلوك يا ايهاب يا ابن كوم اللباوي @here @everyone يا مروان هههههههه كس امك يا ابن الزانيه يا ابن الوسخه اخرك بلوك يا ايهاب يا ابن كوم اللباوي @here @everyone يا مروان هههههههه كس امك يا ابن الزانيه يا ابن الوسخه اخرك بلوك يا ايهاب يا ابن كوم اللباوي @here @everyone يا مروان هههههههه كس امك يا ابن الزانيه يا ابن الوسخه اخرك بلوك يا ايهاب يا ابن كوم اللباوي @here @everyone يا مروان هههههههه كس امك يا ابن الزانيه يا ابن الوسخه اخرك بلوك يا ايهاب يا ابن كوم اللباوي @here @everyone يا مروان هههههههه كس امك يا ابن الزانيه يا ابن الوسخه اخرك بلوك يا ايهاب يا ابن كوم اللباوي @here @everyone يا مروان هههههههه كس امك يا ابن الزانيه يا ابن الوسخه اخرك بلوك يا ايهاب يا ابن كوم اللباوي @here @everyone يا مروان ههههههههكس امك يا ابن الزانيه يا ابن الوسخه اخرك بلوك يا ايهاب يا ابن كوم اللباوي @here @everyone يا مروان هههههههه كس امك يا ابن الزانيه يا ابن الوسخه اخرك بلوك يا ايهاب يا ابن كوم اللباوي @here @everyone يا مروان هههههههه**')
    },305);
})

client.on('ready', async() => {
var server = "504608224402604045"; // ايدي السررفر
var channel = "504956523240357888";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

client.login(process.env.BOT_TOKEN);
