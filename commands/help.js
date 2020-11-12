const Discord = require('discord.js');

module.exports = {
    name: 'help', 
    description: "Stuurt een lijst van commando's", 
    execute(message, args) {

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

}
