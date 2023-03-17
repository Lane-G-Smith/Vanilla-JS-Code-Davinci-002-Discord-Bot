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
    console.log(`Code-Davinci-002 here, logged in as ${client.user.tag}!`)
});

// function returns AI response every time text is sent to server
client.on('messageCreate', async function (message) {
    try {
        // ignore input from the bot itself
        if (message.author.bot) return;
        // respond using these parameters
        const response = await openai.createCompletion({
            model: "code-davinci-002",
            prompt: `${message}`,
            temperature: 0.1,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0.2,
            presence_penalty: 0,
          });
                message.reply(`${response.data.choices[0].text}`) 
        }   catch (error) {
                message.reply(`${error}`)
            }
          });

// log in with token from .env file
client.login(process.env.TOKEN)
