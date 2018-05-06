exports.run = (client, message, args)  => {
    var falas1 = [
        "Claramente que sim",
        "Obvio que não porra",
        "Não",
        "Sim"
    ];
    let args1  = args.join(" ");
        message.channel.send({
            "embed": {
                "title": `» ${message.guild.name}`,
                "color": 2490112,
                "timestamp": new Date(),
                "footer": {
                    "icon_url": message.author.displayAvatarURL,
                    "text": message.author.username
                },
                "fields": [
                    {
                      "name": `Pegunta `,
                      "value": `${args1}`
                    },
                    {
                      "name": `Resposta`,
                      "value": `**${falas1[Math.floor(Math.random() * falas1.length)]}**`,
                      "inline": true
            }
        

        ]
    }
  })
}