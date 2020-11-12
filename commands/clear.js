module.exports = {
    name: "clear",
    description: "Verwijder een bepaald aantal berichten.",
    async execute(message, args) {

        message.delete()

        if (!args[0]) return message.channel.send('Geef een nummer op');

        let number = args.slice(0).join(" ");

        if (!number) return message.channel.send('Geef een nummer op');

        if (isNaN(number)) return message.channel.send('Geef een nummer op');

        if (number > 100) return message.channel.send('Je kan niet meer dan 100 berichten verwijderen');

        if (number < 2) return message.channel.send('Je kan niet minder als 2 berichten verwijderen');

        await message.channel.messages.fetch({ limit: number }).then(async messages => {
            message.channel.send('Aan het verwijderen..').then(msg =>{
                message.channel.bulkDelete(messages, true).then(messages => {
                    msg.edit(`${messages.size} berichten verwijderd.`);
                });
                msg.delete({ timeout: 7500 })
            }); 
        });
    }
}