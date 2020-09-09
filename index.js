// Verander geen van de volgende dingen zonder dat je weet wat je doet.. voor hulp kan je altijd Oscar.#7370 contacteren.
const Discord = require('discord.js')

const client = new Discord.Client();

const config = require('./config.json') /* Als je iets toe wilt voegen in de config, ga dan naar de config.json 
 en zet een , na het onderste stukje tussen de haakjes{}.. "NAAM": "WAT HET IS BIJV TRUE" */

const prefix = config.prefix

if (config.token === 'HIER-JOUW-TOKEN') return console.log('De bot heeft geen geldige token\nVerander deze naar jouw eigen token');

if (prefix === 'HIER-JOUW-PREFIX') return console.log('Verander de prefix naar jouw eigen prefix.');

client.once('ready', () => {
    console.log('Deze bot is nu online')
// Verander hieronder bij 'Deze bot' wat je de status van de bot wilt zijn, WATCHING staat voor kijkt naar.. je zou ook LISTENING kunnen gebruiken.
    client.user.setActivity('Deze bot', { type: "WATCHING" })
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

/* Je kan hieronder commands toevoegen door na de } else if (command === 'NAAM') { Codering } te gebruiken.
   Voor hulp contacteer: Oscar.#7370 */

    if  (command === 'ping') { 
        message.channel.send('pong!'); 

        /* Dit command doet niet veel.. is meer een test.. je kan ping veranderen in een ander command 
           en dan het bericht hierboven verwijderen en je eigen code invoegen */

    } else if (command === 'help') {
        message.delete();

        var E1952 = new Discord.MessageEmbed()
            .setTitle('Commands:')
            .addField("[Command1]", "Beschrijving van command1")
            .addField("[Command2]", "Beschrijving van command2")

            // Als je een extra veld wilt toevoegen plak dit dan hierboven^^ .addField('', '')


        message.channel.send(E1952)
            .then(msg => {
                /* Dit bepaald na hoeveel seconden dit bericht word verwijderd.. in dit geval 12.. 
                   Als je dit wilt uitschakellen verwijder dan van .then tot en met }); */
                msg.delete({ timeout: 12000 })
            });
    }
});

client.login(config.token)
