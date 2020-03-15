const command = require('./command');
const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = class help extends command {

  static match (message){
    return message.content.startsWith('$help')
  }
  static action (message){


		try {
		//supprime le message
		  message.delete();

		// zone de texte
			var help = new Discord.RichEmbed()
				.setThumbnail(message.guild.iconURL)
				.setDescription("Besoin d'aide sur UR ?")
				.addField(":small_orange_diamond: $cal", ":small_blue_diamond: Envoie un lien pour programmer une partie")
				.setFooter("Bon jeu")
		//fin zone de texte





		//message perso DM
			message.author.createDM().then(channel => {
				channel.send(help)
			});


		  } catch (e) {
		console.log(e);
		  }

  }
}
