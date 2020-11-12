module.exports = {
    name: "clear",
    description: "Verwijder een bepaald aantal berichten.",
    async execute(message, args) {

        message.delete() // Verwijderd het eerste bericht

        if (!args[0]) return message.channel.send('Geef een nummer op'); // Kijkt of er wel argumenten zijn meegegeven ?clear args[0]

        let number = args.join(" "); // Haalt de argumenten op

        if (!number) return message.channel.send('Geef een nummer op'); // Checkt of er een nummer is

        if (isNaN(number)) return message.channel.send('Geef een nummer op'); // Checkt of het argument een nummer is

        if (number > 100) return message.channel.send('Je kan niet meer dan 100 berichten verwijderen'); // Checkt of het nummer groter is als 100

        if (number < 2) return message.channel.send('Je kan niet minder als 2 berichten verwijderen'); // Checkt of het nummer kleiner is als 2

        await message.channel.messages.fetch({ limit: number }).then(async messages => { // Haalt de berichten uit dat kanaal op.
            message.channel.send('Aan het verwijderen..').then(msg => { // Stuurt het aan het verwijderen bericht
                message.channel.bulkDelete(messages, true).then(messages => { // Verwijdert de berichten 
                    msg.edit(`\`${messages.size}\` berichten verwijderd.`); // Edit het aan het verwijderen bericht naar x aantal berichten verwijderd
                });
                msg.delete({ timeout: 7500 }) // Verwijdert het bericht na 7,5 seconden
            });
        });
    }
}