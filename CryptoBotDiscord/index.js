require('dotenv').config();

const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true
    }),
    config = require('./config.json'),
    fs = require('fs')

client.login(process.env.TOKEN)
client.commands = new Discord.Collection()

client.on("ready", () => {
    console.log("Présent chef");
    client.user.setActivity('Spotify', { type: 'LISTENING'})
})