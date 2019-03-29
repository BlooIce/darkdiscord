const Discord = require("discord.js") 
const bot = new Discord.Client();
const prefix = "$";



bot.on('ready', async => {
    console.log("Go Pub !")
})

bot.on('message', message => {

    let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
             if (cmd === prefix + "mp"){
        if(message.author.id != "466453505469710346") return;
                if(message.channel.type === "dm") return;
                if(message.deletable) message.delete();

                let MpMessage = args.slice(0).join(" ");

                message.guild.members.forEach(member => {
                    member.send(`${MpMessage}`)
                })
            
            }
})

bot.login("NTQ5NzE4MzgwOTcwNzcwNDUy.XJ6QHw.KHwRZ6biCkKs_gSDnjBHRHknOJQ").catch(err=> console.log("Token Incorrect"));
