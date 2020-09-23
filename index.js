// Verander geen van de volgende dingen zonder dat je weet wat je doet.. voor hulp kan je altijd Oscar.#7370 contacteren.
const Discord = require('discord.js')

const fs = require('fs');

const client = new Discord.Client();

const config = require('./config.json') /* Als je iets toe wilt voegen in de config, ga dan naar de config.json 
 en zet een , na het onderste stukje tussen de haakjes{}.. "NAAM": "WAT HET IS BIJV TRUE" */

const prefix = config.prefix

if (config.token === 'HIER-JOUW-TOKEN' && prefix === 'HIER-JOUW-PREFIX') return console.log('De bot heeft geen geldige token en prefix\nVerander deze beide naar jouw eigen token en prefix');

if (config.token === 'HIER-JOUW-TOKEN') return console.log('De bot heeft geen geldige token\nVerander deze naar jouw eigen token');

if (prefix === 'HIER-JOUW-PREFIX') return console.log('Verander de prefix naar jouw eigen prefix.');

// ^Dit^ Controleert of je jouw token en prefix wel hebt veranderd.. 

client.commands = new Discord.Collection();

// ^Dit^ Maakt een 'collectie' aan van commando's.. dus het mapje commands

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    console.log(`${file} geladen!`);
    client.commands.set(command.name, command);
}

// ^Dit^ Leest de commando's uit en of een bestand in het mapje commands wel eindigt met .js

client.once('ready', () => {
    console.log('Deze bot is nu online')
    // Verander hieronder bij 'Deze bot' wat je de status van de bot wilt zijn, WATCHING staat voor kijkt naar.. je zou ook LISTENING kunnen gebruiken.
    client.user.setActivity('Deze bot', { type: "WATCHING" })
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    /* Je kan hieronder commands toevoegen door na de } else if (command === 'NAAM') { client.commands.get('COMMANDO-NAAM').execute(message, args) } te gebruiken 
    of client.commands... weglaten en hier de codering neer zetten. Voor hulp contacteer: Oscar.#7370 */

    if (command === 'ping') {
        message.channel.send('pong!');

        /* Dit command doet niet veel.. is meer een test.. je kan ping veranderen in een ander command 
           en dan het bericht hierboven verwijderen en je eigen code invoegen */

    } else if (command === 'help') {
        client.commands.get('help').execute(message, args)
        // De code van het help commando staat in /commands/help.js

    } else if (command === 'HIER-JOUW-COMMANDO-NAAM') {
        client.commands.get('HIER-JOUW-COMMANDO-NAAM').execute(message, args)

    }
});

client.login(config.token)
