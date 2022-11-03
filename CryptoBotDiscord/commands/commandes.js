const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('**voici la liste des commandes !**')
        .setDescription('*certaines commandes sont disponible uniquement au staff*')
        .setColor('YELLOW')
        .addField('!commandes-staff', 'pour le staff !')
        .addField('!help', 'utile pour avoir de l\'aide sur certaine commandes')
        .addField('!bjr', 'pour dire bonjour au bot')
        .addField('!server-info', 'pour voirs les infos du serv')
        .addField('!user-info', 'pour voirs les infos d\'un joueur')
        .addField('!role-info', 'pour voirs les infos d\'un role')
        .addField('8ball', 'pile ou face avec comme réponse (oui) ou (non)')
        .setAuthor('NapoTwiixe')
        .setTimestamp())
    },
    name: 'commandes',
    help: {
        description: 'Cette commande permet de tempmute un joueur, commandes reserver au staff',
        syntax: '[nom de la personne a ban]'
    }
}

