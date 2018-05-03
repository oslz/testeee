exports.run = (client, message, args) => {
    const Discord = require(`discord.js`);
  
    message.reply("**Olhe sua DM!**");
    message.author.send({
        "embed": {
            "title": `❄ ${message.guild.name} ❄ `,
            "color": 2490112,
            "timestamp": new Date(),
            "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
            },
            "fields": [
                {
                  "name": `📁 - Comandos`,
                  "value": `**Mostra os comandos do BOT**`
                },
                {
                  "name": `⭐ - Sobre mim`,
                  "value": `**Me conheça melhor**`,
                  "inline": false
                }
            

]
}
    }).then(help => {
  
        setTimeout(() => {
            help.react('📁');
        }, 500);
        setTimeout(() => {
            help.react('⭐');
        }, 600);
  
        const collector = help.createReactionCollector((r, u) => (r.emoji.name === '📁' || r.emoji.name === '⭐') && u.id !== client.user.id);
  
        collector.on('collect', r => {
            switch(r.emoji.name) {
  
            case '📁':
            embed = new Discord.RichEmbed()
            .setTitle(`╒════⋙📁 Comandos 📁⋘════╕`, 'Caso queira saber um pouco sobre mim digite !info')
            .setColor(2490112)
            .setTimestamp(new Date())
            .addField('**🔨 ADMINISTRATIVOS 🔨**', `!banir, !kickar, !limpar, !chaton, !chatoff, !defesa`)
            .addField('**👓 DIVERSOS 👓**', '!cachorro, !gato, !thundercats, !gif, !perguntar !casal, !avatar ~~!tamanho~~')
            .addField('**♨ GERAL ♨**', '!memoria, !ping, !info, !nickname')

            message.author.send(embed);
                         
                            
                
              break;

              case '⭐':
              message.author.send('Olá, sou **Felix** um cara legal, bacana e não conta para nínguem, mas dizem que eu sou muito cheiroso e transmito **FELIXIDADE**! Tento trazer a diversão da galera com alguns comandos úteis ~~mas tem uns inuteis ai kk~~');
  
        setTimeout(() => {
            help.delete();
        }, 1 * 60 * 1000);
  
    }


  
})
    })
}