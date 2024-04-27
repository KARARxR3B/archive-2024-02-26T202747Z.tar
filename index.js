const express = require("express")
const app = express();

app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});

const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})


const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {

    setInterval( async () => {
    //ايدي الروم هنا
      client.channels.fetch("1227445733330780191") 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
}); 


client.login("NjYwODY3MTI2NDQ5NTM3MDI2.GG-bCc.ikjIMNsgXjT7FhJ24rYJSCdVZuihlfQi6D7bz8");
