const Discord = require(`discord.js`);
const client = new Discord.Client();
exports.run = (client, message, args)  => {
    nick = args.join(""); 
    if (nick < 1) return message.reply('**Qual nome você deseja ter?**');
    message.member.setNickname(nick)
    

}