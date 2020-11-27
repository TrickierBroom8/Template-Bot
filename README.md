# Template-Bot

Voeg je token en je prefix toe in de config.json tussen de haakjes ""

In de terminal voer je uit: node index.js
                 of korter: node . 
                
Nu zal je Bot online zijn en heeft hij 3 commands: clear, help en say

In de index.js staan comments die je helpen.. als je hulp nodig hebt contacteer dan Oscar.#7370 op Discord.

Commands toevoegen: 

Als je commands wilt toevoegen moet je aan het einde van de else if lus: 

    else if (command === 'COMMANDO-NAAM') { 
        client.commands.get('COMMANDO-NAAM').execute(message, args) 
    }
    
toevoegen.. daarna moet je naar het mapje commands gaan en hier een nieuw bestand aanmaken die COMMANDO-NAAM.js heet en daarin dit zetten: 

    const Discord = require('discord.js');

    module.exports = {
    name: 'COMMANDO-NAAM', // Zet hier de naam van jouw commando
    description: "COMMANDO-BESCHRIJVING", // Zet hier de beschrijving van jouw commando.. 
    execute(message, args) {

    // Voeg hier jouw code toe! 

    }

    }

en dan tussen de haakjes waar '// Voeg hier jouw code toe!' staat jouw code typen.

[![Run on Repl.it](https://repl.it/badge/github/TrickierBroom8/Template-Bot)](https://repl.it/github/TrickierBroom8/Template-Bot)
