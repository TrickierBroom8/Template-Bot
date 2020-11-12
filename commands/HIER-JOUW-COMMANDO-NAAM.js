const Discord = require('discord.js');

module.exports = {
    name: 'hier-jouw-commando-naam', // Zet hier de naam van jouw commando in lowercase (niet hoofdletters)
    description: "HIER-JOUW-COMMANDO-BESCHRIJVING", // Zet hier de beschrijving van jouw commando.. 
    execute(message, args) {

        message.channel.send('HIER-JOUW-COMMANDO-TEKST')
        // ^Dit^ stuurt een bericht in het kanaal waar het bericht is gestuurd.
    

        // Hier jouw codering..

    }

}
