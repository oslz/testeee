exports.run = (client, message, args) => {
    const Discord = require(`discord.js`);
  
    message.reply("**Olhe sua DM!**");
    message.author.send({
        "embed": {
            "title": `» ${message.guild.name} `,
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
                    "name": `📇 - Info sobre os comandos`,
                    "value": `**Mostre as funções dos comandos**`,
                    "inline": false
                },
                {
                  "name": `⭐ - Sobre mim`,
                  "value": `**Me conheça melhor**`,
                  "inline": false
                },
                {
                  "name": `🔑 - Permissões necessarias`,
                  "value": `**Com elas você terá acesso total aos comandos**`,
                  "inline": false
                },
                {
                    "name": `😎 - Me tenha em sua GUILD`,
                    "value": `**Convite do Construtor [!]**`,
                    "inline": false
                  }

                
            
            

]
}
    }).then(help => {
  
        setTimeout(() => {
            help.react('📁');
        }, 500);
        setTimeout(() => {
            help.react('📇');
        }, 600);
        setTimeout(() => {
            help.react('⭐');
        }, 700);
        setTimeout(() => {
            help.react('🔑');
        }, 800);
        setTimeout(() => {
            help.react('😎');
        }, 900);

        const collector = help.createReactionCollector((r, u) => (r.emoji.name === '📁' || r.emoji.name === `😎` || r.emoji.name === `🔑` || r.emoji.name === '📇' || r.emoji.name === '⭐') && u.id !== client.user.id);
  
        collector.on('collect', r => {
            switch(r.emoji.name) {
  
            case '📁':
            embed = new Discord.RichEmbed()
            .setTitle(`╒════⋙📁 Comandos 📁⋘════╕`, 'Caso queira saber um pouco sobre mim digite !info')
            .setColor(2490112)
            .setTimestamp(new Date())
            .addField('**🔨 ADMINISTRATIVOS 🔨**', `!banir, !kickar, !limpar, !chat, !defesa, !anunciar`)
            .addField('**👓 DIVERSOS 👓**', '!cachorro, !gato, !anime, !thundercats, !gif, !perguntar !casal, !inverter, !avatar ~~!tamanho~~')
            .addField('**♨ GERAL ♨**', '!memoria, !ping, !info, !nickname, !avatar, !convidar')

            message.author.send(embed);
                         
                            
                
              break;

              case '⭐':
              
              const os = require('os');
              const arch = os.arch()
              const used = process.memoryUsage().heapUsed / 1024 / 1024;
          
              let totalSeconds = process.uptime();
              let realTotalSecs = Math.floor(totalSeconds % 60);
              let days = Math.floor((totalSeconds % 31536000) / 86400);
              let hours = Math.floor((totalSeconds / 3600) % 24);
              let mins = Math.floor((totalSeconds / 60) % 60);
          
              var ping = client.ping
              embed2 = new Discord.RichEmbed()
              .setTitle(`╒════⋙⭐ Sobre mim ⭐⋘════╕`, 'Caso queira saber um pouco sobre mim digite !info')
              .setColor(2490112)
              .setTimestamp(new Date())
              .addField('**⚽ Nome: **', `Felix, mais conhecido como **CONSTRUTOR!**`)
              .addField('**🌍 Origem: **', ':flag_br: Brasil')
              .addField('**📏 Quanto estou medindo de altura em MB: **', ` ${Math.round(used * 100) / 100}`)
              .addField('**📡 Minha conexão atual é de: **', ` ${ping}`)
              .addField('**🕜 Estou online faz: **', ` ${days} dias, ${hours} horas, ${mins} minutos e ${realTotalSecs} segundos`)
              .addField('**🌟 Guilds **', ` ${client.guilds.size}`)
              .addField('**✨ Usuarios **', ` ${client.users.size}`)
                message.author.send(embed2) 
                
                break; 

                case '📇':
                embed3 = new Discord.RichEmbed()
                .setTitle(`» ${message.guild.name}`, 'Caso queira saber um pouco sobre mim digite !info')
                .setColor(2490112)
                .setTimestamp(new Date())
                .addField('**🔨 ADMINISTRATIVOS 🔨**', `!banir, !kickar, !limpar, !chat, !chaton, !chatoff`)
                .addField('!kickar','Expulsa da guild o membro mencionado')
                .addField('!banir','Expulsa permanentemente da guild o membro mencionado')
                .addField('!limpar', 'Limpa uma quantidade de mensagens')
                .addField('!chat', "Ativa ou Desativa o chat onde o comando foi escrito")
                .addField('!chaton', "Ativa o chat onde o comando foi escrito")
                .addField('!chatoff', "Desativa o chat onde o comando foi escrito")
                .addBlankField(true)
                .addField('**👓 DIVERSOS 👓**', '!cachorro, !gato, !gif, !perguntar !casal, !inverter,  ~~!tamanho~~')
                .addField('!cachorro', 'Mostra uma foto de um cachorro')
                .addField('!gato', 'Mostra uma foto de um gato')
                .addField('!gif', 'Mostra um gif de algo que você queira')
                .addField('!perguntar', "Responde suas dúvidas")
                .addField('!casal', "Mostra a chance do casal mencionado")
                .addField(`!inverter`, `Coloca a frase de trás pra frente`)
                .addField('!tamanho', 'Mostra o tamanho da rolinha do queridao')
                .addBlankField(true)
                .addField('**♨ GERAL ♨**', '!memoria, !ping, !info, !nickname')
                .addField('!memoria', "Mostra quanto estou pesando em MB")
                .addField('!ping', "Mostra a minha conexão atual em MS")
                .addField('!info', "Acho que você já sabe")
                .addField('!nickname', "Altere seu APELIDO na guild")
                message.author.send(embed3)
            
                break;

                case '🔑':
                embed5 = new Discord.RichEmbed()
                .setTitle(`» ${message.guild.name}`, '')
                .setColor(2490112)
                .setTimestamp(new Date())
                .addField('**🔨 MANAGE_MESSAGES **', `!anunciar`)
                .addField('**🔨 BAN_MEMBERS **', `!banir`)
                .addField('**🔨 KICK_MEMBERS **', `!kickar`)
                .addField('**🔨 MANAGE_GUILD **', `!defesa`)
                .addField('**🔨 ADMINISTRATOR **', `!chat, !chatoff, !chaton`)
                
                message.author.send(embed5)
                
                break;

                case '😎':
            
                embed4 = new Discord.RichEmbed()
                .setTitle(`» ${message.guild.name}`, 'Caso queira saber um pouco sobre mim digite !info')
                .setColor(2490112)
                .setTimestamp(new Date())
                .addField('**🔨 Convite **', `https://goo.gl/fUKsZe`)
                message.author.send(embed4);

        setTimeout(() => {
            help.delete();
        }, 1 * 60 * 1000);
  
    }


  
})
    })
}