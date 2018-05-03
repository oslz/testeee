exports.run = (client, message, args) => {
    message.channel.createInvite().then(a =>{
        message.channel.send({
            "embed": {
                "title": `» ${message.guild.name}`,
                "color": 2490112,
                "timestamp": new Date(),
                "footer": {
                    "icon_url": message.author.displayAvatarURL,
                    "text": message.author.username
                },
                "fields": [
                    {
                      "name": `• Convite •`,
                      "value": `**${a.url}**`
                    }
                ]
              }
            })
        })
    }
        
        
    
    
    
            