const Discord = require('discord.js')

const client = new Discord.Client();

const config = require('./config.json')

const prefix = config.prefix

if (config.token === 'HIER-JOUW-TOKEN') return console.log('De bot heeft geen geldige token\nVerander deze naar jouw eigen token');

client.once('ready', () => {
    console.log('Deze bot is nu online')

    client.user.setActivity('Deze bot', { type: "WATCHING" })
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('pong!');

    } else if (command === 'help') {
        message.delete();

        var E1952 = new Discord.MessageEmbed()
            .setTitle('Commands:')
            .addField("[Command1]", "Beschrijving van command1")
            .addField("[Command2]", "Beschrijving van command2");


        message.channel.send(E1952)
            .then(msg => {
                msg.delete({ timeout: 12000 })
            });
    }
});

client.login(config.token)
