
const Discord = require(`discord.js`);
const client = new Discord.Client();
exports.run = (client, message, args)  => {
    var falas = [
        "10% [█.........]", 
        "20% [██........]", 
        "30% [███.......]", 
        "40% [████......]", 
        "50% [█████.....]", 
        "60% [██████....]", 
        "90% [█████████.]", 
        "80% [████████..]", 
        "70% [███████...]", 
        "100%[██████████]"
    ];
    mentions = message.mentions.users.first(2);
    if (mentions < 2) return message.reply("**Mencione as duas pessoas**");
        message.channel.send({
            "embed": {
                "title": `╒════⋙💞 CASAL 💞⋘════╕`,
                "color": 2490112,
                "timestamp": new Date(),
                "footer": {
                    "icon_url": message.author.displayAvatarURL,
                    "text": message.author.username
                },
                "fields": [
                    {
                      "name": "💖 Será que temos um casal novo por aqui  💖",
                      "value": `${mentions[0]} ${mentions[1]}`
                    },
                    {
                      "name": `Chances atuais`,
                      "value": `${falas[Math.floor(Math.random() * falas.length - 1)]}`,
                      "inline": true
            }
        

        ]
    }
  })
}