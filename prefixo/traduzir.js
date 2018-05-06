exports.run = (client, message, args)  => {
    const translate = require('google-translate-api');
    let traduzir = args.slice(1).join(' ');
      if (traduzir < 1) return message.reply('**Diga o idioma e oque devo traduzir!**');
    translate(`${message.content.replace(`!traduzir ${args[0]} `,"")}`, {to: `${args[0]}`}).then(traducao => {
        message.channel.send({
            "embed": {
                "title": `» ${message.guild.name}`,
                "color": 2490112,
                "timestamp": new Date(),
                "footer": {
                    "icon_url": message.author.displayAvatarURL,
                    "text": message.author.username
                },
                "thumbnail": {
                  "url": message.guild.displayAvatarURL,
              },
              "fields": [
                {
                  "name": "Original",
                  "value": "**'" + message.content.replace(`!traduzir ${args[0]} `,"") + "'**",
                  "inline": true
                },
                {
                  "name": "Tradução",
                  "value": "**'" + traducao.text + "'**",
                  "inline": true
                }
              ]
            }
          });
    }).catch(err => {
        console.error(err);
        message.reply("**Idiomas: EN, PT**")
    });
    }