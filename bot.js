require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

const quotes = [
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

const getMsg = () => {
  const randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
}

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'hoggi') {
    msg.channel.send(getMsg());
  }
});
