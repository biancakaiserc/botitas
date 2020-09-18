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

bot.event("app_mention", async ({ context, event }) => {
  
  console.log("aqui")
  try{
    await bot.client.chat.postMessage({
    token: context.botToken,
    channel: event.channel,
    text: `Hey yoo <@${event.user}> you mentioned me`
  });
  }
  catch (e) {
    console.log(`error responding ${e}`);
  }

});

bot.event("message", async ({ context, event }) => {

  debugger

  //if message contains @here
  if(event.text.includes("hehe")=="true"){
      console.log("tem @here")

      try{
        console.log("entrou")
        await bot.client.chat.postMessage({
        token: context.botToken,
        channel: event.channel,
        text: `Olá <@${event.user}> por favor não use @here`
      });
      }
      catch (e) {
        console.log(`error responding ${e}`);
      }
  }  

});



