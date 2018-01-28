const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame("l!yardım | Yumuşacığım :)");
});

client.on('message', msg => {
	


  
	// Yardım
	if (msg.content === 'l!yardım') {
		const embed = new Discord.RichEmbed()
		.setColor(0x22e172)
		.setTitle("Lokum Komut listesi:")
		.addField("l!yardım", "Komut listesini gösterir")
		.addField("l!hakkında", "Botun bilgilerini gösterir")
		.addField("l!rastgelehex", "Rastgele hex kodu üretir ve size gösterir")
		msg.channel.send({embed})
	   console.log(msg.channel.name + " adlı kanalda Komut kullanıldı: l!yardım")
	}
	// Yardım
  
  
  
  	if (msg.content === 'l!hakkımda') {
    		msg.channel.sendMessage("`Lokum Bot | V1.0 By NihatJS`");
    		msg.channel.send("`"+Math.floor(client.ping)+"ms`")
 	 }
  
  
	if (msg.content === 'l!rastgelehex') {
      		let color = ((1 << 24) * Math.random() | 0).toString(16); //Rastgele hex kodu üretir.
      		let embed = new Discord.RichEmbed() //Embedi oluşturur.
            		.setTitle(`#${color}`)
            		.setColor(`#${color}`);
     	msg.channel.send({embed: embed});
	}
    if (message.content == "^clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
    }

});
  
});



client.login(process.env.token);
