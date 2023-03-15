// import bot token from .env file
const TOKEN = require('dotenv').config();
const SECRET_KEY = require('dotenv').config();

// import discord.js module
const {Client, GatewayIntentBits} = require('discord.js');
const { json } = require('stream/consumers');

// import openai module, key, new config
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
apiKey: process.env.OPENAI_API_KEY, });
const openai = new OpenAIApi(configuration);

// configure permissions(intents)
const client = new Client({intents: 
    [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping, 
    GatewayIntentBits.GuildScheduledEvents,
    ],
});

// log in with token from .env file
client.on('ready', () => {
    console.log(`Fuck You!! Logged in as ${client.user.tag}!`)
});

// function returns AI response every time text is sent to server
client.on('messageCreate', async function (message) {
    try {
        // ignore input from the bot itself
        if (message.author.bot) return;
        const response = await openai.createCompletion({
            model: "code-davinci-002",
            prompt: `${message}`,
            temperature: 1,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
                  message.reply(`${completion.data.choices[0].message.content}`) 
              }   catch (error) {
                      console.log(error)
                      }
          });

// log in with token from .env file
client.login(process.env.TOKEN)
