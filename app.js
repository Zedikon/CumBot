const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'justanarchy.tk',
  username: 'loshok',
  version: "1.12.2"
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)