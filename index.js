const Discord = require('discord.js');
const client = new Discord.Client();


const prefix = "=!";

var errembed = new Discord.RichEmbed()
                    .setColor(0xff0000)
                    .setDescription("Hata: Böyle Bir Komut Yok!")
                    .setTitle("Komut Bulunamadı");


function generateHex() {
return '0x' + Math.floor(Math.random()*16777215).toString(16);
}

function generateEmbed(error) {
    var errorembed = new Discord.RichEmbed()
    .setColor(0x18d9cf)
    .setTitle("Hata")
    .setDescription(error);

    return errorembed;
}

client.on("ready", function () {
    const guildNames = client.guilds.map(g => g.name).join("\n");
    console.log("Client Is Ready.");
    console.log("Servers : " + client.guilds.size);
    console.log(" ");
    console.log();
    console.log(guildNames);

    client.user.setGame("=!yardım", "https://twitch.tv/kakahan-huzeyfe-nihatjs");
})

client.on("message", function(message) {
    let args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;

    var msg = message;
    var chnl = message.channel;
    var gld = message.guild;
    var member = message.member;
    var mmention = message.mentions.members.first();
    var umention = message.mentions.users.first();
    var logs = gld.channels.find("name", "logs");

    if(!logs) logs = "none";


    switch(args[0]) {
        default:
        chnl.send({embed: errembed});
        break;
        case "bilgi":
            var embed = new Discord.RichEmbed()
            .setColor(0x21dc92)
            .addField("Yapımcılar", "Kakahan, Huzeyfe, NihatJS")
            .addField("Ping", Math.floor(client.ping).toString())
            .addField("Sunucular", client.guilds.size.toString())
            .addField("Yapıldı", client.user.createdAt.toString());

            chnl.send({embed});
            break;
        case "hexoluştur":
            var hex = generateHex();
            var sendhex = "#"+hex.substring(1);

            var embed1 = new Discord.RichEmbed()
            .setColor(hex)
            .setTitle("Hex Oluşturucu")
            .setDescription("Hex Oluşturuldu!\nHex: " + sendhex);

            chnl.send({embed: embed1});
            break;
        case "mesajsil":
	  if (!msg.member.hasPermissions('MANAGE_MESSAGES')) return msg.reply('Yetkin yok! Gerekli yetki: `MANAGE_MESSAGES`')
	   if (!args[1]) return msg.reply('Bomboş sohbet sil mi olur! Aynı lokum yapmak ve içine fındık fıstık koymamak gibi! Doldur şunu!')
	   if (args[1]<3) return msg.reply('3 Den aşağı mesaj silemezsin!')
		if (args[1]>100) return msg.reply('100 Den yukarı mesaj silemezsin!')
		msg.channel.fetchMessages()
                msg.channel.bulkDelete(args[1]);
		msg.channel.sendMessage("Sohbet temizlendi! Mesajlar silindi: "+args[1]);
            var embed5 = new Discord.RichEmbed()
            .addField("Mesaj Silindi", args[1])
            .addField("Kanal", chnl)
            .addField("Silen", msg.author)
            .setColor(0x18d9cf);
            logs.send({embed: embed5});
            break;
        case "yardım":
            
            var embed2 = new Discord.RichEmbed()
            .setColor(generateHex())
            .addField("bilgi", "Bot Hakkında Bilgi Verir")
            .addField("hexoluştur", "Rastgele Renk Oluşturur")
            .addField("yardım", "Komutlar Hakkında Yardım")
            .addField("mesajsil", "Belirttiğiniz Kadar Mesaj Siler")
            .addField("oylama", "Belirttiğiniz Konuda Evet - Hayır Oylaması Yapar")
            .addField("sunucubilgi", "Sunucu Hakkında Bilgi Verir")
            .addField("söyle", "Bota Bir Şey Söyletir")
            chnl.send({embed: embed2});
            break;
        case "oylama":
	     if (!msg.member.hasPermissions('MANAGE_MESSAGES')) return msg.reply('Yetkin yok! Gerekli yetki: `MANAGE_MESSAGES`') 
	      if (!args[1]) return msg.reply('Bomboş oylama mı olur! Lütfen doldur!')
        	const embed3 = new Discord.RichEmbed()
		      .setColor(0x4fa04a)
		      .setTitle("Oylama")
		      .setDescription(msg.author.username + " Bir oylama başlattı adı: " + args.join(" "));
		    m = msg.channel.send({embed: embed3}).then(function (vmessage) {
		    vmessage.react("✅")
		    vmessage.react("❎")
		    })
            break;
    case "söyle":
            if (!msg.delete) return chnl.send("I DONT HAVE PERMS!");
             msg.delete();
             var embed4 = new Discord.RichEmbed()
                .setURL(msg.author.avatarURL)
                .setDescription(message.author + ": " + args.slice(1).join(" "));
            chnl.send({embed: embed4})
            break;

);
}
})

client.on("guildMemberAdd", function(member) {

})

client.login(process.env.token);
