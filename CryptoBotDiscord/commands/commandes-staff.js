const Discord = require('discord.js')

module.exports = {
    run: message => {
        if (!message.member.hasPermission('STAFF_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('**voici la liste des commandes**')
        .setDescription('*certaines commandes sont disponible uniquement aux staffs*')
        .setColor('RANDOM')
        .addField('!ban', 'pour ban un joueur définitvement')
        .addField('!tempban', 'ban un joueur temporairement')
        .addField('!tempmute', 'mute un joueur temporairement')
        .addField('!mute', 'mute un joueur')
        .addField('!unmute', 'unmute un joueur')
        .addField('!kick', 'kick un joueur')
        .addField('!warn', 'donner un warn a un joueur')
        .addField('!unwarn', 'retirer le/les warn d\'un joueur')
        .setAuthor('NapoTwiixe dev js')
        .setTimestamp())
    },
    name: 'commandes-staff'
}
