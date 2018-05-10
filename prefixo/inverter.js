exports.run = (client, message, args) => {
    const Discord = require(`discord.js`);
let frase = args.slice(0).join(' ');

if (frase.length < 1) return message.reply('**Diga oque devo reverter!**');
embed = new Discord.RichEmbed()
.setTitle(`» ${message.guild.name}`, 'Caso queira saber um pouco sobre mim digite !info')
.setColor(2490112)
.setTimestamp(new Date())
.addField('**🔨 Original **', `${args}`)
.addField(`**🔨 Revertido**`, `${args.join(' ').split('').reverse().join('')}`)


message.channel.send(embed)
}
