const randomPuppy = require('random-puppy');
const Discord = require(`discord.js`);
const client = new Discord.Client();
exports.run = (client, message, args) => {
        const randomPuppy = require('random-puppy');
    
    randomPuppy("anime")
        .then(url => {
                message.channel.send({
                    "embed": {
                        "title": `╒════⋙🎴 ANIME 🎴⋘════╕`,
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