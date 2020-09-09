// Verander geen van de volgende dingen zonder dat je weet wat je doet.. voor hulp kan je altijd Oscar.#7370 contacteren.
const Discord = require('discord.js')

const client = new Discord.Client();

const config = require('./config.json')

const prefix = config.prefix

if (config.token === 'HIER-JOUW-TOKEN') return console.log('De bot heeft geen geldige token\nVerander deze naar jouw eigen token');

if (prefix === 'HIER-JOUW-PREFIX') return console.log('Verander de prefix naar jouw eigen prefix.');

client.once('ready', () => {
    console.log('Deze bot is nu online')
// Verander hier onder tussen de haakjes wat je de status van de bot wilt zijn.
    client.user.setActivity('Deze bot', { type: "WATCHING" })
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

// Je kan hieronder commands toevoegen door na de } else if (command === 'NAAM') { Codering } te gebruiken.
// Voor hulp contacteer: Oscar.#7370

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
