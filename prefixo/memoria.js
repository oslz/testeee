
exports.run = (client, message, args) => {
    message.reply(`**Memoria utilizada:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`);
}