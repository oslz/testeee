const Discord = require(`discord.js`);
const client = new Discord.Client();
exports.run = (client, message, args) => {
    message.channel.send({
        "embed": {
            "title": `╒════⋙😄 AVATAR 😄⋘════╕`,
            "color": 2490112,
            "timestamp": new Date(),
            "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
            },
            "image": {
                "url": message.author.displayAvatarURL
            }
        }
    })


}