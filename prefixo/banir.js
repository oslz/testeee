exports.run = (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**SEM PERMISSÃO** (~~BAN_MEMBERS~~)");
    let member = message.mentions.members.first();
    if (member === null) return message.reply('Quem eu devo **BANIR**? (mencione-o)');
    message.reply('Confirme o banimento em sua **DM**')
    message.author.send({
        "embed": {
            "title": `**╒════⋙🔰 BANIR **${member.name}** 🔰⋘════╕**`,
            "color": 2490112,
            "timestamp": new Date(),
            "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
            },
            "fields": [
                {
                  "name": `❌ - Cancela o banimento`,
                  "value": `**-**`
                },
                {
                  "name": `✔ - Confirma o banimento`,
                  "value": `**-**`,
                  "inline": false
                }
            
            

]
}

    }).then(help => {
  
        setTimeout(() => {
            help.react('❌');
        }, 500);
        setTimeout(() => {
            help.react('✔');
        }, 600);
  
        const collector = help.createReactionCollector((r, u) => (r.emoji.name === '✔' || r.emoji.name === '❌') && u.id !== client.user.id);
  
        collector.on('collect', r => {
            switch(r.emoji.name) {
  
            case '❌':

             message.author.send('Você quem manda! Membro **NAO** foi banido ')
             message.channel.send(`${member} você foi **perdoado**`);
                         
                            
                
              break;

              case '✔':
              member.ban();
             message.author.send('Você quem manda! Membro foi banido ')
             message.channel.send(`${member.user} foi **banido**`);
              
        setTimeout(() => {
            help.delete();
        }, 1 * 60 * 1000);
  
    }



})
    })



}