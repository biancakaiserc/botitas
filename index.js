require('dotenv').config();
const { App } = require('@slack/bolt');

const bot = new App({
  signingSecret: process.env.CLIENT_SIGNING_SECRET,
  token: process.env.BOT_TOKEN,
});

(async () => {
  // Start the app
  await bot.start(process.env.PORT || 8080);

  console.log('⚡️ Bolt app is running!');
})();

bot.message('<!here>', async ({ context, event }) => {

  try{
    await bot.client.chat.postMessage({
    token: context.botToken,
    channel: event.channel,
    thread_ts: event.ts,
    text: `Olá <@${event.user}>, neste canal evitamos o uso do @here pois notifica muitas pessoas. Que tal considerar mencionar um grupo de usuários específico na próxima vez?`
  });
  }
  catch (e) {
    console.log(`error responding ${e}`);
  }

});

