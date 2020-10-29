const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const gif = require('./gifs.json');

client.on("ready", () => {
    console.log("Bot online.");
});

client.on("message", (message) => {

    if(message.content.startsWith(config.prefix + "cuddle")) 
        message.channel.send(gif.cuddle[Math.floor(Math.random()*gif.cuddle.length)]);

    if(message.content.startsWith(config.prefix + "hug")) 
        message.channel.send(gif.hug[Math.floor(Math.random()*gif.hug.length)]);

    if(message.content.startsWith(config.prefix + "kill")) 
        message.channel.send(gif.kill[Math.floor(Math.random()*gif.kill.length)]);

    if(message.content.startsWith(config.prefix + "dance")) 
        message.channel.send(gif.dance[Math.floor(Math.random()*gif.dance.length)]);

    if(message.content.startsWith(config.prefix + "dab")) 
        message.channel.send(gif.dab[Math.floor(Math.random()*gif.dab.length)]);

    if(message.content.startsWith(config.prefix + "blush"))
        message.channel.send(gif.blush[Math.floor(Math.random()*gif.blush.length)]);

    if(message.content.startsWith(config.prefix + "bite"))
        message.channel.send(gif.bite[Math.floor(Math.random()*gif.bite.length)]);

    if(message.content.startsWith(config.prefix + "slap"))
        message.channel.send(gif.slap[Math.floor(Math.random()*gif.slap.length)]);

    if(message.content.startsWith(config.prefix + "woop"))
        message.channel.send(gif.woop[Math.floor(Math.random()*gif.woop.length)]);

    if(message.content.startsWith(config.prefix + "poke"))
        message.channel.send(gif.poke[Math.floor(Math.random()*gif.poke.length)]);

    if(message.content.startsWith(config.prefix + "pickle")) 
        message.channel.send("Your pickle is **" + Math.floor(Math.random()*16) + " inches** long!");

    if(message.content.startsWith(config.prefix + "coinflip")) 
        message.channel.send("**" + message.author.username + "** flipped **" + (Math.random() >= 0.5 ? "heads" : "tails") + "**!");

    if(message.content.startsWith(config.prefix + "help"))
        message.channel.send(
        "```\n" +
        "Prefix: " + config.prefix + "\n\n" +
        "Gif Commands: \n" +
        "cuddle, hug, kill, dance, dab, blush, bite, slap, woop, poke\n\n" + 
        "pickle: Measures your pickle ;)\n\n" + 
        "coinflip: Flips a coin!" +
        "```"
        ); 
});

client.login(config.token);