const Botkit = require('botkit');
require('dotenv').config();

// Environment variables
if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.PORT || !process.env.VERIFICATION_TOKEN || !process.env.BOT_TOKEN) {
    console.log('Error: Specify CLIENT_ID, CLIENT_SECRET, VERIFICATION_TOKEN, BOT_TOKEN and PORT in environment');
    process.exit(1);
} else {
    console.log('Good job, you have the variables!');
}

const controller = Botkit.slackbot({
    json_file_store: './db_slackbutton_slash_command/',
    debug: true,
    clientSigningSecret: process.env.CLIENT_SIGNING_SECRET,
})

controller.configureSlackApp({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    clientSigningSecret: process.env.CLIENT_SIGNING_SECRET,
    scopes: ['commands', 'bot'],
})

const bot = controller.spawn({
    token: process.env.BOT_TOKEN,
    incoming_webhook: {
      url: 'WE_WILL_GET_TO_THIS'
    }
}).startRTM();

controller.setupWebserver(process.env.PORT, function(err, webserver){
    controller.createWebhookEndpoints(controller.webserver);
    controller.createOauthEndpoints(controller.webserver, 
      function(err, req, res) {
        if (err) {
          res.status(500).send('ERROR: ' + err);
        } else {
          res.send('Success!');
        }
    });
});

controller.hears(['oi', 'olá'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "Olá, humano, como posso ajudar?";

    bot.reply(message, helloText);
});