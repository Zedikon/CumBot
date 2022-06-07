const mineflayer = require('mineflayer')
const phrases = ['Привет, я бот', 'Я бот, разработанный Seeroy и Zedikon', 'ты ботяра а я бот'];
const antiafk = require("mineflayer-antiafk");

console.log("Starting CumBot");

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

bot.loadPlugin(antiafk);

bot.on('chat', function (username, message) {
  console.log(username, ":", message);
})

bot.once('spawn', () => {
  console.log("I`m spawned and ready!");
  bot.afk.setOptions({ fishing: false });
  bot.afk.start();
  setTimeout(function () {
    bot.chat("/login 123123");
    setTimeout(function () {
      send = phrases[getRandomInt(0, 2)];
      bot.chat(send);
      console.log("Im sending:", send);
    }, 3000);
  }, 2000);
})

bot.on("health", () => {
    if (bot.health < 5) bot.afk.stop();
  });

bot.on('kicked', console.log)
bot.on('error', console.log)