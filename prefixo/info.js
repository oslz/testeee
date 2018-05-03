const Discord = require(`discord.js`);
const client = new Discord.Client();
exports.run = (client, message, args)  => {
embed = new Discord.RichEmbed()
.setTitle(`╒════⋙📁 Comandos 📁⋘════╕`, 'Caso queira saber um pouco sobre mim digite !info')
.setColor(2490112)
.setTimestamp(new Date())
.addField('**🔨 ADMINISTRATIVOS 🔨**', `!banir, !kickar, !limpar, !chaton, !chatoff`)
.addField('**👓 DIVERSOS 👓**', '!cachorro, !gato, !gif, !perguntar !casal, ~~!tamanho~~')
.addField('**♨ GERAL ♨**', '!memoria, !ping, !info, !nickname')

message.channel.send(embed);
}