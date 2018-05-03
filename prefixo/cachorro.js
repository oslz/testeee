const randomPuppy = require('random-puppy');
const Discord = require(`discord.js`);
const client = new Discord.Client();
exports.run = (client, message, args) => {
        const randomPuppy = require('random-puppy');
    
    randomPuppy("dog")
        .then(url => {
            embed = new Discord.RichEmbed()
            .setTitle(`» ${message.guild.name}`)
            .setColor(2490112)
            .setImage(url)
            .setTimestamp(new Date())
            message.channel.send({
                "embed": {
                    "title": `» ${message.guild.name}`,
                    "color": 2490112,
                    "timestamp": new Date(),
                    "footer": {
                        "icon_url": message.author.displayAvatarURL,
                        "text": message.author.username
                    },
                    "image": {
                        "url": url
                    }
                }
            })
    
        })
     
    }