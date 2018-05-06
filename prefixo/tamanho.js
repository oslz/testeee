const Discord = require(`discord.js`);
const client = new Discord.Client();
exports.run = (client, message, args)  => {
    var falas1 = [
        "Me falaram 12cm",
        "Prefiro nem comentar para não chatear ele",
        "Cara, 18cm facil",
        "uns 15, sei lá",
        "Corta a fimose garoto",
        "Porra irmão, grandão",
        "Grandissimo",
        "Poderoso",
        "~~nem faz cocegas~~",
        "Vai se fuder rapa"
    ];
    var mentions = message.mentions.users.first();
    if (!mentions) {
        return message.reply("**Mencione alguem**");
    } else {

    
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
                      "name":  `O dono da cobra `,
                      "value": `**${mentions}**`
                    },
                    {
                      "name":  `Tamanho `,
                      "value": `${falas1[Math.floor(Math.random() * falas1.length)]}`,
                      "inline": true
            }
        

        ]
    }
  })
}}