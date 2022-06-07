const mineflayer = require('mineflayer')
const phrases = ['Привет, я бот', 'Я бот, разработанный Seeroy и Zedikon', 'ты ботяра а я бот'];

console.log("Starting bot");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const bot = mineflayer.createBot({
  host: 'justanarchy.tk',
  username: 'CumBot',
  version: "1.12.2"
})

bot.on('chat', function (username, message) {
  console.log(message);
})

bot.once('spawn', () => {
  bot.chat("/login 123123");
  console.log("I`m spawned and ready!");
  send = phrases[getRandomInt(0,2)];
  bot.chat("/say " + send);
  console.log("Im sending:", send);
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)