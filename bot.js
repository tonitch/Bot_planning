const Discord = require("discord.js");
const bot = new Discord.Client();

//Config
let tokenDiscord='';


//les link au commands
const cal = require('./commands/cal.js');
const help = require('./commands/help.js');


var mess = 0;

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} !`);
});

bot.on('error', console.error);

bot.on('message', function (message) {
    let commandUsed =  help.parse(message) || cal.parse(message)
})

function sendError(message, description) {
    message.channel.send({
        embed: {
            color: 15158332,
            description: ':x: ' + description
        }
    });
}
//commands

bot.login(tokenDiscord);
