const Discord = require(`discord.js`);
const client = new Discord.Client({
        autoReconnect: true
})
const prefix = "!"
var leo = "323501959560691712"
client.login('NDQxNzU4OTgzNDE0MzQ5ODQ0.Dc072w.hsarnXqo2ZpT8YFDbyYEeM6b98Q');
client.on("ready", () => {
        client.user.setPresence({ game: { name: '!ajuda', type: 1, url: 'https://www.twitch.tv/olszera'} })
        
    console.log(`${client.user.username} esta ligado em ${client.guilds.size} guilds!`)
}) // COMANDOS - GERAIS
client.on("message", message =>{
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
try {
let commandFile = require(`./prefixo/${command}.js`);
commandFile.run(client, message, args);
console.log(`[COMANDO] - ${command} - Erros 0 ` )

} catch (err) {
    console.error(`[CONSOLE] ${message.guild.id} ` + err);
    

}
})