// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:
const Sequelize = require('sequelize')
const db = require('./database')
const Worlds = require('./Worlds')


const syncAndSeed = async () => {
    await db.sync({force: true});
    
    await Worlds.create({name: "Twilight Town", key: "Keyblade", boss: "Armor Knight"});
    await Worlds.create({name: "Deep Jungle", key: "WildKey", boss: "Camo"});
    await Worlds.create({name: "WonderLand", key: "AceOfHearts", boss: "Alice"});
    await Worlds.create({name: "Neverland", key: "WishKey", boss: "Captian Hook"});
    await Worlds.create({name: "Hollow Bastion", key: "Oblivion", boss: "Riku"});
    await Worlds.create({name: "Monstro", key: "FairyKey", boss: "Riku"});
    await Worlds.create({name: "Olympia", key: "HercKey", boss: "Hades"});
    console.log("Database Synced")
}

module.exports = {
    // Include your models in this exports object as well!
    syncAndSeed,
    models: {
        Worlds
    },
    db,
}