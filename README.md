<h1 align="center">Vanilla-JS-Codex2-Discord-Bot</h1>
<table align="center">
  <tr>
    <td align="center" height="108" width="108">
        <img     src="https://camo.githubusercontent.com/2993f7180d5cc3231060f66cfa1f0f65a1d09c0efd68d08d0190902ba9200d81/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3335333635352f646973636f72642d69636f6e2e737667"
        width="48"
        height="48"
        />
        <br /><strong>Discord.js</strong>
    </td>
    <td align="center" height="108">
      <p align="center">A simple vanilla javascript Discord bot for interacting with the new language model Code-Davinci-002. This bot can serve as an invaluable coding buddy and debugging tool.
      </p>
     </td>
   </tr>
 </table>

# 
Vanilla-JS-Codex2-Discord-Bot installation and deloyment Instructions

### Get the bot 'shell' from Discord. It's free, and it takes 5 minutes
```sh
https://discord.com/developers/applications
```
### Go to OpenAI and open an account
```sh
https://platform.openai.com/signup
```
### Install node.js
```sh
https://nodejs.org/en/
```
### Install git
```sh
https://git-scm.com/downloads
```
### Create a new folder and navigate to it in terminal to set up git
```sh
git init
```
### Navigate to new git folder in terminal and clone this repository
```sh
git clone https://github.com/Lane-G-Smith/Vanilla-JS-Codex2-Discord-Bot.git
```
### Navigate to Vanilla-JS-Codex2-Discord-Bot folder and install dependencies
```sh
npm install
```
### Create new file in Vanilla-JS-Codex2-Discord-Bot folder and name it .env
### Place your secret Discord bot token from the first step into the .env file
```sh
TYPE THIS EXACTLY, IT IS CASE SENSITIVE: TOKEN=your_unique_token_here
```
### Place your secret OpenAI API key from the second step into the .env file
```sh
TYPE THIS EXACTLY, IT IS CASE SENSITIVE: OPENAI_API_KEY=your_unique_API_key_here
```
### To host the bot locally, open project in terminal and run node
```sh
node index.js
```
### To host the bot locally and keep it running in the background indefinitely, install PM2
```sh
npm install pm2 -g
```
### run your bot locally using pm2 https://pm2.keymetrics.io/
```sh
pm2 start index.js
```
### congratulations, your bot should now be live & confirmation should be logged in the terminal. Use your personal link from the Discord developer portal to invite your bot to a Discord server
```sh
https://discord.com/developers/applications
```
