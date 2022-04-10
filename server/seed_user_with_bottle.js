const db = require('./db');

async function seed() {
    const bottles = [
        {name: 'Ciroc', type: 'Vodka'},
        {name: 'Grey Goose', type: 'Vodka'},
        {name: 'PeachyPeach', type: 'Peach Schnopps'}
    ]

    let uniqueTypes = bottles.reduce((acc, current) => {
            if(!acc.includes(current.type)) {
                acc.push(current.type)
            }
            return acc;
    }, [])

    let bottleTypes = {}
    for(let i = 0; i < uniqueTypes.length - 1; i++) {
        let type = uniqueTypes[i]
        let bt = await db.BottleType.findOne({where: {type_name: type}})
        bottleTypes[type] = bt;
    }
   
    let bottleData = bottles.map((b) => {
        return {
            name: b.name,
            bottle_type: bottleTypes[b.type]
        }
    })

    db.User.create({
        email: 'admin@localhost',
        password: 'admin',
        bottles: bottleData
    }, {include: db.Bottle})
}

seed().then();
