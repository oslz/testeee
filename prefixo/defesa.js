exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**SEM PERMISSÃO** (~~MANAGE_GUILD~~)");
    message.channel.send({
        "embed": {
            "title": `**SISTEMA DE VERIFICAÇÃO**`,
            "color": 2490112,
            "timestamp": new Date(),
            "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
            },
            "fields": [
                {
                  "name": `🔥 - Mostra o nivel atual`,
                  "value": `**Mostre o nivel atual**`
                },
                {
                  "name": `🔨 - Mude o nivel atual para o recomendado (2)`,
                  "value": `** Mude o nivel**`,
                  "inline": false
                },
                {
                  "name": `⏪ - Mude o nivel atual para sem segurança (NENHUM)`,
                  "value": `** Mude o nivel**`,
                  "inline": false
                }
            
            

]
}

    }).then(help => {
  
        setTimeout(() => {
            help.react('🔥');
        }, 500);
        setTimeout(() => {
            help.react('🔨');
        }, 600);
        setTimeout(() => {
            help.react('⏪');
        }, 600);
  
        const collector = help.createReactionCollector((r, u) => (r.emoji.name === '🔥' || r.emoji.name === `⏪` || r.emoji.name === '🔨') && u.id !== client.user.id);
  
        collector.on('collect', r => {
            switch(r.emoji.name) {
  
            case '🔥':


            message.channel.send(`O nivel definido atualmente é **${message.guild.verificationLevel}**`)
                         
                            
                
              break;

              case '🔨':
              message.guild.setVerificationLevel(2)
              message.channel.send('**NIVEL ALTERADO**');

              break;

              case '⏪':
              message.guild.setVerificationLevel(0)
              message.channel.send('**NIVEL ALTERADO**');
  
        setTimeout(() => {
            help.delete();
        }, 1 * 60 * 1000);
  
    }



})
    })

}
