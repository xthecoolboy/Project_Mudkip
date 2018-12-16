module.exports.run = async (bot,message,args) => {
    var voiceChannel = message.member.voiceChannel;

    if (!voiceChannel.permissionsFor(message.guild.member(bot.user)).has("CONNECT")) {
        return message.channel.send("Sorry I can't join that VC try a diffrent VC and make sure i have the connect permission if you need any help contact my owner").catch(console.error);
    }
    else if (voiceChannel.full && !voiceChannel.permissionsFor(message.guild.member(bot.user)).has('MOVE_MEMBERS')) {
        return message.channel.send("Sorry I can't join a full VC try joining a diffrent VC").catch(console.error);
    }
    else if (!voiceChannel) {
        return message.reply("You are not connected to a voice channel");
    }
    
    await message.channel.send("Song Loading Please Wait")

voiceChannel.join().then(connection => 
{
    const dispatcher = connection.playStream('https://cdn.glitch.com/3266dedb-0ed2-42c3-a45d-8cb0a8559df0%2Falien.mp3?1544921288737');
    if (dispatcher.on("speaking", speaking => speaking == true)){
    } 
    if (dispatcher.on('end', end => end == voiceChannel.leave())){ 
    }
    }).catch(err => console.log(err));
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "alien"
}