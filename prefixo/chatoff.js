exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**SEM PERMISSÃO** (~~ADMINISTRATOR~~)");
var da = message.guild.roles.find("name","@everyone")
message.channel.overwritePermissions(da, {
    SEND_MESSAGES: false
    
  })
  message.channel.send('**Chat off!**');
}
