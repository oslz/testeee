exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**SEM PERMISSÃO** (~~MANAGE_MESSAGES~~)");
        const sayMessage = args.join(" ");
        var da = message.guild.roles.find("name","@everyone")
        if (sayMessage < 1) return message.reply('**O que você quer anunciar?**')
        message.channel.send(`[**Anuncio** » ~~${da}~~] ${sayMessage}`);
    }
