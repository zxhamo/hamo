const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});


client.on('ready', function(){
    var ms = 60000 ;
    var setGame = ['LINKS | i love PL','LINKS | i love PL','LINKS | i love PL| LINKS | i love PL','LINKS | i love PL'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/GamerzBot`);
    }, ms);

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
