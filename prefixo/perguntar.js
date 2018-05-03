exports.run = (client, message, args)  => {
    var falas1 = [
        "Claramente que sim",
        "Obvio que não porra",
        "Não",
        "Sim"
    ];

        message.channel.send({
            "embed": {
                "title": `╒════⋙💬 PERGUNTA 💬⋘════╕`,
                "color": 2490112,
                "timestamp": new Date(),
                "footer": {
                    "icon_url": message.author.displayAvatarURL,
                    "text": message.author.username
                },
                "fields": [
                    {
                      "name": `🔹 Pegunta 🔹`,
                      "value": `${args}`
                    },
                    {
                      "name": `🔸 Resposta 🔸`,
                      "value": `**${falas1[Math.floor(Math.random() * falas1.length - 1)]}**`,
                      "inline": true
            }
        

        ]
    }
  })
}