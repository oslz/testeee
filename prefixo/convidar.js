exports.run = (client, message, args) => {
    if(!message.guild.me.permissions.has('CREATE_INSTANT_INVITE')) {
    return message.channel.send(`**Estou sem permissão, adicione-a ao meu cargo** (~~CREATE_INSTANT_INVITE~~)`);
} else {
    message.channel.createInvite ().then(a =>{
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
}
        
    
    
    
            