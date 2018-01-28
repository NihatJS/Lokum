const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame("l!yardım | Yumuşacığım :)");
});

client.on('message', msg => {
	
  var args = msg.content.split(" ").slice(1);


  
	// Yardım
	if (msg.content === 'l!yardım') {
		const embed = new Discord.RichEmbed()
		.setColor(0x22e172)
		.setTitle("Komut listesi:")
		.addField("l!yardım", "Komut listesini gösterir")
		.addField("l!hakkında", "Botun bilgilerini gösterir")
		.addField("l!rastgelehex", "Rastgele hex kodu üretir ve size gösterir")
		.addField("l!söylet [yazı]", "Bota sizin mesajlarınızı söyletir [Yetki gerekir]")
		.addField("l!sorusor [soru]", "Size rastgele cevaplar vererek soru sormanızı sağlar")
		.addField("l!sohbetsil [min 3 - max 100]", "Sohbeti silerek ferahlık sağlar [Yetki gerekir]")
		.addField("l!oylama [konu]", "Oylama başlatır [Yetki gerekir]")
		.addField("l!tarif", "Güzel bir lokum tarifi açar")
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
  
  
	if (msg.content.startsWith("l!oylama")) {
	  if (!msg.member.hasPermissions('MANAGE_MESSAGES')) return msg.reply('Yetkin yok! Gerekli yetki: `MANAGE_MESSAGES`') 
	   if (!args[0]) return msg.reply('Bomboş oylama mı olur! Aynı lokum yapmak ve içine fındık fıstık koymamak gibi! Doldur şunu!')
        const embed = new Discord.RichEmbed()
		.setColor(0x4fa04a)
		.setTitle("Oylama")
		.setDescription(msg.author.username + " Bir oylama başlattı adı: " + args.join(" "));
		m = msg.channel.send({embed}).then(function (vmessage) {
		vmessage.react("✅")
		vmessage.react("❎")
		})
	  
	}
  
  
	if (msg.content.startsWith("l!söylet")) {
	  if (!msg.member.hasPermissions('MANAGE_MESSAGES')) return msg.reply('Yetkin yok! Gerekli yetki: `MANAGE_MESSAGES`') 
	   if (!args[0]) return msg.reply('Bomboş söyleşi mi olur! Aynı lokum yapmak ve içine fındık fıstık koymamak gibi! Doldur şunu!')
		msg.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(msg.author.username + ": " + args.join(" "));
		msg.channel.send({embed})
	  
	}
  
	if (msg.content.startsWith("l!sohbetsil")) {
	  if (!msg.member.hasPermissions('MANAGE_MESSAGES')) return msg.reply('Yetkin yok! Gerekli yetki: `MANAGE_MESSAGES`')
	   if (!args) return msg.reply('Bomboş sohbet sil mi olur! Aynı lokum yapmak ve içine fındık fıstık koymamak gibi! Doldur şunu!')
	   if (args[0]<3) return msg.reply('3 Den aşağı mesaj silemezsin!')
		if (args[0]>100) return msg.reply('100 Den yukarı mesaj silemezsin!')
		msg.channel.fetchMessages()
        	msg.channel.bulkDelete(args)
		console.log(msg.channel.name + " adlı kanalda Komut kullanıldı: l!sohbetsil [sayı]")
		msg.channel.sendMessage("Sohbet temizlendi! Mesajlar silindi: "+args);
	}
  
  
	if (msg.content.startsWith("l!sorusor")) {
		if (!args[0]) return msg.reply('Bomboş soru mu sorulur! Aynı lokum yapmak ve içine fındık fıstık koymamak gibi! Doldur şunu!')
		let embed = new Discord.RichEmbed() //Embedi oluşturur.
            .setTitle(msg.author.tag + ` Cevap: ` + doMagic8BallVoodoo())
            .setColor(`0xb4171b`);
		msg.channel.send({embed: embed});
		console.log(msg.channel.name + " adlı kanalda Komut kullanıldı: l!sorusor [soru]")
	}
  
  
	if (msg.content === 'l!tarif') {
		const embed = new Discord.RichEmbed()
		.setColor(0x22e172)
		.setTitle("Türk lokumu tarifi :ok_hand:")
		.addField("Malzemeler:", "-1 Kg Toz Şeker- -Yarım Litre Su- -1 YK Limon Suyu- -1 SB Nişasta- -Yarım çay bardağı su- -2 Gr Krem Tartar-")
		.addField("Bulamak İçin:", "-1/2 SB Nişasta- -1 SB Pudra Şekeri-")
		.addField("Yaplışı:", "Toz şeker ve suyu tencereye alın. Şeker eriyinceye kadar orta ateşte kaynatıp limon suyunu ekleyin. Hafifçe koyulaşıncaya kadar kaynatmaya devam edin.")
		.addField("-", "Üzerinde biriken köpüğü alın. Bir bardak nişasta ve yarım çay bardağı suyu bir kâsede çırpın. ")
		.addField("-", "Kaynayan suya azar azar ve sürekli karıştırarak ilave edin. Krem tartarı ekleyip macun gibi oluncaya kadar kaynatın.")
		.addField("-", "Yüksek kenarlı bir tepsiyi yağlayın. Pelte halindeki lokum harcını tepsiye döküp soğumaya bırakın. Düz bir zemine pudra şeker ve nişastayı karıştırıp yayın.")
		.addField("-", "Üzerine tepsiyi ters çevirerek lokumu alın. İki parmak kalınlığında şeritler halinde kesin.")
		.addField("-", "Şeritleri pudra şekerine iyice bulayıp küp küp kesin. Hazırladığınız lokumları tekrar pudra şekerine bulayıp buzdolabında muhafaza edin. AFIYET OLSUN")
		msg.channel.send({embed})
	   console.log(msg.channel.name + " adlı kanalda Komut kullanıldı: l!tarif")
	}
  
  
});

function doMagic8BallVoodoo() {
    var rand = ['Evet', 'Hayır', 'Doğru', 'Yanlış', 'Bilemiyorum', 'Büyük ihtimalle', 'Aynen'];

    return rand[Math.floor(Math.random()*rand.length)];
}


client.login(process.env.token);
