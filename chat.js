exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**SEM PERMISSÃO** (~~ADMINISTRATOR~~)");
    message.channel.send({
        "embed": {
            "title": `**╒════⋙💬 CHAT 💬⋘════╕**`,
            "color": 2490112,
            "timestamp": new Date(),
            "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
            },
            "fields": [
                {
                  "name": `❌ - Desliga o CHAT`,
                  "value": `**Somente membros com permissão poderão falar**`
                },
                {
                  "name": `✔ - Liga o CHAT`,
                  "value": `**Todos poderão escrever**`,
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
            var da = message.guild.roles.find("name","@everyone")
            message.channel.overwritePermissions(da, {
                SEND_MESSAGES: false
                
              })
              message.channel.send('**Chat off!**');
                         
                            
                
              break;

              case '✔':
              var da = message.guild.roles.find("name","@everyone")
              message.channel.overwritePermissions(da, {
                  SEND_MESSAGES: true
                  
                })
                message.channel.send('**Chat on!**');
              
        setTimeout(() => {
            help.delete();
        }, 1 * 60 * 1000);
  
    }



})
    })

}
