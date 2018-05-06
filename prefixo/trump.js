const snek = require('snekfetch');
const Discord = require('discord.js');
const api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

module.exports.run = (bot, message, args) => {



    snek.get(api).then(r => {       

        let embed = new Discord.RichEmbed()
        .setTitle(`» ${message.guild.name}`)
        .setDescription(r.body.message)
        .addField("Caso queira a tradução", "!traduzir PT <mensagem dita pelo trumpzao>")
        .setColor(2490112)
        message.channel.send(embed);

    
})
}
