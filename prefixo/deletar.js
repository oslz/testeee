exports.run = (client, message, args) => {
    if(!message.guild.me.permissions.has('MANAGE_MESSAGES')) {
        return message.channel.send("**Estou sem permissão, adicione-a ao meu cargo** (~~MANAGE_MESSAGES~~)") 
      } else {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**SEM PERMISSÃO** (~~MANAGE_MESSAGES~~)");
    if (args.length < 1) return message.reply('**Quantas mensagens devo apagar?**');1
    if (args.length > 100) return message.reply('**O máximo é 100 mensagens**')
    message.channel.bulkDelete(`${args[0]}`)

          message.channel.send(`** <@${message.author.id}> limpou o historico!**`);
          }
        }