const Discord = require(`discord.js`);
const client = new Discord.Client();
exports.run = (client, message, args)  => {
embed = new Discord.RichEmbed()
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
.addField('**👓 DIVERSOS 👓**', '!cachorro, !gato, !gif, !perguntar !casal, !invertido,  ~~!tamanho~~')
.addField('!cachorro', 'Mostra uma foto de um cachorro')
.addField('!gato', 'Mostra uma foto de um gato')
.addField('!gif', 'Mostra um gif de algo que você queira')
.addField('!perguntar', "Responde suas dúvidas")
.addField('!casal', "Mostra a chance do casal mencionado")
.addField(`!invertido`, `Coloca a frase de trás pra frente`)
.addField('!tamanho', 'Mostra o tamanho da rolinha do queridao')
.addBlankField(true)
.addField('**♨ GERAL ♨**', '!memoria, !ping, !info, !nickname')
.addField('!memoria', "Mostra quanto estou pesando em MB")
.addField('!ping', "Mostra a minha conexão atual em MS")
.addField('!info', "Acho que você já sabe")
.addField('!nickname', "Altere seu APELIDO na guild")
message.channel.send(embed).then(function (message) {
    setTimeout(function() {
      message.delete();
        }, 25000)
    })
}