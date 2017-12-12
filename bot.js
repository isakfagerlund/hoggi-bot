var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var fs = require('fs');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

var quotes = [
  '*andas i micken*',
  'asså jag orkar inte',
  'asså spelet funkar ju inte',
  'dom är ju cp-retards',
  'asså du suger ju mid…. XD',
  '*kollar på youtube*  "hazhazhazhaz"',
  'Game? Nuuu?',
  'Är vi fem, är vi fem??',
  'Asså Edvaaaard!',
  'Kan ni komma in eller?',
  'Vad gör ni ens?',
  'Vi borde göra såhär, i dunno',
  'TRIGGERED',
  'Ah men typ',
];

function getMsg(user){
  var randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
}

function getUser(user){
 
}

function uploadFile(channelID){
  bot.uploadFile( {
    to: channelID,
    file: 'kappa.png'
  });
}

bot.on('ready', function (evt) {
    bot.setPresence({
      game:{
        name:"Lyssnar på !hoggi"
      }
    });
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt, Member) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'hoggi':
                bot.sendMessage({
                    to: channelID,
                    message: getMsg(user)
                });
                // uploadFile(channelID);
            break;
            // Just add any case commands if you want to..
         }
     }
});