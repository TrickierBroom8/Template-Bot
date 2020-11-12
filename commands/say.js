module.exports = {
    name: 'say',
    description: "Laat de bot wat zeggen.",
    execute(message, args) {

        //if (!message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR")) return message.reply('Je hebt geen toestemming.'); // Zet dit aan als je wilt dat alleen moderators het kunnen doen

        let bericht = args.join(" "); // Haalt de benodigde tekst op
        
        message.delete(); // Verwijdert het eerste bericht

        message.channel.send(bericht); // Stuurt het nieuwe bericht namens de bot

        console.log(`${message.author.tag} heeft net het say command gebruikt: ${bericht}`); // Zet in de console wat er gezegd is en door wie..

    }

}