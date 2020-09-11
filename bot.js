const { Telegraf } = require('telegraf')
const TOKEN = "1276256518:AAFs2oLkJr5__62VU9Aalq16N8mCycVbyp0";
const bot = new Telegraf(TOKEN);


bot.start((ctx) => ctx.reply('Welcome to lechitos'));

bot.command('/image', (ctx) => {
    const id = ctx.message.chat.id;
    const url = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.nuval.com.co%2Fwp-content%2Fuploads%2F2010%2F10%2Flechitos.jpg&f=1&nofb=1";
    ctx.telegram.sendPhoto(id, url, {caption: 'Tu nueva imageb'});
});

bot.launch()