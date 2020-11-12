// Verander geen van de volgende dingen zonder dat je weet wat je doet.. voor hulp kan je altijd Oscar.#7370 contacteren.
const Discord = require('discord.js')

const fs = require('fs');

const client = new Discord.Client();

const config = require('./config.json') /* Als je iets toe wilt voegen in de config, ga dan naar de config.json 
 en zet een , na het onderste stukje tussen de haakjes{}.. "NAAM": "WAT HET IS BIJV TRUE" */

const prefix = config.prefix

if (config.token === 'HIER-JOUW-TOKEN' && prefix === 'HIER-JOUW-PREFIX') return console.log('De bot heeft geen geldige token en prefix\nVerander deze beide naar jouw eigen token en prefix');

if (config.token === 'HIER-JOUW-TOKEN') return console.log('De bot heeft geen geldige token\nVerander deze naar jouw eigen token');

if (prefix === 'HIER-JOUW-PREFIX') return console.log('De bot heeft geen geldige prefix\nVerander de prefix naar jouw eigen prefix.');

// ^Dit^ Controleert of je jouw token en prefix wel hebt veranderd.. 

const cmap = new Discord.Collection();

// ^Dit^ Maakt een 'collectie' aan van commando's.. dus het mapje commands

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    console.log(`${file} geladen!`);
    cmap.set(command.name, command);
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

    let commandFile = cmap.get(command); // Checkt of het commando ook echt een commando is
    if (commandFile) commandFile.execute(message, args) // Als het een commando is dan voert hij dat uit
});

client.login(config.token)
