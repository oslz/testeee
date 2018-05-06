exports.run = (client, message, args) => {
    const Discord = require(`discord.js`);
    var leo = "323501959560691712"
    let changelog = args.slice(0).join(' ');
        if(!leo.includes(message.author.id)) return message.reply("**Somente meu PAI**")
        embed = new Discord.RichEmbed()
        .setTitle('⬜ ATUALIZAÇÕES', `${args[0]}`)

        message.channel.send(embed);
}