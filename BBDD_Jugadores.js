const { MongoClient, ObjectId } = require("mongodb");


async function insertarJugadores() {
const uri = "mongodb://localhost:27017"; // Cambia si usas otro host
const client = new MongoClient(uri);


try {
await client.connect();
const db = client.db("Lisensiado"); // Cambia al nombre real de tu BBDD
const jugadores = db.collection("jugadores");


const datos = [
//Mark Evans
{
  "_id": "Mark_Evans_T1",
  "name": "Mark evans",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/mark_evans.png"},
  "imageDetail": { "url": "/img/jugadoresID/mark_evans.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Justicia",
  "tier": "A+",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

    "stats": {
    power: 98,
    control: 89,
    technique: 90,
    pressure: 90,
    physique: 85,
    agility: 90,
    intelligence: 95,
    kicking: 90,
    defense: 95,
    dispute: 90
  },

  "matchStats": {
    "stamina": 120,
    "tension": 70
  },

  "techniques": [
    {
      "technique_id": "Mano_Celestial",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Despeje_de_Fuego",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Super_Relampago",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
        "technique_id": "Despeje_Explosivo",
        "relation": "creador",
        "power_modifier": 1.0
    },
    {
        "technique_id": "Mano_Celestial_Doble",
        "relation": "creador",
        "power_modifier": 1.0
    },
    {
        "technique_id": "Super_Trampolin_Relampago",
        "relation": "heredero",
        "power_modifier": 0.5
    },
    {
        "technique_id": "Ruptura_Relampago",
        "relation": "creador",
        "power_modifier": 1.0
    },
    {
        "technique_id": "Tri_Pegaso",
        "relation": "creador",
        "power_modifier": 1.0
    },
    {
        "technique_id": "Defensa_Triple",
        "relation": "creador",
        "power_modifier": 1.0
    },
    {
        "technique_id": "Fenix",
        "relation": "creador",
        "power_modifier": 1.0
    },
    {
      "technique_id": "Mano_Magica",
      "relation": "creador",
      "power_modifier": 1.0
    },
    
  ]
},




//Nathan Swift
{
  "_id": "Nathan_Swift_T1",
  "name": "Nathan Swift",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/nathan_swift.png"},
  "imageDetail": { "url": "/img/jugadoresID/nathan_swift.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Justicia",
  "tier": "B+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    power: 85,
    control: 85,
    technique: 90,
    pressure: 89,
    physique: 90,
    agility: 95,
    intelligence: 90,
    kicking: 89,
    defense: 85,
    dispute: 90
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Entrada_Huracan",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Pajaro_de_Fuego",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Espejismo",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},






//Jack Wallside
{
  "_id": "Jack_Wallside_T1",
  "name": "Jack",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/jack_wallside.png"},
  "imageDetail": { "url": "/img/jugadoresID/jack_wallside.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    power: 80,
    control: 85,
    technique: 92,
    pressure: 85,
    physique: 89,
    agility: 86,
    intelligence: 95,
    kicking: 75,
    defense: 90,
    dispute: 85
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Trampolin_Relampago",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Super_Trampolin_Relampago",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "El_Muro",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Defensa_Triple",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},








//Jim Wraith
{
  "_id": "Jim_Wraith_T1",
  "name": "Jim Wraith",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/jim_wraith.png"},
  "imageDetail": { "url": "/img/jugadoresID/jim_wraith.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    power: 79,
    control: 85,
    technique: 82,
    pressure: 85,
    physique: 82,
    agility: 91,
    intelligence: 85,
    kicking: 75,
    defense: 87,
    dispute: 85
  },

  "matchStats": {
    "stamina": 100,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Giro_Bobina",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Ataque_Sombrio",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},







//Tod Ironside
{
  "_id": "Tod_Ironside_T1",
  "name": "Tod Ironside",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/tod_ironside.png"},
  "imageDetail": { "url": "/img/jugadoresID/tod_ironside.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    power: 80,
    control: 85,
    technique: 82,
    pressure: 89,
    physique: 86,
    agility: 91,
    intelligence: 88,
    kicking: 82,
    defense: 83,
    dispute: 86
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Defensa_Triple",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Giro_de_Mono",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Tiro_del_Cometa",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},







//Steve Grim
{
  "_id": "Steve_Grim_T1",
  "name": "Steve Grim",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/steve_grim.png"},
  "imageDetail": { "url": "/img/jugadoresID/steve_grim.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    power: 83,
    control: 82,
    technique: 89,
    pressure: 89,
    physique: 86,
    agility: 91,
    intelligence: 88,
    kicking: 87,
    defense: 83,
    dispute: 86
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Disparo_Rodante",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Zig_Zag_Explosivo",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},








//Tim Saunders
{
  "_id": "Tim_Saunders_T1",
  "name": "Tim Saunders",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/tim_saunders.png"},
  "imageDetail": { "url": "/img/jugadoresID/tim_saunders.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    power: 83,
    control: 82,
    technique: 81,
    pressure: 82,
    physique: 82,
    agility: 91,
    intelligence: 88,
    kicking: 82,
    defense: 86,
    dispute: 86
  },

  "matchStats": {
    "stamina": 100,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Cabezazo_Kung_Fu",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Torbellino_Dragon",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},








//Sam Kincaid
{
  "_id": "Sam_Kincaid_T1",
  "name": "Sam Kincaid",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/sam_kincaid.png"},
  "imageDetail": { "url": "/img/jugadoresID/sam_kincaid.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    power: 83,
    control: 82,
    technique: 81,
    pressure: 82,
    physique: 82,
    agility: 89,
    intelligence: 83,
    kicking: 82,
    defense: 86,
    dispute: 86
  },

  "matchStats": {
    "stamina": 100,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Chut_Granada",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Balon_Falso",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},








//Maxwell Carson
{
  "_id": "Maxwell_Carson_T1",
  "name": "Max",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/maxwell_carson.png"},
  "imageDetail": { "url": "/img/jugadoresID/maxwell_carson.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    power: 83,
    control: 82,
    technique: 81,
    pressure: 82,
    physique: 86,
    agility: 89,
    intelligence: 83,
    kicking: 87,
    defense: 86,
    dispute: 89
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Tiro_Cruzado",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Robo_Veloz",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]

},








//Axel Blaze
{
  "_id": "Axel_Blaze_T1",
  "name": "Axel Blaze",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/axel_blaze.png"},
  "imageDetail": { "url": "/img/jugadoresID/axel_blaze.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    power: 90,
    control: 95,
    technique: 95,
    pressure: 90,
    physique: 90,
    agility: 90,
    intelligence: 90,
    kicking: 95,
    defense: 85,
    dispute: 90
  },

  "matchStats": {
    "stamina": 120,
    "tension": 100
  },

  "techniques": [
    {
      "technique_id": "Tornado_De_Fuego",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Tornado_Dragon",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Trampolin_Relampago",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Super_Relampago",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Pajaro_de_Fuego",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Super_Trampolin_Relampago",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Ruptura_Relampago",
      "relation": "heredero",
      "power_modifier": 0.5
    },


    {
      "technique_id": "Pinguino_Emperador_n_2",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Empuje_Gemelo_F",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Primera_Leyenda",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},








//Kevin Dragonfly
{
  "_id": "Kevin_Dragonfly_T1",
  "name": "Kevin Dragonfly",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/kevin_dragonfly.png"},
  "imageDetail": { "url": "/img/jugadoresID/kevin_dragonfly.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    power: 85,
    control: 84,
    technique: 89,
    pressure: 82,
    physique: 85,
    agility: 86,
    intelligence: 85,
    kicking: 90,
    defense: 80,
    dispute: 85
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Remate_Dragon",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Tornado_Dragon",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "MegaDragon",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},








//William Glass
{
  "_id": "William_Glass_T1",
  "name": "Willi Glass",
  "sex": "M",
  "secondaryRole": ["player"],
  "role": "Gerente",
  "image": {"url": "/img/jugadores/william_glass.png"},
  "imageDetail": { "url": "/img/jugadoresID/william_glass.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 12
    }
  ],

  "gerenteStats": {
    "management": 70,
    "strategy": 85,
    "motivation": 80,
    "tactics": 82
  },

  "stats": {
    power: 80,
    control: 80,
    technique: 85,
    pressure: 80,
    physique: 80,
    agility: 80,
    intelligence: 85,
    kicking: 80,
    defense: 80,
    dispute: 80
  },

  "matchStats": {
    "stamina": 100,
    "tension": 80
  },

  "techniques": []
},









//Bobby Shearer
{
  "_id": "Bobby_Shearer_T1",
  "name": "Bobby",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/bobby_shearer.png"},
  "imageDetail": { "url": "/img/jugadoresID/bobby_shearer.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "secondaryPosition": "MD",
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 13
    }
  ],

  "stats": {
    power: 88,
    control: 86,
    technique: 85,
    pressure: 89,
    physique: 88,
    agility: 85,
    intelligence: 85,
    kicking: 80,
    defense: 89,
    dispute: 85
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Tri_Pegaso",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Fenix",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]

},








//Jude Sharp
{
  "_id": "Jude_Sharp_T1",
  "name": "Jude Sharp",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/jude_sharp.png"},
  "imageDetail": { "url": "/img/jugadoresID/jude_sharp.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 14
    }
  ],

  "stats": {
    power: 85,
    control: 90,
    technique: 90,
    pressure: 85,
    physique: 85,
    agility: 90,
    intelligence: 95,
    kicking: 85,
    defense: 80,
    dispute: 85
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Pinguino_Emperador_n_2",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Empuje_Gemelo_F",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Ruptura_Relampago",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Primera_Leyenda",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Espejismo_De_Balon",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},







//Erik Eagle
{
  "_id": "Erik_Eagle_T1",
  "name": "Erik Eagle",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/erik_eagle.png"},
  "imageDetail": { "url": "/img/jugadoresID/erik_eagle.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 15
    }
  ],

  "stats": {
    power: 85,
    control: 90,
    technique: 90,
    pressure: 85,
    physique: 85,
    agility: 90,
    intelligence: 95,
    kicking: 85,
    defense: 80,
    dispute: 85
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [

    {
      "technique_id": "Tiro_Giratorio",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Tri_Pegaso",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Fenix",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Pinguino_Emperador_n_2",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Occult
//Nathan Jones
{
  "_id": "Nathan_Jones_T1",
  "name": "Mask",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Mask.png"},
  "imageDetail": { "url": "/img/jugadoresID/mask.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Occult_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    power: 82,
    control: 80,
    technique: 88,
    pressure: 80,
    physique: 85,
    agility: 88,
    intelligence: 90,
    kicking: 78,
    defense: 88,
    dispute: 82
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Espiral_De_Distorsion",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Cuchilla_Asesina",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Russell Walk
{
  "_id": "Russell_Walk_T1",
  "name": "Styx",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Styx.png"},
  "imageDetail": { "url": "/img/jugadoresID/styx.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Occult_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    power: 86,
    control: 84,
    technique: 85,
    pressure: 86,
    physique: 87,
    agility: 84,
    intelligence: 82,
    kicking: 78,
    defense: 87,
    dispute: 84
  },

  "matchStats": {
    "stamina": 110,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Gravedad",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Jason Jones
{
  "_id": "Jason_Jones_T1",
  "name": "Creepy",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Creepy.png"},
  "imageDetail": { "url": "/img/jugadoresID/creepy.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Occult_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    power: 81,
    control: 83,
    technique: 86,
    pressure: 82,
    physique: 84,
    agility: 89,
    intelligence: 87,
    kicking: 76,
    defense: 86,
    dispute: 83
  },

  "matchStats": {
    "stamina": 110,
    "tension": 88
  },

  "techniques": [
    {
      "technique_id": "Doppelganger",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Ken Furan
{
  "_id": "Ken_Furan_T1",
  "name": "Franky",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Franky.png"},
  "imageDetail": { "url": "/img/jugadoresID/franky.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Occult_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    power: 87,
    control: 82,
    technique: 83,
    pressure: 87,
    physique: 88,
    agility: 82,
    intelligence: 80,
    kicking: 76,
    defense: 88,
    dispute: 86
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Terremoto",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Jerry Fulton
{
  "_id": "Jerry_Fulton_T1",
  "name": "Undead",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Undead.png"},
  "imageDetail": { "url": "/img/jugadoresID/undead.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Occult_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    power: 84,
    control: 80,
    technique: 82,
    pressure: 86,
    physique: 85,
    agility: 83,
    intelligence: 79,
    kicking: 75,
    defense: 86,
    dispute: 84
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Doppelganger",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Ray Mannings
{
  "_id": "Ray_Mannings_T1",
  "name": "Jiangshi",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Jiangshi.png"},
  "imageDetail": { "url": "/img/jugadoresID/jiangshi.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Occult_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    power: 81,
    control: 86,
    technique: 85,
    pressure: 84,
    physique: 82,
    agility: 87,
    intelligence: 84,
    kicking: 80,
    defense: 79,
    dispute: 82
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Gravedad",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Truco_De_Magia",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Robert Mayer
{
  "_id": "Robert_Mayer_T1",
  "name": "Mummy",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Mummy.png"},
  "imageDetail": { "url": "/img/jugadoresID/mummy.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Occult_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    power: 82,
    control: 84,
    technique: 83,
    pressure: 85,
    physique: 83,
    agility: 85,
    intelligence: 82,
    kicking: 81,
    defense: 80,
    dispute: 83
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Gravedad",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Niebla_Venenosa",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Telarana",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Alexander Brave
{
  "_id": "Alexander_Brave_T1",
  "name": "Grave",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Grave.png"},
  "imageDetail": { "url": "/img/jugadoresID/grave.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Occult_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    power: 83,
    control: 85,
    technique: 84,
    pressure: 86,
    physique: 84,
    agility: 88,
    intelligence: 83,
    kicking: 82,
    defense: 81,
    dispute: 85
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Maldicion",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Ataque_Sombrio",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Johan Tassman
{
  "_id": "Johan_Tassman_T1",
  "name": "Talisman",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Talisman.png"},
  "imageDetail": { "url": "/img/jugadoresID/talisman.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Occult_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    power: 86,
    control: 85,
    technique: 87,
    pressure: 85,
    physique: 82,
    agility: 88,
    intelligence: 89,
    kicking: 85,
    defense: 80,
    dispute: 85
  },

  "matchStats": {
    "stamina": 100,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Tiro_Fantasma",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Troy Moon
{
  "_id": "Troy_Moon_T1",
  "name": "Wolfy",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Wolfy.png"},
  "imageDetail": { "url": "/img/jugadoresID/wolfy.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Occult_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    power: 80,
    control: 83,
    technique: 84,
    pressure: 82,
    physique: 81,
    agility: 85,
    intelligence: 83,
    kicking: 84,
    defense: 78,
    dispute: 82
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Tiro_Fantasma",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Burt Wolf
{
  "_id": "Burt_Wolf_T1",
  "name": "Blood",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Blood.png"},
  "imageDetail": { "url": "/img/jugadoresID/blood.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Occult_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    power: 84,
    control: 81,
    technique: 82,
    pressure: 85,
    physique: 86,
    agility: 80,
    intelligence: 81,
    kicking: 82,
    defense: 82,
    dispute: 84
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Tiro_Fantasma",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Gravedad",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Wild
//Charlie Boardfield
{
  "_id": "Charlie_Boardfield_T1",
  "name": "Boar",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Boar.png"},
  "imageDetail": { "url": "/img/jugadoresID/boar.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Wild_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    power: 83,
    control: 81,
    technique: 85,
    pressure: 82,
    physique: 86,
    agility: 84,
    intelligence: 83,
    kicking: 79,
    defense: 87,
    dispute: 85
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Garra_Salvaje",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Despeje_de_Fuego",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Hugo Talgeese
{
  "_id": "Hugo_Talgeese_T1",
  "name": "Chicken",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Chicken.png"},
  "imageDetail": { "url": "/img/jugadoresID/chicken.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Wild_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    power: 86,
    control: 87,
    technique: 88,
    pressure: 88,
    physique: 85,
    agility: 89,
    intelligence: 86,
    kicking: 87,
    defense: 83,
    dispute: 87
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Aceleracion",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Tiro_Halcon",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Wilson Fishman
{
  "_id": "Wilson_Fishman_T1",
  "name": "Fishman",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Fishman.png"},
  "imageDetail": { "url": "/img/jugadoresID/fishman.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Wild_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    power: 82,
    control: 83,
    technique: 84,
    pressure: 81,
    physique: 83,
    agility: 85,
    intelligence: 82,
    kicking: 79,
    defense: 85,
    dispute: 83
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Robo_Veloz",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Peter Johnson
{
  "_id": "Peter_Johnson_T1",
  "name": "Toad",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Toad.png"},
  "imageDetail": { "url": "/img/jugadoresID/toad.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Wild_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    power: 83,
    control: 82,
    technique: 81,
    pressure: 80,
    physique: 84,
    agility: 83,
    intelligence: 82,
    kicking: 78,
    defense: 84,
    dispute: 82
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Balon_Falso",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Leonard O'Shea
{
  "_id": "Leonard_OShea_T1",
  "name": "Lion",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Lion.png"},
  "imageDetail": { "url": "/img/jugadoresID/lion.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Juego sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Wild_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 80,
    "control": 75,
    "technique": 78,
    "pressure": 85,
    "physique": 88,
    "agility": 70,
    "intelligence": 72,
    "kicking": 65,
    "defense": 86,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Superarmadillo",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Cham Lion
{
  "_id": "Cham_Lion_T1",
  "name": "Chameleon",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Chameleon.png"},
  "imageDetail": { "url": "/img/jugadoresID/chameleon.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Brecha",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Wild_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 78,
    "control": 84,
    "technique": 85,
    "pressure": 79,
    "physique": 76,
    "agility": 88,
    "intelligence": 81,
    "kicking": 72,
    "defense": 75,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 105,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Espejismo",
      "relation": "copia",
      "power_modifier": 0.3
    },

    {
      "technique_id": "Robo_Veloz",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Steve Eagle
{
  "_id": "Steve_Eagle_T1",
  "name": "Eagle",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Eagle.png"},
  "imageDetail": { "url": "/img/jugadoresID/eagle.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Wild_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 79,
    "control": 83,
    "technique": 86,
    "pressure": 77,
    "physique": 75,
    "agility": 90,
    "intelligence": 84,
    "kicking": 82,
    "defense": 70,
    "dispute": 78
  },

  "matchStats": {
    "stamina": 108,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Espejismo_De_Balon",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Tiro_Halcon",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Bruce Monkey
{
  "_id": "Bruce_Monkey_T1",
  "name": "Monkey",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Monkey.png"},
  "imageDetail": { "url": "/img/jugadoresID/monkey.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Wild_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 85,
    "control": 78,
    "technique": 76,
    "pressure": 82,
    "physique": 89,
    "agility": 84,
    "intelligence": 70,
    "kicking": 83,
    "defense": 72,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 112,
    "tension": 88
  },

  "techniques": [
    {
      "technique_id": "Remate_Tarzan",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Giro_de_Mono",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},

//Gary Lancaster
{
  "_id": "Gary_Lancaster_T1",
  "name": "Gorilla",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Gorilla.png"},
  "imageDetail": { "url": "/img/jugadoresID/gorilla.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Wild_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 88,
    "control": 76,
    "technique": 74,
    "pressure": 80,
    "physique": 92,
    "agility": 75,
    "intelligence": 72,
    "kicking": 87,
    "defense": 60,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Remate_Tarzan",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Superarmadillo",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Harry Snake
{
  "_id": "Harry_Snake_T1",
  "name": "Snake",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Snake.png"},
  "imageDetail": { "url": "/img/jugadoresID/snake.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Wild_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 82,
    "control": 85,
    "technique": 89,
    "pressure": 78,
    "physique": 74,
    "agility": 91,
    "intelligence": 86,
    "kicking": 88,
    "defense": 62,
    "dispute": 79
  },

  "matchStats": {
    "stamina": 105,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Remate_Serpiente",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Zig_Zag_Explosivo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Adrian Speed
{
  "_id": "Adrian_Speed_T1",
  "name": "Cheetah",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Cheetah.png"},
  "imageDetail": { "url": "/img/jugadoresID/cheetah.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Wild_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 80,
    "control": 79,
    "technique": 82,
    "pressure": 76,
    "physique": 80,
    "agility": 95,
    "intelligence": 78,
    "kicking": 90,
    "defense": 58,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 100,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Tiro_Dinamita",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Remate_Tarzan",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Aceleracion",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Brain
// Thomas Feldt
{
  "_id": "Thomas_Feldt_T1",
  "name": "Feldt",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Feldt.png"},
  "imageDetail": { "url": "/img/jugadoresID/feldt.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "B",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Brain_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 85,
    "control": 92,
    "technique": 88,
    "pressure": 90,
    "physique": 87,
    "agility": 80,
    "intelligence": 94,
    "kicking": 70,
    "defense": 95,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Despeje_Cohete",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Campo_de_Fuerza_Defensivo",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Harry Leading
{
  "_id": "Harry_Leading_T1",
  "name": "Leading",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Leading.png"},
  "imageDetail": { "url": "/img/jugadoresID/leading.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Brecha",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Brain_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 78,
    "control": 82,
    "technique": 90,
    "pressure": 84,
    "physique": 79,
    "agility": 81,
    "intelligence": 95,
    "kicking": 65,
    "defense": 88,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Escaner_Defensa",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Escaner_Ataque",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Terry Stronger
{
  "_id": "Terry_Stronger_T1",
  "name": "Stronger",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Stronger.png"},
  "imageDetail": { "url": "/img/jugadoresID/stronger.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Brain_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 82,
    "control": 75,
    "technique": 85,
    "pressure": 88,
    "physique": 90,
    "agility": 78,
    "intelligence": 92,
    "kicking": 68,
    "defense": 89,
    "dispute": 87
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Escaner_Defensa",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Escaner_Ataque",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Philip Marvel
{
  "_id": "Philip_Marvel_T1",
  "name": "Marvel",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Marvel.png"},
  "imageDetail": { "url": "/img/jugadoresID/marvel.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Brecha",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Brain_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 86,
    "control": 72,
    "technique": 84,
    "pressure": 85,
    "physique": 94,
    "agility": 70,
    "intelligence": 90,
    "kicking": 65,
    "defense": 92,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 118,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Escaner_Defensa",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Escaner_Ataque",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Noel Good
{
  "_id": "Noel_Good_T1",
  "name": "Good",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Good.png"},
  "imageDetail": { "url": "/img/jugadoresID/good.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Brain_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 80,
    "control": 78,
    "technique": 87,
    "pressure": 89,
    "physique": 85,
    "agility": 82,
    "intelligence": 93,
    "kicking": 60,
    "defense": 90,
    "dispute": 91
  },

  "matchStats": {
    "stamina": 112,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Escaner_Defensa",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Escaner_Ataque",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Tyron Rock
{
  "_id": "Tyron_Rock_T1",
  "name": "Rock",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Rock.png"},
  "imageDetail": { "url": "/img/jugadoresID/rock.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Brain_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 88,
    "control": 80,
    "technique": 85,
    "pressure": 82,
    "physique": 84,
    "agility": 81,
    "intelligence": 90,
    "kicking": 86,
    "defense": 75,
    "dispute": 83
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Escaner_Defensa",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Escaner_Ataque",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Remate_Misil",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Francis Tell
{
  "_id": "Francis_Tell_T1",
  "name": "Tell",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Tell.png"},
  "imageDetail": { "url": "/img/jugadoresID/tell.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Brain_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 79,
    "control": 86,
    "technique": 92,
    "pressure": 80,
    "physique": 77,
    "agility": 84,
    "intelligence": 96,
    "kicking": 74,
    "defense": 82,
    "dispute": 81
  },

  "matchStats": {
    "stamina": 108,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Escaner_Defensa",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Escaner_Ataque",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Samuel Buster
{
  "_id": "Samuel_Buster_T1",
  "name": "Busta",
  "sex": "M",
  "role": "player",
  
  "image": {"url": "/img/jugadores/Busta.png"},
  "imageDetail": { "url": "/img/jugadoresID/busta.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Brain_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 84,
    "control": 82,
    "technique": 88,
    "pressure": 81,
    "physique": 83,
    "agility": 80,
    "intelligence": 92,
    "kicking": 78,
    "defense": 79,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Escaner_Defensa",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Escaner_Ataque",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Jonathan Seller
{
  "_id": "Jonathan_Seller_T1",
  "name": "Seller",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Seller.png"},
  "imageDetail": { "url": "/img/jugadoresID/seller.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Brain_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 80,
    "control": 84,
    "technique": 88,
    "pressure": 82,
    "physique": 78,
    "agility": 92,
    "intelligence": 94,
    "kicking": 87,
    "defense": 65,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 105,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Escaner_Defensa",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Escaner_Ataque",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Tornado_De_Fuego",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Victor Kind
{
  "_id": "Victor_Kind_T1",
  "name": "Kind",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Kind.png"},
  "imageDetail": { "url": "/img/jugadoresID/kind.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Brain_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 77,
    "control": 88,
    "technique": 94,
    "pressure": 82,
    "physique": 75,
    "agility": 85,
    "intelligence": 97,
    "kicking": 76,
    "defense": 84,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Escaner_Defensa",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Escaner_Ataque",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Neil Turner
{
  "_id": "Neil_Turner_T1",
  "name": "Turner",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Turner.png"},
  "imageDetail": { "url": "/img/jugadoresID/turner.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Brain_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 86,
    "control": 84,
    "technique": 90,
    "pressure": 82,
    "physique": 85,
    "agility": 94,
    "intelligence": 92,
    "kicking": 95,
    "defense": 60,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 115,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Escaner_Defensa",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Escaner_Ataque",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Remate_Misil",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Tornado_De_Fuego",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Royal Academy
//Joseph King
{
  "_id": "Joseph_King_T1",
  "name": "King",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/King.png"},
  "imageDetail": { "url": "/img/jugadoresID/king.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 88,
    "control": 95,
    "technique": 92,
    "pressure": 96,
    "physique": 90,
    "agility": 84,
    "intelligence": 88,
    "kicking": 72,
    "defense": 94,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 125,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Escudo_de_Fuerza",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Escudo_de_Fuerza_Total",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Peter Drent
{
  "_id": "Peter_Drent_T1",
  "name": "Drent",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Drent.png"},
  "imageDetail": { "url": "/img/jugadoresID/drent.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 92,
    "control": 70,
    "technique": 78,
    "pressure": 88,
    "physique": 95,
    "agility": 68,
    "intelligence": 75,
    "kicking": 62,
    "defense": 90,
    "dispute": 93
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Sismo",
      "relation": "copia",
      "power_modifier": 0.5
    }
  ]
},


//Ben Simmons
{
  "_id": "Ben_Simmons_T1",
  "name": "Simmons",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Simmons.png"},
  "imageDetail": { "url": "/img/jugadoresID/simmons.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 82,
    "control": 75,
    "technique": 88,
    "pressure": 90,
    "physique": 85,
    "agility": 80,
    "intelligence": 84,
    "kicking": 60,
    "defense": 92,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Ciclon",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Alan Master
{
  "_id": "Alan_Master_T1",
  "name": "Master",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Master.png"},
  "imageDetail": { "url": "/img/jugadoresID/master.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "secondaryPosition": "DF",
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Brecha",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 75,
    "control": 86,
    "technique": 90,
    "pressure": 82,
    "physique": 78,
    "agility": 88,
    "intelligence": 91,
    "kicking": 70,
    "defense": 85,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Espejismo_De_Balon",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//  Gus Martin
{
  "_id": "Gus_Martin_T1",
  "name": "Martin",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Martin.png"},
  "imageDetail": { "url": "/img/jugadoresID/martin.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 84,
    "control": 68,
    "technique": 75,
    "pressure": 92,
    "physique": 91,
    "agility": 72,
    "intelligence": 78,
    "kicking": 65,
    "defense": 89,
    "dispute": 94
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//  Bobby Shearer
{
  "_id": "Bobby_Shearer_T1R",
  "name": "Bobby",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Bobby.png"},
  "imageDetail": { "url": "/img/jugadoresID/bobby_shearer.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 85,
    "control": 80,
    "technique": 88,
    "pressure": 85,
    "physique": 87,
    "agility": 90,
    "intelligence": 86,
    "kicking": 70,
    "defense": 92,
    "dispute": 89
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//  Herman Waldon
{
  "_id": "Herman_Waldon_T1",
  "name": "Waldon",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Waldon.png"},
  "imageDetail": { "url": "/img/jugadoresID/waldon.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 76,
    "control": 84,
    "technique": 89,
    "pressure": 85,
    "physique": 80,
    "agility": 86,
    "intelligence": 90,
    "kicking": 72,
    "defense": 82,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 112,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//  John Bloom
{
  "_id": "John_Bloom_T1",
  "name": "Bloom",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Bloom.png"},
  "imageDetail": { "url": "/img/jugadoresID/bloom.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 82,
    "control": 80,
    "technique": 85,
    "pressure": 84,
    "physique": 82,
    "agility": 88,
    "intelligence": 87,
    "kicking": 75,
    "defense": 80,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//  Derek Swing
{
  "_id": "Derek_Swing_T1",
  "name": "Swing",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Swing.png"},
  "imageDetail": { "url": "/img/jugadoresID/swing.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 13
    }
  ],

  "stats": {
    "power": 84,
    "control": 82,
    "technique": 86,
    "pressure": 80,
    "physique": 83,
    "agility": 90,
    "intelligence": 85,
    "kicking": 82,
    "defense": 70,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 112,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Triangulo_Letal",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//  Daniel Hatch
{
  "_id": "Daniel_Hatch_T1",
  "name": "Hatch",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Hatch.png"},
  "imageDetail": { "url": "/img/jugadoresID/hatch.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 88,
    "control": 82,
    "technique": 85,
    "pressure": 90,
    "physique": 86,
    "agility": 84,
    "intelligence": 80,
    "kicking": 92,
    "defense": 55,
    "dispute": 91
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Triangulo_Letal",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Chut_De_Los_100_Toques",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//  David Samford
{
  "_id": "David_Samford_T1",
  "name": "Samford",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Samford.png"},
  "imageDetail": { "url": "/img/jugadoresID/samford.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 85,
    "control": 88,
    "technique": 92,
    "pressure": 86,
    "physique": 82,
    "agility": 94,
    "intelligence": 88,
    "kicking": 90,
    "defense": 60,
    "dispute": 87
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Triangulo_Letal",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//  Jude Sharp
{
  "_id": "Jude_Sharp_T1R",
  "name": "Jude Sharp",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Jude.png"},
  "imageDetail": { "url": "/img/jugadoresID/jude_sharp.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 85,
    "control": 98,
    "technique": 99,
    "pressure": 92,
    "physique": 84,
    "agility": 90,
    "intelligence": 100,
    "kicking": 88,
    "defense": 82,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Espejismo_De_Balon",
      "relation": "creador",
      "power_modifier": 1.0
    },

    {
      "technique_id": "Pinguino_Emperador_n_2",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Shuriken
//Morgan Sanders
{
  "_id": "Morgan_Sanders_T1",
  "name": "Hood",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Hood.png"},
  "imageDetail": { "url": "/img/jugadoresID/hood.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Shuriken_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 78,
    "control": 92,
    "technique": 85,
    "pressure": 80,
    "physique": 84,
    "agility": 88,
    "intelligence": 82,
    "kicking": 60,
    "defense": 86,
    "dispute": 75
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Torbellino",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Newton Flust
{
  "_id": "Newton_Flust_T1",
  "name": "Crackshot",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Crackshot.png"},
  "imageDetail": { "url": "/img/jugadoresID/crackshot.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Shuriken_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 80,
    "control": 75,
    "technique": 84,
    "pressure": 82,
    "physique": 78,
    "agility": 92,
    "intelligence": 80,
    "kicking": 65,
    "defense": 88,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Regate_Multiple",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Ataque_Sombrio",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Jim Hillfort
{
  "_id": "Jim_Hillfort_T1",
  "name": "Hillfort",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Hillfort.png"},
  "imageDetail": { "url": "/img/jugadoresID/hillfort.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Shuriken_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 78,
    "control": 72,
    "technique": 80,
    "pressure": 85,
    "physique": 82,
    "agility": 90,
    "intelligence": 78,
    "kicking": 60,
    "defense": 86,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 112,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Ataque_Sombrio",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Galen Thumderbird
{
  "_id": "Galen_Thunderbird_T1",
  "name": "Thunder",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Thunder.png"},
  "imageDetail": { "url": "/img/jugadoresID/thunder.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Shuriken_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 92,
    "control": 65,
    "technique": 78,
    "pressure": 88,
    "physique": 95,
    "agility": 70,
    "intelligence": 75,
    "kicking": 62,
    "defense": 90,
    "dispute": 94
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Pisoton_de_Sumo",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Finn Stoned
{
  "_id": "Finn_Stoned_T1",
  "name": "Bandit",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Bandit.png"},
  "imageDetail": { "url": "/img/jugadoresID/bandit.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Shuriken_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 88,
    "control": 68,
    "technique": 75,
    "pressure": 85,
    "physique": 92,
    "agility": 75,
    "intelligence": 72,
    "kicking": 64,
    "defense": 89,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Pisoton_de_Sumo",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Phil Wingate
{
  "_id": "Phil_Wingate_T1",
  "name": "Code",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Code.png"},
  "imageDetail": { "url": "/img/jugadoresID/code.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Shuriken_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 78,
    "control": 82,
    "technique": 85,
    "pressure": 80,
    "physique": 84,
    "agility": 88,
    "intelligence": 86,
    "kicking": 70,
    "defense": 78,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 112,
    "tension": 80
  },

  "techniques": [
     {
      "technique_id": "Telarana",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Jez Shell
{
  "_id": "Jez_Shell_T1",
  "name": "Star",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Star.png"},
  "imageDetail": { "url": "/img/jugadoresID/star.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Shuriken_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 75,
    "control": 86,
    "technique": 88,
    "pressure": 78,
    "physique": 76,
    "agility": 94,
    "intelligence": 84,
    "kicking": 72,
    "defense": 70,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Regate_Multiple",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Espejismo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Jupiter Jumper
{
  "_id": "Jupiter_Jumper_T1",
  "name": "Cleats",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Cleats.png"},
  "imageDetail": { "url": "/img/jugadoresID/cleats.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Shuriken_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 74,
    "control": 88,
    "technique": 90,
    "pressure": 82,
    "physique": 75,
    "agility": 95,
    "intelligence": 85,
    "kicking": 70,
    "defense": 65,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Espejismo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Sam Samurai
{
  "_id": "Sam_Samurai_T1",
  "name": "Samurai",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Samurai.png"},
  "imageDetail": { "url": "/img/jugadoresID/samurai.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Shuriken_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 86,
    "control": 80,
    "technique": 84,
    "pressure": 88,
    "physique": 82,
    "agility": 92,
    "intelligence": 78,
    "kicking": 90,
    "defense": 50,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Bola_de_Tierra",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Hank Sullivan
{
  "_id": "Hank_Sullivan_T1",
  "name": "Hattori",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Hattori.png"},
  "imageDetail": { "url": "/img/jugadoresID/hattori.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Shuriken_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 77,
    "control": 84,
    "technique": 86,
    "pressure": 81,
    "physique": 80,
    "agility": 93,
    "intelligence": 87,
    "kicking": 75,
    "defense": 72,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 112,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Espejismo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Sail Bluesea
{
  "_id": "Sail_Bluesea_T1",
  "name": "Cloak",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Cloak.png"},
  "imageDetail": { "url": "/img/jugadoresID/cloak.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Brecha",
  "tier": "B",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Shuriken_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 85,
    "control": 86,
    "technique": 94,
    "pressure": 90,
    "physique": 82,
    "agility": 98,
    "intelligence": 92,
    "kicking": 94,
    "defense": 60,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Espejismo",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Bola_de_Tierra",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Imagen_Residual",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Kirkwood
//Jhon Neville
{
  "_id": "John_Neville_T1",
  "name": "Neville",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Neville.png"},
  "imageDetail": { "url": "/img/jugadoresID/neville.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Kirkwood_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 82,
    "control": 88,
    "technique": 84,
    "pressure": 80,
    "physique": 86,
    "agility": 75,
    "intelligence": 80,
    "kicking": 65,
    "defense": 90,
    "dispute": 78
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Bloqueo_Dureza",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Malclom 
{
  "_id": "Malcolm_Night_T1",
  "name": "Night",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Night.png"},
  "imageDetail": { "url": "/img/jugadoresID/night.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Kirkwood_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 88,
    "control": 82,
    "technique": 85,
    "pressure": 90,
    "physique": 86,
    "agility": 84,
    "intelligence": 85,
    "kicking": 70,
    "defense": 92,
    "dispute": 89
  },

  "matchStats": {
    "stamina": 118,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Corte_Giratorio",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Alfred Meenan
{
  "_id": "Alfred_Meenan_T1",
  "name": "Meenan",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Meenan.png"},
  "imageDetail": { "url": "/img/jugadoresID/meenan.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Kirkwood_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 76,
    "control": 74,
    "technique": 82,
    "pressure": 85,
    "physique": 78,
    "agility": 88,
    "intelligence": 80,
    "kicking": 60,
    "defense": 84,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Robo_Veloz",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Dan Mirthul
{
  "_id": "Dan_Mirthful_T1",
  "name": "Mirthful",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Mirthful.png"},
  "imageDetail": { "url": "/img/jugadoresID/mirthful.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Kirkwood_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 82,
    "control": 70,
    "technique": 85,
    "pressure": 88,
    "physique": 84,
    "agility": 80,
    "intelligence": 76,
    "kicking": 62,
    "defense": 87,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 114,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Corte_Giratorio",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Ricky Clover
{
  "_id": "Ricky_Clover_T1",
  "name": "Clover",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Clover.png"},
  "imageDetail": { "url": "/img/jugadoresID/clover.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Kirkwood_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 85,
    "control": 72,
    "technique": 78,
    "pressure": 84,
    "physique": 88,
    "agility": 74,
    "intelligence": 78,
    "kicking": 62,
    "defense": 86,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Giro_Bobina",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Toby Damian
{
  "_id": "Toby_Damian_T1",
  "name": "Damian",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Damian.png"},
  "imageDetail": { "url": "/img/jugadoresID/damian.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Kirkwood_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 75,
    "control": 82,
    "technique": 85,
    "pressure": 80,
    "physique": 78,
    "agility": 92,
    "intelligence": 84,
    "kicking": 70,
    "defense": 76,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [

  ]
},



//York Nashmith
{
  "_id": "York_Nashmith_T1",
  "name": "Nashmith",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Nashmith.png"},
  "imageDetail": { "url": "/img/jugadoresID/nashmith.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Kirkwood_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 74,
    "control": 86,
    "technique": 88,
    "pressure": 78,
    "physique": 80,
    "agility": 85,
    "intelligence": 82,
    "kicking": 72,
    "defense": 75,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 112,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Giro_de_Mono",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Zachary Moore
{
  "_id": "Zachary_Moore_T1",
  "name": "Moore",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Moore.png"},
  "imageDetail": { "url": "/img/jugadoresID/moore.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Kirkwood_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 72,
    "control": 84,
    "technique": 85,
    "pressure": 75,
    "physique": 78,
    "agility": 88,
    "intelligence": 80,
    "kicking": 74,
    "defense": 70,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": []
},


//Marvin Murdock
{
  "_id": "Marvin_Murdock_T1",
  "name": "Marvin",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Marvin.png"},
  "imageDetail": { "url": "/img/jugadoresID/marvin.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Kirkwood_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 85,
    "control": 82,
    "technique": 90,
    "pressure": 88,
    "physique": 80,
    "agility": 92,
    "intelligence": 85,
    "kicking": 95,
    "defense": 55,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Tornado_Inverso",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Triangulo_Z",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Thomas Murdock 
{
  "_id": "Thomas_Murdock_T1",
  "name": "Thomas",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Thomas.png"},
  "imageDetail": { "url": "/img/jugadoresID/thomas.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Kirkwood_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 80,
    "control": 84,
    "technique": 88,
    "pressure": 82,
    "physique": 78,
    "agility": 94,
    "intelligence": 80,
    "kicking": 88,
    "defense": 52,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Triangulo_Z",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},

//Tyler Murdock
{
  "_id": "Tyler_Murdock_T1",
  "name": "Tyler",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Tyler.png"},
  "imageDetail": { "url": "/img/jugadoresID/tyler.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Kirkwood_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 88,
    "control": 80,
    "technique": 85,
    "pressure": 84,
    "physique": 90,
    "agility": 82,
    "intelligence": 78,
    "kicking": 92,
    "defense": 58,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Triangulo_Z",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},




//Zeus
//Paul Siddon
{
  "_id": "Paul_Siddon_T1",
  "name": "Poseidon",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Poseidon.png"},
  "imageDetail": { "url": "/img/jugadoresID/poseidon.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Brecha",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Zeus_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 95,
    "control": 92,
    "technique": 88,
    "pressure": 94,
    "physique": 98,
    "agility": 70,
    "intelligence": 82,
    "kicking": 60,
    "defense": 96,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 130,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Muralla_Tsunami",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Muralla_Gigante",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Apollo Light
{
  "_id": "Apollo_Light_T1",
  "name": "Apollo",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Apollo.png"},
  "imageDetail": { "url": "/img/jugadoresID/apollo.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Zeus_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 82,
    "control": 85,
    "technique": 90,
    "pressure": 88,
    "physique": 84,
    "agility": 86,
    "intelligence": 88,
    "kicking": 78,
    "defense": 92,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Tiro_Cegador",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Entrada_Tormenta",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Jeff Iron
{
  "_id": "Jeff_Iron_T1",
  "name": "Hephestus",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Hephestus.png"},
  "imageDetail": { "url": "/img/jugadoresID/hephestus.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Zeus_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 90,
    "control": 78,
    "technique": 82,
    "pressure": 92,
    "physique": 94,
    "agility": 80,
    "intelligence": 75,
    "kicking": 70,
    "defense": 89,
    "dispute": 93
  },

  "matchStats": {
    "stamina": 125,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Entrada_Tormenta",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Lane War
{
  "_id": "Lane_War_T1",
  "name": "Ares",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Ares.png"},
  "imageDetail": { "url": "/img/jugadoresID/ares.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Zeus_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 92,
    "control": 75,
    "technique": 80,
    "pressure": 95,
    "physique": 96,
    "agility": 72,
    "intelligence": 78,
    "kicking": 65,
    "defense": 90,
    "dispute": 94
  },

  "matchStats": {
    "stamina": 122,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Gravedad",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Danny wood
{
  "_id": "Danny_Wood_T1",
  "name": "Dionysus",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Dionysus.png"},
  "imageDetail": { "url": "/img/jugadoresID/dionysus.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Zeus_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 84,
    "control": 82,
    "technique": 85,
    "pressure": 90,
    "physique": 88,
    "agility": 84,
    "intelligence": 86,
    "kicking": 68,
    "defense": 94,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 118,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Megaterremoto",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Artie Mishman
{
  "_id": "Artie_Mishman_T1",
  "name": "Artemis",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Artemis.png"},
  "imageDetail": { "url": "/img/jugadoresID/artemis.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Zeus_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 78,
    "control": 92,
    "technique": 95,
    "pressure": 82,
    "physique": 75,
    "agility": 96,
    "intelligence": 90,
    "kicking": 76,
    "defense": 70,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Hora_Celestial",
      "relation": "heredero",
      "power_modifier": 0.5
    },

    {
      "technique_id": "Espejismo_De_Balon",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//
{
  "_id": "Arion_Matlock_T1",
  "name": "Hermes",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Hermes.png"},
  "imageDetail": { "url": "/img/jugadoresID/hermes.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Zeus_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 76,
    "control": 88,
    "technique": 92,
    "pressure": 85,
    "physique": 74,
    "agility": 98,
    "intelligence": 84,
    "kicking": 80,
    "defense": 65,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Ciclon",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Wesley Knox
{
  "_id": "Wesley_Knox_T1",
  "name": "Athena",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Athena.png"},
  "imageDetail": { "url": "/img/jugadoresID/athena.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Zeus_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 75,
    "control": 90,
    "technique": 94,
    "pressure": 80,
    "physique": 72,
    "agility": 92,
    "intelligence": 95,
    "kicking": 72,
    "defense": 78,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 118,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Entrada_Tormenta",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//jonas Demetrius
{
  "_id": "Jonas_Demetrius_T1",
  "name": "Demeter",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Demeter.png"},
  "imageDetail": { "url": "/img/jugadoresID/demeter.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Zeus_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 85,
    "control": 80,
    "technique": 84,
    "pressure": 90,
    "physique": 88,
    "agility": 85,
    "intelligence": 78,
    "kicking": 92,
    "defense": 50,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 115,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Entrada_Tormenta",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Disparo_Con_Rebotes",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Byron love
{
  "_id": "Byron_Love_T1",
  "name": "Aphrodite",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Aphrodite.png"},
  "imageDetail": { "url": "/img/jugadoresID/byron_love.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Zeus_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 90,
    "control": 98,
    "technique": 99,
    "pressure": 95,
    "physique": 88,
    "agility": 96,
    "intelligence": 97,
    "kicking": 94,
    "defense": 65,
    "dispute": 92
  },

  "matchStats": {
    "stamina": 120,
    "tension": 100
  },

  "techniques": [
    {
      "technique_id": "Hora_Celestial",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Sabiduria_Divina",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Henry House
{
  "_id": "Henry_House_T1",
  "name": "Hera",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Hera.png"},
  "imageDetail": { "url": "/img/jugadoresID/hera.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Zeus_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 82,
    "control": 86,
    "technique": 90,
    "pressure": 84,
    "physique": 80,
    "agility": 94,
    "intelligence": 85,
    "kicking": 89,
    "defense": 62,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 118,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Flecha_Divina",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//La Ogre
//Lars Luceafar
{
  "_id": "Lars_Luceafar_T1",
  "name": "Luceafăr",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Luceafar.png"},
  "imageDetail": { "url": "/img/jugadoresID/luceafar.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"}, 
  "teams": [
    {
      "team_id": "Ogre_T1",
      "seasons": "Season_T1", 
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 98,
    "control": 95,
    "technique": 92,
    "pressure": 98,
    "physique": 99,
    "agility": 80,
    "intelligence": 85,
    "kicking": 70,
    "defense": 97,
    "dispute": 94
  },

  "matchStats": {
    "stamina": 150,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Martillo_Defensor",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Electrotrampa",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Voltaje_Dual",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Bump
{
  "_id": "Bump_Trungus_T1",
  "name": "Bump",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Bump.png"},
  "imageDetail": { "url": "/img/jugadoresID/bump.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Ogre_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 95,
    "control": 80,
    "technique": 88,
    "pressure": 96,
    "physique": 98,
    "agility": 75,
    "intelligence": 82,
    "kicking": 70,
    "defense": 95,
    "dispute": 96
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Voltaje_Dual",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},




//Lump
{
  "_id": "Lump_Trungus_T1",
  "name": "Lump",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Lump.png"},
  "imageDetail": { "url": "/img/jugadoresID/lump.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Ogre_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 92,
    "control": 82,
    "technique": 85,
    "pressure": 94,
    "physique": 99,
    "agility": 78,
    "intelligence": 80,
    "kicking": 65,
    "defense": 96,
    "dispute": 95
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Voltaje_Dual",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},




//Radd Ischer
{
  "_id": "Radd_Ischer_T1",
  "name": "Ischer",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Ischer.png"},
  "imageDetail": { "url": "/img/jugadoresID/ischer.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Ogre_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 88,
    "control": 75,
    "technique": 82,
    "pressure": 90,
    "physique": 92,
    "agility": 84,
    "intelligence": 78,
    "kicking": 60,
    "defense": 92,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Corte_Volcanico",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Jynx jenkins
{
  "_id": "Jynx_Jenkins_T1",
  "name": "Jenkins",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Jenkins.png"},
  "imageDetail": { "url": "/img/jugadoresID/jenkins.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Ogre_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 85,
    "control": 78,
    "technique": 84,
    "pressure": 88,
    "physique": 90,
    "agility": 86,
    "intelligence": 80,
    "kicking": 62,
    "defense": 91,
    "dispute": 89
  },

  "matchStats": {
    "stamina": 128,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Corte_Volcanico",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Oni Triumvir
{
  "_id": "Oni_Triumvir_T1",
  "name": "Triumvir",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Triumvir.png"},
  "imageDetail": { "url": "/img/jugadoresID/triumvir.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Ogre_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 85,
    "control": 88,
    "technique": 92,
    "pressure": 86,
    "physique": 84,
    "agility": 80,
    "intelligence": 90,
    "kicking": 75,
    "defense": 82,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 135,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Drachen Gunther
{
  "_id": "Drachen_Gunther_T1",
  "name": "Gunther",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Gunther.png"},
  "imageDetail": { "url": "/img/jugadoresID/gunther.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Ogre_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 88,
    "control": 82,
    "technique": 85,
    "pressure": 92,
    "physique": 94,
    "agility": 82,
    "intelligence": 80,
    "kicking": 70,
    "defense": 86,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 122,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Placaje_Extremo",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Ichabod Stark
{
  "_id": "Ichabod_Stark_T1",
  "name": "Stark",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Stark.png"},
  "imageDetail": { "url": "/img/jugadoresID/stark.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Ogre_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 90,
    "control": 84,
    "technique": 86,
    "pressure": 88,
    "physique": 95,
    "agility": 72,
    "intelligence": 82,
    "kicking": 74,
    "defense": 85,
    "dispute": 89
  },

  "matchStats": {
    "stamina": 118,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Ignicion",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Escavan Malice
{
  "_id": "Escavan_Malice_T1",
  "name": "Malice",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Malice.png"},
  "imageDetail": { "url": "/img/jugadoresID/malice.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Ogre_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 94,
    "control": 82,
    "technique": 88,
    "pressure": 95,
    "physique": 92,
    "agility": 88,
    "intelligence": 80,
    "kicking": 96,
    "defense": 45,
    "dispute": 92
  },

  "matchStats": {
    "stamina": 142,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Diluvio_Letal",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Remate_Letal",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Balon_Angelical",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//Lancer
{
  "_id": "Bash_Lancer_T1",
  "name": "Lancer",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Lancer.png"},
  "imageDetail": { "url": "/img/jugadoresID/lancer.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Ogre_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 99,
    "control": 92,
    "technique": 95,
    "pressure": 98,
    "physique": 96,
    "agility": 90,
    "intelligence": 94,
    "kicking": 99,
    "defense": 50,
    "dispute": 97
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Lanzada_Letal",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Remate_Letal",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Coz_3",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Mystral Callous
{
  "_id": "Mystral_Callous_T1",
  "name": "Callous",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Callous.png"},
  "imageDetail": { "url": "/img/jugadoresID/callous.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Ogre_T1",
      "seasons": "Season_T1",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 92,
    "control": 85,
    "technique": 94,
    "pressure": 90,
    "physique": 88,
    "agility": 95,
    "intelligence": 86,
    "kicking": 94,
    "defense": 48,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 140,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Lanzada_Letal",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Remate_Letal",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},





//Veteranos
//Hillman
{
  "_id": "Seymour_Hillman",
  "name": "Hillman",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Hillman.png"},
  "imageDetail": { "url": "/img/jugadoresID/hillman.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": true,
  "ageGroup": "Senior",
  "schoolGrade": "Retired",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Eleven_Veterans",
      "number": 1
    }
  ],

  "stats": {
    "power": 90,
    "control": 98,
    "technique": 99,
    "pressure": 92,
    "physique": 85,
    "agility": 70,
    "intelligence": 96,
    "kicking": 65,
    "defense": 94,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Mano_Celestial",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Pajaro_de_Fuego",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Charles Island
{
  "_id": "Charles_Island",
  "name": "Island",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Island.png"},
  "imageDetail": { "url": "/img/jugadoresID/island.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Senior",
  "schoolGrade": "Retired",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Eleven_Veterans",
      "number": 2
    }
  ],

  "stats": {
    "power": 82,
    "control": 75,
    "technique": 88,
    "pressure": 85,
    "physique": 80,
    "agility": 72,
    "intelligence": 90,
    "kicking": 60,
    "defense": 89,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 105,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Ciclon",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Garret Hairtown
{
  "_id": "Garret_Hairtown",
  "name": "Hairtown",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Hairtown.png"},
  "imageDetail": { "url": "/img/jugadoresID/hairtown.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Senior",
  "schoolGrade": "Retired",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Eleven_Veterans",
      "number": 3
    }
  ],

  "stats": {
    "power": 80,
    "control": 78,
    "technique": 85,
    "pressure": 84,
    "physique": 82,
    "agility": 88,
    "intelligence": 88,
    "kicking": 55,
    "defense": 87,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 100,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Corte_Giratorio",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},







//Arthur Sweet
{  
"_id": "Arthur_Sweet",
  "name": "Sweet",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Sweet.png"},
  "imageDetail": { "url": "/img/jugadoresID/sweet.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Senior",
  "schoolGrade": "Retired",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Eleven_Veterans",
      "number": 4
    }
  ],

  "stats": {
    "power": 85,
    "control": 72,
    "technique": 80,
    "pressure": 88,
    "physique": 92,
    "agility": 65,
    "intelligence": 85,
    "kicking": 58,
    "defense": 90,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Ciclon",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Peter Mildred
{
  "_id": "Peter_Mildred",
  "name": "Butler",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Butler.png"},
  "imageDetail": { "url": "/img/jugadoresID/butler.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Senior",
  "schoolGrade": "Retired",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Eleven_Veterans",
      "number": 5
    }
  ],

  "stats": {
    "power": 80,
    "control": 85,
    "technique": 84,
    "pressure": 82,
    "physique": 78,
    "agility": 80,
    "intelligence": 88,
    "kicking": 75,
    "defense": 70,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Chut_Granada",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},







//
{
  "_id": "Josh_Nathaniel",
  "name": "Nathaniel",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Nathaniel.png"},
  "imageDetail": { "url": "/img/jugadoresID/nathaniel.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Senior",
  "schoolGrade": "Retired",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Eleven_Veterans",
      "number": 6
    }
  ],

  "stats": {
    "power": 78,
    "control": 82,
    "technique": 80,
    "pressure": 85,
    "physique": 75,
    "agility": 84,
    "intelligence": 82,
    "kicking": 70,
    "defense": 65,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 105,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "ZigZag_Explosivo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Edward Gladstone
{
  "_id": "Edward_Gladstone",
  "name": "Gladstone",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Gladstone.png"},
  "imageDetail": { "url": "/img/jugadoresID/gladstone.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Senior",
  "schoolGrade": "Retired",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Eleven_Veterans",
      "number": 7
    }
  ],

  "stats": {
    "power": 84,
    "control": 80,
    "technique": 82,
    "pressure": 90,
    "physique": 86,
    "agility": 75,
    "intelligence": 85,
    "kicking": 72,
    "defense": 78,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Corte_Giratorio",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},






//Tyler thomas
{
  "_id": "Tyler_Thomas",
  "name": "Tailor",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Tailor.png"},
  "imageDetail": { "url": "/img/jugadoresID/tailor.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Senior",
  "schoolGrade": "Retired",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Eleven_Veterans",
      "number": 8
    }
  ],

  "stats": {
    "power": 86,
    "control": 84,
    "technique": 88,
    "pressure": 85,
    "physique": 82,
    "agility": 70,
    "intelligence": 92,
    "kicking": 70,
    "defense": 75,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 112,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Espejismo_De_Balon",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Joshep Yosemite
{
  "_id": "Joseph_Yosemite",
  "name": "Barista",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Barista.png"},
  "imageDetail": { "url": "/img/jugadoresID/barista.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Senior",
  "schoolGrade": "Retired",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Eleven_Veterans",
      "number": 9
    }
  ],

  "stats": {
    "power": 95,
    "control": 75,
    "technique": 82,
    "pressure": 88,
    "physique": 98,
    "agility": 80,
    "intelligence": 78,
    "kicking": 92,
    "defense": 40,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Trampolin_Relampago",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Ian Suffolk
{
  "_id": "Ian_Suffolk",
  "name": "Suffolk",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Suffolk.png"},
  "imageDetail": { "url": "/img/jugadoresID/suffolk.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Senior",
  "schoolGrade": "Retired",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Eleven_Veterans",
      "number": 10
    }
  ],

  "stats": {
    "power": 82,
    "control": 80,
    "technique": 84,
    "pressure": 88,
    "physique": 85,
    "agility": 78,
    "intelligence": 86,
    "kicking": 76,
    "defense": 82,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Trampolin_Relampago",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},






//Constant Builder
{
  "_id": "Constant_Builder",
  "name": "Builder",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Builder.png"},
  "imageDetail": { "url": "/img/jugadoresID/builder.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Senior",
  "schoolGrade": "Retired",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Eleven_Veterans",
      "number": 11
    }
  ],

  "stats": {
    "power": 96,
    "control": 78,
    "technique": 80,
    "pressure": 92,
    "physique": 95,
    "agility": 74,
    "intelligence": 80,
    "kicking": 94,
    "defense": 42,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 118,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Entrada_de_Llamas",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Pajaro_de_Fuego",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},






//Alpine
//Adam Ropes
{
  "_id": "Adam_Ropes_T2",
  "name": "Ropes",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Ropes.png"},
  "imageDetail": { "url": "/img/jugadoresID/ropes.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Alpine_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 78,
    "control": 88,
    "technique": 85,
    "pressure": 82,
    "physique": 80,
    "agility": 72,
    "intelligence": 78,
    "kicking": 50,
    "defense": 86,
    "dispute": 75
  },

  "matchStats": {
    "stamina": 125,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Cortina_Aurora",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//Joaquine Downtown
{
  "_id": "Joaquine_Downtown_T2",
  "name": "Downtown",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Downtown.png"},
  "imageDetail": { "url": "/img/jugadoresID/downtown.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Alpine_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 75,
    "control": 80,
    "technique": 82,
    "pressure": 85,
    "physique": 78,
    "agility": 84,
    "intelligence": 80,
    "kicking": 70,
    "defense": 86,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Olor_Embriagador",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Arcoiris_Luminoso",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Milton Bindings
{
  "_id": "Milton_Bindings_T2",
  "name": "Bindings",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Bindings.png"},
  "imageDetail": { "url": "/img/jugadoresID/bindings.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Alpine_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 72,
    "control": 70,
    "technique": 78,
    "pressure": 88,
    "physique": 80,
    "agility": 85,
    "intelligence": 75,
    "kicking": 50,
    "defense": 82,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Gravedad",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Spike Gleeson
{
  "_id": "Spike_Gleeson_T2",
  "name": "Gleeson",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Gleeson.png"},
  "imageDetail": { "url": "/img/jugadoresID/gleeson.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Alpine_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 70,
    "control": 72,
    "technique": 80,
    "pressure": 75,
    "physique": 78,
    "agility": 82,
    "intelligence": 70,
    "kicking": 55,
    "defense": 84,
    "dispute": 78
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Corte_Giratorio",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Regate_Aurora",
      "relation": "heredero",
      "power_modifier": 1.0
    }
  ]
},






//Sean Snowfield
{
  "_id": "Sean_Snowfield_T2",
  "name": "Snowfield",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Snowfield.png"},
  "imageDetail": { "url": "/img/jugadoresID/snowfield.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Alpine_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 78,
    "control": 74,
    "technique": 76,
    "pressure": 85,
    "physique": 88,
    "agility": 62,
    "intelligence": 70,
    "kicking": 65,
    "defense": 78,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 115,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Megaterremoto",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Kerry Bootgaiter
{
  "_id": "Kerry_Bootgaiter_T2",
  "name": "Bootgaiter",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Bootgaiter.png"},
  "imageDetail": { "url": "/img/jugadoresID/bootgaiter.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Alpine_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 68,
    "control": 82,
    "technique": 85,
    "pressure": 72,
    "physique": 70,
    "agility": 88,
    "intelligence": 84,
    "kicking": 62,
    "defense": 65,
    "dispute": 74
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Regate_Espejismo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Maddox Rock
{
  "_id": "Maddox_Rock_T2",
  "name": "Maddox",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Maddox.png"},
  "imageDetail": { "url": "/img/jugadoresID/maddox.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Alpine_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 75,
    "control": 72,
    "technique": 70,
    "pressure": 82,
    "physique": 85,
    "agility": 68,
    "intelligence": 74,
    "kicking": 60,
    "defense": 68,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 112,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Regate_Espejismo",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Pared_Solitaria",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Robert Skipolson
{
  "_id": "Robert_Skipolson_T2",
  "name": "Skipolson",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Skipolson.png"},
  "imageDetail": { "url": "/img/jugadoresID/skipolson.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Alpine_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 70,
    "control": 78,
    "technique": 82,
    "pressure": 85,
    "physique": 74,
    "agility": 76,
    "intelligence": 80,
    "kicking": 65,
    "defense": 68,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 110,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Regate_Espejismo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Roland Climbstein
{
  "_id": "Roland_Climbstein_T2",
  "name": "Climbstein",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Climbstein.png"},
  "imageDetail": { "url": "/img/jugadoresID/climbstein.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Alpine_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 74,
    "control": 76,
    "technique": 80,
    "pressure": 85,
    "physique": 78,
    "agility": 82,
    "intelligence": 75,
    "kicking": 68,
    "defense": 72,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 112,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Paisaje_Helado",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Chut_Congelante",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},






//Quentin Rackner
{
  "_id": "Quentin_Rackner_T2",
  "name": "Rackner",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Rackner.png"},
  "imageDetail": { "url": "/img/jugadoresID/rackner.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "B",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Alpine_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 88,
    "control": 70,
    "technique": 72,
    "pressure": 85,
    "physique": 82,
    "agility": 74,
    "intelligence": 68,
    "kicking": 90,
    "defense": 40,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 110,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Chut_Congelante",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},




//Shawn Froste
{
  "_id": "Shawn_Froste_Al",
  "name": "Shawn Froste",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Shawn_Froste.png"},
  "imageDetail": { "url": "/img/jugadoresID/shawn_froste_al.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "secondaryPosition": "DF",
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Alpine_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 92,
    "control": 95,
    "technique": 98,
    "pressure": 90,
    "physique": 88,
    "agility": 99,
    "intelligence": 94,
    "kicking": 96,
    "defense": 92,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 140,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Ventisca_Eterna",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//Tormenta de geminis
//Gordon Star
{
  "_id": "Gordon_Star_T2",
  "name": "Galileo",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Galileo.png"},
  "imageDetail": { "url": "/img/jugadoresID/galileo.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Tormenta_de_Geminis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 85,
    "control": 92,
    "technique": 88,
    "pressure": 90,
    "physique": 82,
    "agility": 75,
    "intelligence": 80,
    "kicking": 50,
    "defense": 94,
    "dispute": 78
  },

  "matchStats": {
    "stamina": 130,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Agujero_Negro",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Connor Shuttle
{
  "_id": "Connor_Shuttle_T2",
  "name": "Coral",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Coral.png"},
  "imageDetail": { "url": "/img/jugadoresID/coral.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Tormenta_de_Geminis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 82,
    "control": 75,
    "technique": 80,
    "pressure": 88,
    "physique": 78,
    "agility": 92,
    "intelligence": 76,
    "kicking": 50,
    "defense": 88,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Cinto_Astral",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},







//Jim Landing
{
  "_id": "Jim_Landing_T2",
  "name": "Gigs",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Gigs.png"},
  "imageDetail": { "url": "/img/jugadoresID/gigs.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Tormenta_de_Geminis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 90,
    "control": 70,
    "technique": 75,
    "pressure": 92,
    "physique": 95,
    "agility": 65,
    "intelligence": 72,
    "kicking": 50,
    "defense": 90,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 125,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Grant Icewater
{
  "_id": "Grant_Icewater_T2",
  "name": "Ganymede",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Ganymede.png"},
  "imageDetail": { "url": "/img/jugadoresID/ganymede.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Tormenta_de_Geminis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 92,
    "control": 68,
    "technique": 72,
    "pressure": 90,
    "physique": 94,
    "agility": 60,
    "intelligence": 70,
    "kicking": 50,
    "defense": 92,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 128,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Charles Riverboat
{
  "_id": "Charles_Riverboat_T2",
  "name": "Charon",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Charon.png"},
  "imageDetail": { "url": "/img/jugadoresID/charon.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Brecha",
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Tormenta_de_Geminis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 84,
    "control": 72,
    "technique": 78,
    "pressure": 90,
    "physique": 82,
    "agility": 88,
    "intelligence": 75,
    "kicking": 50,
    "defense": 86,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 118,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Ciclon",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Flash_de_Fotones",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Pat Box
{
  "_id": "Pat_Box_T2",
  "name": "Pandora",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Pandora.png"},
  "imageDetail": { "url": "/img/jugadoresID/pandora.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Tormenta_de_Geminis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 78,
    "control": 85,
    "technique": 88,
    "pressure": 82,
    "physique": 75,
    "agility": 90,
    "intelligence": 86,
    "kicking": 60,
    "defense": 78,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 115,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Gregory Saturn
{
  "_id": "Gregory_Saturn_T2",
  "name": "Grengo",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Grengo.png"},
  "imageDetail": { "url": "/img/jugadoresID/grengo.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Tormenta_de_Geminis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 85,
    "control": 80,
    "technique": 78,
    "pressure": 84,
    "physique": 88,
    "agility": 70,
    "intelligence": 82,
    "kicking": 65,
    "defense": 80,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Izzy Jupiter
{
  "_id": "Izzy_Jupiter_T2",
  "name": "Io",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Io.png"},
  "imageDetail": { "url": "/img/jugadoresID/io.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Tormenta_de_Geminis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 82,
    "control": 86,
    "technique": 84,
    "pressure": 80,
    "physique": 80,
    "agility": 88,
    "intelligence": 82,
    "kicking": 70,
    "defense": 75,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 118,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Rhona Countdown
{
  "_id": "Rhona_Countdown_T2",
  "name": "Rihm",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Rihm.png"},
  "imageDetail": { "url": "/img/jugadoresID/rihm.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Tormenta_de_Geminis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 85,
    "control": 78,
    "technique": 82,
    "pressure": 88,
    "physique": 80,
    "agility": 86,
    "intelligence": 84,
    "kicking": 92,
    "defense": 45,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Disparo_Cosmico",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},




//Jordan Greenway
{
  "_id": "Jordan_Greenway_T2",
  "name": "Janus",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Janus.png"},
  "imageDetail": { "url": "/img/jugadoresID/janus.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Tormenta_de_Geminis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 90,
    "control": 96,
    "technique": 98,
    "pressure": 94,
    "physique": 85,
    "agility": 95,
    "intelligence": 98,
    "kicking": 92,
    "defense": 70,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 145,
    "tension": 115
  },

  "techniques": [
    {
      "technique_id": "Astro_Remate",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Disparo_Cosmico",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Dylan Bluemoon
{
  "_id": "Dylan_Bluemoon_T2",
  "name": "Diam",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Diam.png"},
  "imageDetail": { "url": "/img/jugadoresID/diam.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Tormenta_de_Geminis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 94,
    "control": 72,
    "technique": 75,
    "pressure": 88,
    "physique": 85,
    "agility": 80,
    "intelligence": 70,
    "kicking": 95,
    "defense": 42,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 122,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Astro_Remate",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Cinto_Astral",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},






//Epsilon
//Dave Quagmire
{
  "_id": "Dave_Quagmire_T2",
  "name": "Dvalin",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Dvalin.png"},
  "imageDetail": { "url": "/img/jugadoresID/dvalin.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "secondaryPosition": "FW",
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Epsilon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 95,
    "control": 98,
    "technique": 99,
    "pressure": 96,
    "physique": 94,
    "agility": 90,
    "intelligence": 95,
    "kicking": 92,
    "defense": 98,
    "dispute": 92
  },

  "matchStats": {
    "stamina": 150,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Agujero_de_Gusano",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Destroza_Taladros",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Lanza_de_Odin",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},







//Craven Kenville
{
  "_id": "Craven_Kenville_T2",
  "name": "Kenville",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Kenville.png"},
  "imageDetail": { "url": "/img/jugadoresID/kenville.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Epsilon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 88,
    "control": 70,
    "technique": 82,
    "pressure": 92,
    "physique": 85,
    "agility": 88,
    "intelligence": 78,
    "kicking": 55,
    "defense": 90,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 130,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Cinto_Astral",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Flash_de_Fotones",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Anna Mole
{
  "_id": "Anna_Mole_T2",
  "name": "Mole",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Mole.png"},
  "imageDetail": { "url": "/img/jugadoresID/mole.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Epsilon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 86,
    "control": 74,
    "technique": 80,
    "pressure": 94,
    "physique": 82,
    "agility": 85,
    "intelligence": 88,
    "kicking": 50,
    "defense": 92,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 125,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Flash_de_Fotones",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Lluvia_de_Meteoros",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Kayson Wattever
{
  "_id": "Kayson_Wattever_T2",
  "name": "Kayson",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Kayson.png"},
  "imageDetail": { "url": "/img/jugadoresID/kayson.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Epsilon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 90,
    "control": 72,
    "technique": 78,
    "pressure": 95,
    "physique": 88,
    "agility": 84,
    "intelligence": 75,
    "kicking": 50,
    "defense": 94,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 132,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Cinto_Astral",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Chris Tytan
{
  "_id": "Chris_Tytan_T2",
  "name": "Tytan",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Tytan.png"},
  "imageDetail": { "url": "/img/jugadoresID/tytan.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Epsilon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 92,
    "control": 65,
    "technique": 70,
    "pressure": 96,
    "physique": 98,
    "agility": 62,
    "intelligence": 78,
    "kicking": 50,
    "defense": 95,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 135,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Sismo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Mads Hatter
{
  "_id": "Mads_Hatter_T2",
  "name": "Fedora",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Fedora.png"},
  "imageDetail": { "url": "/img/jugadoresID/fedora.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Epsilon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 84,
    "control": 88,
    "technique": 85,
    "pressure": 82,
    "physique": 78,
    "agility": 92,
    "intelligence": 86,
    "kicking": 65,
    "defense": 78,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 128,
    "tension": 100
  },

  "techniques": [
    {
      "technique_id": "Lluvia_de_Meteoros",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Flash_de_Fotones",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},






//Karen Ripton
{
  "_id": "Karen_Ripton_T2",
  "name": "Krypto",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Krypto.png"},
  "imageDetail": { "url": "/img/jugadoresID/krypto.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Epsilon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 80,
    "control": 92,
    "technique": 90,
    "pressure": 84,
    "physique": 76,
    "agility": 94,
    "intelligence": 88,
    "kicking": 78,
    "defense": 70,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 125,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Lluvia_de_Meteoros",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Astro_Remate",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Yakker Plantsworm
{
  "_id": "Yakker_Plantsworm_T2",
  "name": "Sworm",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Sworm.png"},
  "imageDetail": { "url": "/img/jugadoresID/sworm.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Epsilon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 85,
    "control": 82,
    "technique": 80,
    "pressure": 88,
    "physique": 84,
    "agility": 86,
    "intelligence": 82,
    "kicking": 70,
    "defense": 80,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 130,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Lluvia_de_Meteoros",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Flash_de_Fotones",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Carrie McCuring
{
  "_id": "Carrie_McCuring_T2",
  "name": "Mercury",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Mercury.png"},
  "imageDetail": { "url": "/img/jugadoresID/mercury.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "secondaryPosition": "MD",
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Epsilon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 82,
    "control": 90,
    "technique": 92,
    "pressure": 85,
    "physique": 78,
    "agility": 95,
    "intelligence": 90,
    "kicking": 88,
    "defense": 60,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 130,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Lluvia_de_Meteoros",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Remate_Gaia",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},






//Ronny Metcalf
{
  "_id": "Ronny_Metcalf_T2",
  "name": "Metron",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Metron.png"},
  "imageDetail": { "url": "/img/jugadoresID/metron.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Epsilon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 85,
    "control": 92,
    "technique": 94,
    "pressure": 82,
    "physique": 80,
    "agility": 96,
    "intelligence": 92,
    "kicking": 84,
    "defense": 65,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 135,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Lluvia_de_Meteoros",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Remate_Gaia",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},




//Zeke Valanche
{
  "_id": "Zeke_Valanche_T2",
  "name": "Zell",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Zell.png"},
  "imageDetail": { "url": "/img/jugadoresID/zell.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Epsilon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 92,
    "control": 88,
    "technique": 95,
    "pressure": 90,
    "physique": 86,
    "agility": 92,
    "intelligence": 84,
    "kicking": 96,
    "defense": 45,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 140,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Remate_Gaia",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Rayo_de_Ganimedes",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Royal Academy Redux
//Joseph King
{
  "_id": "Joseph_King_RX",
  "name": "King",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/joseph_king_rx.png"},
  "imageDetail": { "url": "/img/jugadoresID/joseph_king_rx.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_RX",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 96,
    "control": 95,
    "technique": 98,
    "pressure": 92,
    "physique": 94,
    "agility": 88,
    "intelligence": 90,
    "kicking": 70,
    "defense": 99,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 140,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Escudo_de_Fuerza_Total",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Colmillo_de_Pantera",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Destroza_Taladros",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},






//Rowan Beltzer
{
  "_id": "Rowan_Beltzer_RX",
  "name": "Beltzer",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Beltzer_rx.png"},
  "imageDetail": { "url": "/img/jugadoresID/beltzer_rx.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_RX",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 90,
    "control": 68,
    "technique": 72,
    "pressure": 94,
    "physique": 96,
    "agility": 75,
    "intelligence": 70,
    "kicking": 55,
    "defense": 92,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 138,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Ciclon",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},







//Blade Healen
{
  "_id": "Blade_Healen_RX",
  "name": "Healen",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Healen_RX.png"},
  "imageDetail": { "url": "/img/jugadoresID/healen_rx.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_RX",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 94,
    "control": 65,
    "technique": 70,
    "pressure": 95,
    "physique": 98,
    "agility": 60,
    "intelligence": 72,
    "kicking": 50,
    "defense": 94,
    "dispute": 92
  },

  "matchStats": {
    "stamina": 142,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Barrido_defensivo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Argie Bargie
{
  "_id": "Argie_Bargie_RX",
  "name": "Bargie",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Bargie_RX.png"},
  "imageDetail": { "url": "/img/jugadoresID/bargie_rx.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_RX",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 92,
    "control": 62,
    "technique": 68,
    "pressure": 96,
    "physique": 95,
    "agility": 72,
    "intelligence": 74,
    "kicking": 50,
    "defense": 93,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 140,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Barrido_defensivo",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Megaterremoto",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Lee Bamboo
{
  "_id": "Lee_Bamboo_RX",
  "name": "Bamboo",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Bamboo_RX.png"},
  "imageDetail": { "url": "/img/jugadoresID/bamboo_rx.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_RX",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 84,
    "control": 72,
    "technique": 80,
    "pressure": 90,
    "physique": 82,
    "agility": 94,
    "intelligence": 78,
    "kicking": 55,
    "defense": 88,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 130,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Corte_Giratorio",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Barrido_defensivo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Eton Messer
{
  "_id": "Eton_Messer_RX",
  "name": "Messer",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Messer_RX.png"},
  "imageDetail": { "url": "/img/jugadoresID/messer_rx.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_RX",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 82,
    "control": 88,
    "technique": 85,
    "pressure": 86,
    "physique": 80,
    "agility": 84,
    "intelligence": 88,
    "kicking": 72,
    "defense": 78,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 132,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Barrido_defensivo",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Chut_De_Los_100_Toques",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Jonah Spark
{
  "_id": "Jonah_Spark_RX",
  "name": "Spark",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Spark_RX.png"},
  "imageDetail": { "url": "/img/jugadoresID/spark_rx.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_RX",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 80,
    "control": 85,
    "technique": 82,
    "pressure": 88,
    "physique": 90,
    "agility": 74,
    "intelligence": 80,
    "kicking": 65,
    "defense": 82,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 135,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Espejismo_De_Balon",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Gravedad",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Sue Sparrow
{
  "_id": "Sue_Sparrow_RX",
  "name": "Sparrow",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Sparrow_RX.png"},
  "imageDetail": { "url": "/img/jugadoresID/sparrow_rx.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_RX",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 78,
    "control": 90,
    "technique": 88,
    "pressure": 82,
    "physique": 75,
    "agility": 96,
    "intelligence": 85,
    "kicking": 70,
    "defense": 76,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 128,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Tornado_Inverso",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Ciclon",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},







//Riley Jamm
{
  "_id": "Riley_Jamm_RX",
  "name": "Jamm",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Jamm_RX.png"},
  "imageDetail": { "url": "/img/jugadoresID/jamm_rx.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_RX",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 88,
    "control": 82,
    "technique": 84,
    "pressure": 85,
    "physique": 92,
    "agility": 80,
    "intelligence": 78,
    "kicking": 90,
    "defense": 40,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 135,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Chut_De_Los_100_Toques",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Remate_Triple",
      "relation": "heredero",
      "power_modifier": 0.5
    },
  ]
},





//Caleb Stonewall
{
  "_id": "Caleb_Stonewall_RX",
  "name": "Caleb",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Caleb_RX.png"},
  "imageDetail": { "url": "/img/jugadoresID/caleb_rx.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "S",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_RX",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 125,
    "control": 120,
    "technique": 125,
    "pressure": 125,
    "physique": 130,
    "agility": 120,
    "intelligence": 110,
    "kicking": 110,
    "defense": 120,
    "dispute": 120
  },

  "matchStats": {
    "stamina": 125,
    "tension": 100
  },

  "techniques": [
    {
      "technique_id": "Emboscada_Defensiva",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Coz",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Remate_Triple",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Barrido_defensivo",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},




//David Samford
{
  "_id": "David_Samford_RX",
  "name": "Samford",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Samford_RX.png"},
  "imageDetail": { "url": "/img/jugadoresID/samford_rx.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Royal_Academy_RX",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 120,
    "control": 120,
    "technique": 125,
    "pressure": 120,
    "physique": 130,
    "agility": 120,
    "intelligence": 110,
    "kicking": 115,
    "defense": 115,
    "dispute": 120
  },

  "matchStats": {
    "stamina": 125,
    "tension": 100
  },

  "techniques": [
    {
      "technique_id": "Pinguino_Emperador_n_1",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Remate_Triple",
      "relation": "heredero",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Barrido_defensivo",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Diamond
//Ben North
{
  "_id": "Ben_North_D",
  "name": "Beluga",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Beluga.png"},
  "imageDetail": { "url": "/img/jugadoresID/beluga.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Diamond",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 88,
    "control": 85,
    "technique": 82,
    "pressure": 90,
    "physique": 92,
    "agility": 70,
    "intelligence": 75,
    "kicking": 60,
    "defense": 94,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 135,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Bloqueo_de_Hielo",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Alan Downhill
{
  "_id": "Alan_Downhill_D",
  "name": "Arkew",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Arkew.png"},
  "imageDetail": { "url": "/img/jugadoresID/arkew.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Diamond",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 82,
    "control": 70,
    "technique": 75,
    "pressure": 92,
    "physique": 85,
    "agility": 94,
    "intelligence": 72,
    "kicking": 50,
    "defense": 90,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 130,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Rompe_Hielos",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},




//Claire Lesnow
{
  "_id": "Claire_Lesnow_D",
  "name": "Clear",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Clear.png"},
  "imageDetail": { "url": "/img/jugadoresID/clear.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Diamond",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 80,
    "control": 75,
    "technique": 78,
    "pressure": 94,
    "physique": 82,
    "agility": 90,
    "intelligence": 76,
    "kicking": 50,
    "defense": 92,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 132,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Flash_de_Fotones",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Pantalla_Acuatica",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Albert Denver
{
  "_id": "Albert_Denver_D",
  "name": "Gocker",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Gocker.png"},
  "imageDetail": { "url": "/img/jugadoresID/gocker.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Diamond",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 94,
    "control": 60,
    "technique": 65,
    "pressure": 96,
    "physique": 98,
    "agility": 58,
    "intelligence": 70,
    "kicking": 50,
    "defense": 95,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 140,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Rompe_Hielos",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Pisoton_de_Sumo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},







//Lucy Hailstone
{
  "_id": "Lucy_Hailstone_D",
  "name": "Icer",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Icer.png"},
  "imageDetail": { "url": "/img/jugadoresID/icer.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Diamond",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 76,
    "control": 88,
    "technique": 85,
    "pressure": 80,
    "physique": 78,
    "agility": 95,
    "intelligence": 84,
    "kicking": 65,
    "defense": 82,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 130,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Rompe_Hielos",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Regate_Aurora",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},






//Brad Coldwater
{
  "_id": "Brad_Coldwater_D",
  "name": "Balen",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Balen.png"},
  "imageDetail": { "url": "/img/jugadoresID/balen.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Diamond",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 85,
    "control": 82,
    "technique": 80,
    "pressure": 88,
    "physique": 92,
    "agility": 75,
    "intelligence": 78,
    "kicking": 60,
    "defense": 84,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 134,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Pantalla_Acuatica",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Corte_Giratorio",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Dawson Foxx
{
  "_id": "Dawson_Foxx_D",
  "name": "Droll",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Droll.png"},
  "imageDetail": { "url": "/img/jugadoresID/droll.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Diamond",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 78,
    "control": 84,
    "technique": 86,
    "pressure": 90,
    "physique": 75,
    "agility": 92,
    "intelligence": 82,
    "kicking": 62,
    "defense": 85,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 128,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Robo_Veloz",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Pantalla_Acuatica",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Ving Rice
{
  "_id": "Ving_Rice_D",
  "name": "Rhine",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Rhine.png"},
  "imageDetail": { "url": "/img/jugadoresID/rhine.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Diamond",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 75,
    "control": 86,
    "technique": 88,
    "pressure": 82,
    "physique": 77,
    "agility": 98,
    "intelligence": 84,
    "kicking": 70,
    "defense": 80,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 130,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "acelerrelampago",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Pantalla_Acuatica",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Bernie White
{
  "_id": "Bernie_White_D",
  "name": "Blown",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Blown.png"},
  "imageDetail": { "url": "/img/jugadoresID/blown.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Diamond",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 84,
    "control": 80,
    "technique": 82,
    "pressure": 75,
    "physique": 80,
    "agility": 90,
    "intelligence": 76,
    "kicking": 88,
    "defense": 45,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 130,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Astro_Remate",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Pantalla_Acuatica",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Gazelle
{
  "_id": "Gazelle_D",
  "name": "Gazelle",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Gazelle.png"},
  "imageDetail": { "url": "/img/jugadoresID/gazelle.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Diamond",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 90,
    "control": 92,
    "technique": 95,
    "pressure": 85,
    "physique": 84,
    "agility": 98,
    "intelligence": 94,
    "kicking": 96,
    "defense": 40,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 145,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Balon_Iceberg",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Pantalla_Acuatica",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//Denzel Freezer
{
  "_id": "Denzel_Freezer_D",
  "name": "Frost",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Frost.png"},
  "imageDetail": { "url": "/img/jugadoresID/frost.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Diamond",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 82,
    "control": 78,
    "technique": 80,
    "pressure": 88,
    "physique": 82,
    "agility": 92,
    "intelligence": 74,
    "kicking": 90,
    "defense": 42,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 132,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Astro_Remate",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Flecha_Divina",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},






//Prominence
//Grant Cook
{
  "_id": "Grant_Cook_P",
  "name": "Grent",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Grent.png"},
  "imageDetail": { "url": "/img/jugadoresID/grent.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Prominence",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 94,
    "control": 82,
    "technique": 80,
    "pressure": 92,
    "physique": 95,
    "agility": 68,
    "intelligence": 72,
    "kicking": 60,
    "defense": 96,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 138,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Combustion",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Despeje_de_Fuego",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},






//Bonnie Sparks
{
  "_id": "Bonnie_Sparks_P",
  "name": "Baller",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Baller.png"},
  "imageDetail": { "url": "/img/jugadoresID/baller.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Prominence",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 85,
    "control": 72,
    "technique": 78,
    "pressure": 90,
    "physique": 84,
    "agility": 88,
    "intelligence": 74,
    "kicking": 55,
    "defense": 92,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 134,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Cortafuegos",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Val Flamewood
{
  "_id": "Val_Flamewood_P",
  "name": "Balcke",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Balcke.png"},
  "imageDetail": { "url": "/img/jugadoresID/balcke.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Prominence",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 88,
    "control": 70,
    "technique": 72,
    "pressure": 94,
    "physique": 86,
    "agility": 82,
    "intelligence": 78,
    "kicking": 50,
    "defense": 94,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 135,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Sean Ashford
{
  "_id": "Sean_Ashford_P",
  "name": "Seats",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Seats.png"},
  "imageDetail": { "url": "/img/jugadoresID/seats.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Prominence",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 84,
    "control": 72,
    "technique": 75,
    "pressure": 92,
    "physique": 88,
    "agility": 80,
    "intelligence": 70,
    "kicking": 55,
    "defense": 90,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 132,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Cortafuegos",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Tacon_Infernal",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Ben Blowton
{
  "_id": "Ben_Blowton_P",
  "name": "Bomber",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Bomber.png"},
  "imageDetail": { "url": "/img/jugadoresID/bomber.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Prominence",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 92,
    "control": 75,
    "technique": 70,
    "pressure": 88,
    "physique": 96,
    "agility": 70,
    "intelligence": 68,
    "kicking": 65,
    "defense": 88,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 136,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Cortafuegos",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},






//Ethan Whitering
{
  "_id": "Ethan_Whitering_P",
  "name": "Heat",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Heat.png"},
  "imageDetail": { "url": "/img/jugadoresID/heat.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Prominence",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 80,
    "control": 85,
    "technique": 88,
    "pressure": 78,
    "physique": 75,
    "agility": 90,
    "intelligence": 86,
    "kicking": 72,
    "defense": 65,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 130,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Lluvia_de_Meteoros",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Remate_Gaia",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Brenda Firequest
{
  "_id": "Brenda_Firequest_P",
  "name": "Lean",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Lean.png"},
  "imageDetail": { "url": "/img/jugadoresID/lean.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Prominence",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 82,
    "control": 86,
    "technique": 84,
    "pressure": 82,
    "physique": 80,
    "agility": 88,
    "intelligence": 85,
    "kicking": 70,
    "defense": 78,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 132,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Astro_Remate",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Sam Bournes
{
  "_id": "Sam_Bournes_P",
  "name": "Bountine",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Bountine.png"},
  "imageDetail": { "url": "/img/jugadoresID/bountine.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Prominence",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 78,
    "control": 88,
    "technique": 90,
    "pressure": 84,
    "physique": 76,
    "agility": 92,
    "intelligence": 88,
    "kicking": 74,
    "defense": 82,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 130,
    "tension": 85
  },

  "techniques": [
    {
      "technique_id": "Cortafuegos",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Jim Flareson
{
  "_id": "Jim_Flareson_P",
  "name": "Sidern",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Sidern.png"},
  "imageDetail": { "url": "/img/jugadoresID/sidern.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Prominence",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 86,
    "control": 78,
    "technique": 80,
    "pressure": 82,
    "physique": 85,
    "agility": 88,
    "intelligence": 74,
    "kicking": 92,
    "defense": 45,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 135,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Astro_Remate",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},







//Torch
{
  "_id": "Torch_P",
  "name": "Torch",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/torch.png"},
  "imageDetail": { "url": "/img/jugadoresID/torch.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Prominence",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 95,
    "control": 88,
    "technique": 92,
    "pressure": 90,
    "physique": 86,
    "agility": 94,
    "intelligence": 82,
    "kicking": 98,
    "defense": 35,
    "dispute": 92
  },

  "matchStats": {
    "stamina": 142,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Llamarada_Atomica",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Pantalla_Ignea",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Remate_Gaia",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Nigel August
{
  "_id": "Nigel_August_P",
  "name": "Neppten",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/neppten.png"},
  "imageDetail": { "url": "/img/jugadoresID/neppten.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Prominence",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 88,
    "control": 82,
    "technique": 84,
    "pressure": 90,
    "physique": 85,
    "agility": 88,
    "intelligence": 78,
    "kicking": 94,
    "defense": 48,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 138,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Cortafuegos",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Rayo_de_Ganimedes",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Remate_Gaia",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Caos
//Grant Cook
{
  "_id": "Grant_Cook_CS",
  "name": "Grent",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Grent_CS.png"},
  "imageDetail": { "url": "/img/jugadoresID/grent.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Caos",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 94,
    "control": 82,
    "technique": 80,
    "pressure": 92,
    "physique": 95,
    "agility": 68,
    "intelligence": 72,
    "kicking": 60,
    "defense": 96,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 138,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Combustion",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Despeje_de_Fuego",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Bonnie Sparks
{
  "_id": "Bonnie_Sparks_CS",
  "name": "Baller",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Baller_CS.png"},
  "imageDetail": { "url": "/img/jugadoresID/baller.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Caos",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 85,
    "control": 72,
    "technique": 78,
    "pressure": 90,
    "physique": 84,
    "agility": 88,
    "intelligence": 74,
    "kicking": 55,
    "defense": 92,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 134,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Cortafuegos",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Albert Denver
{
  "_id": "Albert_Denver_CS",
  "name": "Gocker",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Gocker_CS.png"},
  "imageDetail": { "url": "/img/jugadoresID/gocker.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Caos",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 94,
    "control": 60,
    "technique": 65,
    "pressure": 96,
    "physique": 98,
    "agility": 58,
    "intelligence": 70,
    "kicking": 50,
    "defense": 95,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 140,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Rompe_Hielos",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Pisoton_de_Sumo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Ben Blowton
{
  "_id": "Ben_Blowton_CS",
  "name": "Bomber",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Bomber_CS.png"},
  "imageDetail": { "url": "/img/jugadoresID/bomber.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Caos",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 92,
    "control": 75,
    "technique": 70,
    "pressure": 88,
    "physique": 96,
    "agility": 70,
    "intelligence": 68,
    "kicking": 65,
    "defense": 88,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 136,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Cortafuegos",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Claire Lesnow
{
  "_id": "Claire_Lesnow_CS",
  "name": "Clear",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Clear_CS.png"},
  "imageDetail": { "url": "/img/jugadoresID/clear.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Caos",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 80,
    "control": 75,
    "technique": 78,
    "pressure": 94,
    "physique": 82,
    "agility": 90,
    "intelligence": 76,
    "kicking": 50,
    "defense": 92,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 132,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Flash_de_Fotones",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Pantalla_Acuatica",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Ethan Whitering
{
  "_id": "Ethan_Whitering_CS",
  "name": "Heat",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Heat_CS.png"},
  "imageDetail": { "url": "/img/jugadoresID/heat.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Caos",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 80,
    "control": 85,
    "technique": 88,
    "pressure": 78,
    "physique": 75,
    "agility": 90,
    "intelligence": 86,
    "kicking": 72,
    "defense": 65,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 130,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Lluvia_de_Meteoros",
      "relation": "copia",
      "power_modifier": 0.3
    },
  ]
},





//Dawson Foxx
{
  "_id": "Dawson_Foxx_CS",
  "name": "Droll",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Droll_CS.png"},
  "imageDetail": { "url": "/img/jugadoresID/droll.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Caos",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 78,
    "control": 84,
    "technique": 86,
    "pressure": 90,
    "physique": 75,
    "agility": 92,
    "intelligence": 82,
    "kicking": 62,
    "defense": 85,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 128,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Robo_Veloz",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Pantalla_Acuatica",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Ving Rice
{
  "_id": "Ving_Rice_CS",
  "name": "Rhine",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/Rhine_CS.png"},
  "imageDetail": { "url": "/img/jugadoresID/rhine.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Caos",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 75,
    "control": 86,
    "technique": 88,
    "pressure": 82,
    "physique": 77,
    "agility": 98,
    "intelligence": 84,
    "kicking": 70,
    "defense": 80,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 130,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "acelerrelampago",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Pantalla_Acuatica",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Nigel August
{
  "_id": "Nigel_August_CS",
  "name": "Neppten",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Neppten_CS.png"},
  "imageDetail": { "url": "/img/jugadoresID/neppten.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Caos",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 88,
    "control": 82,
    "technique": 84,
    "pressure": 90,
    "physique": 85,
    "agility": 88,
    "intelligence": 78,
    "kicking": 94,
    "defense": 48,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 138,
    "tension": 100
  },

  "techniques": [
    {
      "technique_id": "Cortafuegos",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Rayo_de_Ganimedes",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Gazelle
{
  "_id": "Gazelle_CS",
  "name": "Gazelle",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Gazelle_CS.png"},
  "imageDetail": { "url": "/img/jugadoresID/gazelle.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Caos",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 120,
    "control": 120,
    "technique": 115,
    "pressure": 120,
    "physique": 110,
    "agility": 120,
    "intelligence": 125,
    "kicking": 115,
    "defense": 115,
    "dispute": 120
  },

  "matchStats": {
    "stamina": 125,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Balon_Iceberg",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Pantalla_Acuatica",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Ventisca_de_Fuego",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//Torch
{
  "_id": "Torch_CS",
  "name": "Torch",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Torch_CS.png"},
  "imageDetail": { "url": "/img/jugadoresID/torch.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "S",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Caos",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 125,
    "control": 120,
    "technique": 115,
    "pressure": 120,
    "physique": 110,
    "agility": 120,
    "intelligence": 125,
    "kicking": 125,
    "defense": 99,
    "dispute": 110
  },

  "matchStats": {
    "stamina": 125,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Llamarada_Atomica",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Pantalla_Ignea",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Ventisca_de_Fuego",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//RaimonT2
//Mark Evans T2
{
  "_id": "Mark_Evans_T2",
  "name": "Mark Evans",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/mark_evans.png"},
  "imageDetail": { "url": "/img/jugadoresID/mark_evans.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "secondaryPosition": "FW",
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Justicia",
  "tier": "S",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 120,
    "control": 110,
    "technique": 115,
    "pressure": 110,
    "physique": 115,
    "agility": 110,
    "intelligence": 125,
    "kicking": 105,
    "defense": 125,
    "dispute": 120
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Super_Puño_Invencible",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Cabezazo_Megaton",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "La_Tierra",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//Jack Wallside T2
{
  "_id": "Jack_Wallside_T2",
  "name": "Jack",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/jack_wallside.png"},
  "imageDetail": { "url": "/img/jugadoresID/jack_wallside.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 90,
    "control": 65,
    "technique": 70,
    "pressure": 92,
    "physique": 98,
    "agility": 55,
    "intelligence": 68,
    "kicking": 50,
    "defense": 95,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 140,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "El_Muro",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//Scott Banyan T2
{
  "_id": "Scott_Banyan_T2",
  "name": "Scotty",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Scotty.png"},
  "imageDetail": { "url": "/img/jugadoresID/scotty.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contra-ataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 72,
    "control": 75,
    "technique": 82,
    "pressure": 88,
    "physique": 65,
    "agility": 94,
    "intelligence": 80,
    "kicking": 45,
    "defense": 92,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 135,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Campo_Torbellino",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//Bobby Shearer T2
{
  "_id": "Bobby_Shearer_T2",
  "name": "Bobby",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/bobby_shearer.png"},
  "imageDetail": { "url": "/img/jugadoresID/bobby_shearer.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "USA",
  "country_image": {"url": "/img/countries/eeuu.png"},
  "teams": [
    {
      "team_id": "Raimon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 86,
    "control": 74,
    "technique": 80,
    "pressure": 90,
    "physique": 88,
    "agility": 82,
    "intelligence": 78,
    "kicking": 62,
    "defense": 94,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 138,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Hurley Kane T2
{
  "_id": "Hurley_Kane_T2",
  "name": "Hurley",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Hurley.png"},
  "imageDetail": { "url": "/img/jugadoresID/hurley.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 88,
    "control": 72,
    "technique": 75,
    "pressure": 85,
    "physique": 92,
    "agility": 84,
    "intelligence": 70,
    "kicking": 96,
    "defense": 88,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 145,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Corte_Giratorio",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Remate_Tsunami",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Tori (Victoria Vanguard) T2
{
  "_id": "Tori_T2",
  "name": "Tori",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/tori.png"},
  "imageDetail": { "url": "/img/jugadoresID/tori.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "secondaryPosition": "DF",
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 78,
    "control": 85,
    "technique": 84,
    "pressure": 90,
    "physique": 76,
    "agility": 88,
    "intelligence": 92,
    "kicking": 70,
    "defense": 88,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 138,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Torre_Inexpugnable",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Arco_Iris",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Sue (Suzette Martian) T2
{
  "_id": "Sue_T2",
  "name": "Sue",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/sue.png"},
  "imageDetail": { "url": "/img/jugadoresID/sue.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 75,
    "control": 82,
    "technique": 80,
    "pressure": 70,
    "physique": 72,
    "agility": 90,
    "intelligence": 78,
    "kicking": 88,
    "defense": 40,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 130,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Tiro_Torre_de_Osaka",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Jude Sharp T2
{
  "_id": "Jude_Sharp_T2",
  "name": "Jude Sharp",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/jude_sharp.png"},
  "imageDetail": { "url": "/img/jugadoresID/jude_sharp.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Justicia",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 120,
    "control": 110,
    "technique": 115,
    "pressure": 120,
    "physique": 115,
    "agility": 120,
    "intelligence": 100,
    "kicking": 115,
    "defense": 105,
    "dispute": 100
  },

  "matchStats": {
    "stamina": 120,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Espejismo_De_Balon",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Erik Eagle T2
{
  "_id": "Erik_Eagle_T2",
  "name": "Erik Eagle",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/erik_eagle.png"},
  "imageDetail": { "url": "/img/jugadoresID/erik_eagle.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 76,
    "control": 94,
    "technique": 96,
    "pressure": 82,
    "physique": 78,
    "agility": 92,
    "intelligence": 95,
    "kicking": 88,
    "defense": 70,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 135,
    "tension": 100
  },

  "techniques": [
    {
      "technique_id": "Remate_Pegaso",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Axel Blaze T2
{
  "_id": "Axel_Blaze_T2",
  "name": "Axel Blaze",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/axel_blaze.png"},
  "imageDetail": { "url": "/img/jugadoresID/axel_blaze.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 125,
    "control": 110,
    "technique": 125,
    "pressure": 110,
    "physique": 125,
    "agility": 110,
    "intelligence": 100,
    "kicking": 115,
    "defense": 95,
    "dispute": 110
  },

  "matchStats": {
    "stamina": 125,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Tormenta_de_Fuego",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Fuego_Cruzado",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "La_Tierra",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Shawn Froste T2
{
  "_id": "Shawn_Froste_T2",
  "name": "Shawn Froste",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/shawn_froste_inazuma.png"},
  "imageDetail": { "url": "/img/jugadoresID/shawn_froste.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "secondaryPosition": "DF",
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Brecha",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 130,
    "control": 120,
    "technique": 135,
    "pressure": 110,
    "physique": 125,
    "agility": 125,
    "intelligence": 100,
    "kicking": 125,
    "defense": 110,
    "dispute": 100
  },

  "matchStats": {
    "stamina": 120,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Ventisca_Eterna",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Aullido_de_Lobo",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Fuego_Cruzado",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "La_Tierra",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Byron Love T2
{
  "_id": "Byron_Love_T2",
  "name": "Byron Love",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/byron_love_r.png"},
  "imageDetail": { "url": "/img/jugadoresID/byron_love.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 12
    }
  ],

  "stats": {
    "power": 120,
    "control": 110,
    "technique": 130,
    "pressure": 115,
    "physique": 125,
    "agility": 110,
    "intelligence": 120,
    "kicking": 125,
    "defense": 110,
    "dispute": 105
  },

  "matchStats": {
    "stamina": 125,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Hora_Celestial",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Sabiduria_Divina",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Remate_Celestial",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Darren LaChance T2
{
  "_id": "Darren_LaChance_T2",
  "name": "Darren",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Darren.png"},
  "imageDetail": { "url": "/img/jugadoresID/darren.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Raimon_T2",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 13
    }
  ],

  "stats": {
    "power": 88,
    "control": 92,
    "technique": 95,
    "pressure": 80,
    "physique": 75,
    "agility": 86,
    "intelligence": 84,
    "kicking": 60,
    "defense": 90,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 140,
    "tension": 100
  },

  "techniques": [
    {
      "technique_id": "Manos_Infinitas",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},






//Genesis
//Nero_G
{
  "_id": "Nero_G",
  "name": "Nero",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/nero.png"},
  "imageDetail": { "url": "/img/jugadoresID/nero.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Genesis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 120,
    "control": 105,
    "technique": 130,
    "pressure": 115,
    "physique": 115,
    "agility": 120,
    "intelligence": 115,
    "kicking": 95,
    "defense": 125,
    "dispute": 100
  },

  "matchStats": {
    "stamina": 125,
    "tension": 100
  },

  "techniques": [
    {
      "technique_id": "Constelacion_Estelar",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Muro_Dimensional",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//Gele
{
  "_id": "Gele_G",
  "name": "Gele",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/gele.png"},
  "imageDetail": { "url": "/img/jugadoresID/gele.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Genesis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 78,
    "control": 70,
    "technique": 82,
    "pressure": 85,
    "physique": 80,
    "agility": 90,
    "intelligence": 75,
    "kicking": 55,
    "defense": 88,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 135,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Flash_de_Fotones",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Zona_Sigma",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Kiburn
{
  "_id": "Kiburn_G",
  "name": "Kiburn",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/kiburn.png"},
  "imageDetail": { "url": "/img/jugadoresID/kiburn.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Genesis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 85,
    "control": 68,
    "technique": 75,
    "pressure": 92,
    "physique": 84,
    "agility": 88,
    "intelligence": 72,
    "kicking": 50,
    "defense": 90,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 138,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "acelerrelampago",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},






//Zohen
{
  "_id": "Zohen_G",
  "name": "Zohen",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/zohen.png"},
  "imageDetail": { "url": "/img/jugadoresID/zohen.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Genesis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 94,
    "control": 65,
    "technique": 72,
    "pressure": 95,
    "physique": 96,
    "agility": 60,
    "intelligence": 78,
    "kicking": 50,
    "defense": 92,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 142,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Sismo",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Hauser
{
  "_id": "Hauser_G",
  "name": "Hauser",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/hauser.png"},
  "imageDetail": { "url": "/img/jugadoresID/hauser.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Genesis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 90,
    "control": 60,
    "technique": 74,
    "pressure": 92,
    "physique": 98,
    "agility": 58,
    "intelligence": 70,
    "kicking": 45,
    "defense": 95,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 140,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Superarmadillo",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Pisoton_de_Sumo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},






//Kormer_G
{
  "_id": "Kormer_G",
  "name": "Kormer",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/kormer.png"},
  "imageDetail": { "url": "/img/jugadoresID/kormer.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Genesis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 75,
    "control": 88,
    "technique": 82,
    "pressure": 80,
    "physique": 74,
    "agility": 95,
    "intelligence": 86,
    "kicking": 70,
    "defense": 78,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 135,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "acelerrelampago",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Corte_Giratorio",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},









//Kiwill (ID con _G)
{
  "_id": "Kiwill_G",
  "name": "Kiwill",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/kiwill.png"},
  "imageDetail": { "url": "/img/jugadoresID/kiwill.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Genesis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 74,
    "control": 86,
    "technique": 88,
    "pressure": 82,
    "physique": 75,
    "agility": 90,
    "intelligence": 92,
    "kicking": 70,
    "defense": 82,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 135,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Cruz_del_Sur",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Zona_Sigma",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Ark (ID con _G)
{
  "_id": "Ark_G",
  "name": "Ark",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/ark.png"},
  "imageDetail": { "url": "/img/jugadoresID/ark.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Genesis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 82,
    "control": 84,
    "technique": 80,
    "pressure": 88,
    "physique": 85,
    "agility": 86,
    "intelligence": 80,
    "kicking": 72,
    "defense": 84,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 140,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Cruz_del_Sur",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "acelerrelampago",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Wittz (ID con _G)
{
  "_id": "Wittz_G",
  "name": "Wittz",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/wittz.png"},
  "imageDetail": { "url": "/img/jugadoresID/wittz.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Genesis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 92,
    "control": 80,
    "technique": 90,
    "pressure": 85,
    "physique": 88,
    "agility": 94,
    "intelligence": 82,
    "kicking": 98,
    "defense": 65,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 145,
    "tension": 95
  },

  "techniques": [
    {
      "technique_id": "Supernova",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Pinguino_Espacial",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},




//Bellatrix (ID con _G)
{
  "_id": "Bellatrix_G",
  "name": "Bellatrix",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/bellatrix.png"},
  "imageDetail": { "url": "/img/jugadoresID/bellatrix.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "secondaryPosition": "MD",
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "S+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Genesis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 125,
    "control": 135,
    "technique": 125,
    "pressure": 120,
    "physique": 120,
    "agility": 125,
    "intelligence": 130,
    "kicking": 125,
    "defense": 100,
    "dispute": 110
  },

  "matchStats": {
    "stamina": 145,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Supernova",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Pinguino_Espacial",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Lluvia_de_Meteoros",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Superelastico",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Xene (ID con _G)
{
  "_id": "Xene_G",
  "name": "Xene",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/xene.png"},
  "imageDetail": { "url": "/img/jugadoresID/xene.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "S+",
  "isCaptain": true,
  "ageGroup": "Junior",
  "schoolGrade": "Middle School",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Genesis",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 135,
    "control": 140,
    "technique": 140,
    "pressure": 130,
    "physique": 125,
    "agility": 115,
    "intelligence": 120,
    "kicking": 130,
    "defense": 100,
    "dispute": 120
  },

  "matchStats": {
    "stamina": 150,
    "tension": 130
  },

  "techniques": [
    {
      "technique_id": "Canon_de_Meteoritos",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Cruz_del_Sur",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Supernova",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Pinguino_Espacial",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Emperadores Oscuros
//Thomas_Feldt_EO
{
  "_id": "Thomas_Feldt_EO",
  "name": "Feldt",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/thomas_feldt_eo.png"},
  "imageDetail": { "url": "/img/jugadoresID/thomas_feldt_eo.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Emperadores_Oscuros",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 84,
    "control": 90,
    "technique": 82,
    "pressure": 88,
    "physique": 85,
    "agility": 70,
    "intelligence": 80,
    "kicking": 50,
    "defense": 92,
    "dispute": 78
  },
  "matchStats": {
    "stamina": 110,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Despeje_Cohete",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Bloqueo_Doble",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},







//Malcolm_Night_EO
{
  "_id": "Malcolm_Night_EO",
  "name": "Malcolm",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/malcolm_night_eo.png"},
  "imageDetail": { "url": "/img/jugadoresID/malcolm_night_eo.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Emperadores_Oscuros",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 86,
    "control": 72,
    "technique": 80,
    "pressure": 90,
    "physique": 88,
    "agility": 85,
    "intelligence": 78,
    "kicking": 65,
    "defense": 94,
    "dispute": 82
  },
  "matchStats": {
    "stamina": 110,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Aceleracion",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Corte_Giratorio",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Sam_Kincaid_EO
{
  "_id": "Sam_Kincaid_EO",
  "name": "Sam",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/sam_kincaid_eo.png"},
  "imageDetail": { "url": "/img/jugadoresID/sam_kincaid_eo.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Emperadores_Oscuros",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 78,
    "control": 70,
    "technique": 85,
    "pressure": 82,
    "physique": 75,
    "agility": 88,
    "intelligence": 72,
    "kicking": 70,
    "defense": 86,
    "dispute": 80
  },
  "matchStats": {
    "stamina": 110,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Granada_Doble",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},






//Jim_Wraith_EO
{
  "_id": "Jim_Wraith_EO",
  "name": "Jim",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/jim_wraith_eo.png"},
  "imageDetail": { "url": "/img/jugadoresID/jim_wraith_eo.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Emperadores_Oscuros",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 76,
    "control": 84,
    "technique": 88,
    "pressure": 90,
    "physique": 72,
    "agility": 80,
    "intelligence": 95,
    "kicking": 60,
    "defense": 90,
    "dispute": 85
  },
  "matchStats": {
    "stamina": 110,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Giro_Bobina",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Ataque_Sombrio",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},






//Tod_Ironside_EO
{
  "_id": "Tod_Ironside_EO",
  "name": "Tod",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/tod_ironside_eo.png"},
  "imageDetail": { "url": "/img/jugadoresID/tod_ironside_eo.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Emperadores_Oscuros",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 70,
    "control": 82,
    "technique": 85,
    "pressure": 78,
    "physique": 72,
    "agility": 98,
    "intelligence": 80,
    "kicking": 74,
    "defense": 75,
    "dispute": 88
  },
  "matchStats": {
    "stamina": 110,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Giro_de_Mono",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Bateo_Total",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//Steve_Grim_EO
{
  "_id": "Steve_Grim_EO",
  "name": "Steve",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/steve_grim_eo.png"},
  "imageDetail": { "url": "/img/jugadoresID/steve_grim_eo.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Emperadores_Oscuros",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 75,
    "control": 85,
    "technique": 90,
    "pressure": 80,
    "physique": 78,
    "agility": 88,
    "intelligence": 84,
    "kicking": 76,
    "defense": 72,
    "dispute": 80
  },
  "matchStats": {
    "stamina": 110,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Remate_en_V",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//Tim_Saunders_EO
{
  "_id": "Tim_Saunders_EO",
  "name": "Tim",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/tim_saunders_eo.png"},
  "imageDetail": { "url": "/img/jugadoresID/tim_saunders_eo.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Emperadores_Oscuros",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 68,
    "control": 86,
    "technique": 92,
    "pressure": 75,
    "physique": 65,
    "agility": 110,
    "intelligence": 88,
    "kicking": 72,
    "defense": 82,
    "dispute": 84
  },
  "matchStats": {
    "stamina": 110,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Tecnica_Kung_Fu",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Estela_Ignea",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Maxwell_Carson_EO
{
  "_id": "Maxwell_Carson_EO",
  "name": "Max",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/maxwell_carson_eo.png"},
  "imageDetail": { "url": "/img/jugadoresID/maxwell_carson_eo.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Emperadores_Oscuros",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 72,
    "control": 88,
    "technique": 94,
    "pressure": 82,
    "physique": 75,
    "agility": 92,
    "intelligence": 90,
    "kicking": 78,
    "defense": 70,
    "dispute": 85
  },
  "matchStats": {
    "stamina": 110,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Remate_en_V",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Entrada_Tormenta",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Shadow_Cimmerian_EO
{
  "_id": "Shadow_Cimmerian_EO",
  "name": "Shadow",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/shadow_cimmerian_eo.png"},
  "imageDetail": { "url": "/img/jugadoresID/shadow_cimmerian_eo.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Emperadores_Oscuros",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 115,
    "control": 105,
    "technique": 110,
    "pressure": 105,
    "physique": 100,
    "agility": 110,
    "intelligence": 110,
    "kicking": 125,
    "defense": 95,
    "dispute": 100
  },
  "matchStats": {
    "stamina": 110,
    "tension": 150
  },

  "techniques": [
    {
      "technique_id": "Tornado_Oscuro",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Ataque_Sombrio",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Fenix_Oscuro",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Nathan_Swift_EO
{
  "_id": "Nathan_Swift_EO",
  "name": "Nathan Swift",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/nathan_swift_eo.png"},
  "imageDetail": { "url": "/img/jugadoresID/nathan_swift_eo.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "S+",
  "isCaptain": true,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Emperadores_Oscuros",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 135,
    "control": 135,
    "technique": 145,
    "pressure": 125,
    "physique": 135,
    "agility": 120,
    "intelligence": 100,
    "kicking": 135,
    "defense": 125,
    "dispute": 135
  },

  "matchStats": {
    "stamina": 135,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Entrada_Huracan",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Fenix_Oscuro",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//Kevin_Dragonfly_EO
{
  "_id": "Kevin_Dragonfly_EO",
  "name": "Kevin Dragonfly",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/kevin_dragonfly_eo.png"},
  "imageDetail": { "url": "/img/jugadoresID/kevin_dragonfly_eo.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Emperadores_Oscuros",
      "seasons": "Season_T2",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 90,
    "control": 70,
    "technique": 85,
    "pressure": 92,
    "physique": 94,
    "agility": 80,
    "intelligence": 75,
    "kicking": 96,
    "defense": 50,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Remate_Guiverno",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Fenix_Oscuro",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},




//Inazuma Japon
//Mark_Evans_T3
{
  "_id": "Mark_Evans_T3",
  "name": "Mark Evans",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/mark_evans.png"},
  "imageDetail": { "url": "/img/jugadoresID/mark_evans.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Contraataque",
  "tier": "S+",
  "isCaptain": true,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Japan",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 145,
    "control": 140,
    "technique": 145,
    "pressure": 125,
    "physique": 130,
    "agility": 120,
    "intelligence": 120,
    "kicking": 115,
    "defense": 145,
    "dispute": 120
  },

  "matchStats": {
    "stamina": 140,
    "tension": 120
  },

  "techniques": [
    { 
      "technique_id": "Puno_de_Furia",
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Mano_Ultradimensional", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Parada_Celestial", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Mano_Omega", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Mano_Celestial_V", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Tiro_a_Reaccion", 
      "relation": "creador", 
      "power_modifier": 1.0 
    }
  ]
},


//Nathan_Swift_T3
{
  "_id": "Nathan_Swift_T3",
  "name": "Nathan Swift",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/nathan_swift_w.png"},
  "imageDetail": { "url": "/img/jugadoresID/nathan_swift.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Japan",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 82,
    "control": 88,
    "technique": 98,
    "pressure": 90,
    "physique": 85,
    "agility": 118,
    "intelligence": 92,
    "kicking": 88,
    "defense": 94,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Danza_del_Viento",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Ventisca_Huracan",
      "relation": "creador",
      "power_modifier": 1.0
    },
    { 
      "technique_id": "Frente_Frio", 
      "relation": "heredero", 
      "power_modifier": 0.5 
    },
    { 
      "technique_id": "Ventisca_Triple", 
      "relation": "heredero", 
      "power_modifier": 0.5
    },  
  ]
},



//Jack_Wallside_T3
{
  "_id": "Jack_Wallside_T3",
  "name": "Jack",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/jack_wallside_w.png"},
  "imageDetail": { "url": "/img/jugadoresID/jack_wallside.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Japan",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 105,
    "control": 65,
    "technique": 80,
    "pressure": 95,
    "physique": 110,
    "agility": 60,
    "intelligence": 78,
    "kicking": 70,
    "defense": 102,
    "dispute": 94
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "La_Montana",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Hurley_Kane_T3
{
  "_id": "Hurley_Kane_T3",
  "name": "Hurley",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/hurley_kane_w.png"},
  "imageDetail": { "url": "/img/jugadoresID/hurley.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Japan",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 92,
    "control": 78,
    "technique": 85,
    "pressure": 80,
    "physique": 96,
    "agility": 90,
    "intelligence": 75,
    "kicking": 105,
    "defense": 88,
    "dispute": 92
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Tifon",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Scott_Banyan_T3
{
  "_id": "Scott_Banyan_T3",
  "name": "Scotty",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/scott_banyan_w.png"},
  "imageDetail": { "url": "/img/jugadoresID/scotty.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Japan",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 75,
    "control": 82,
    "technique": 90,
    "pressure": 88,
    "physique": 70,
    "agility": 115,
    "intelligence": 85,
    "kicking": 65,
    "defense": 100,
    "dispute": 92
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Campo_Torbellino",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Archer_Hawkins_T3
{
  "_id": "Archer_Hawkins_T3",
  "name": "Archer",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/archer_hawkins.png"},
  "imageDetail": { "url": "/img/jugadoresID/archer.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Japan",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 110,
    "control": 1000,
    "technique": 135,
    "pressure": 115,
    "physique": 125,
    "agility": 120,
    "intelligence": 100,
    "kicking": 90,
    "defense": 130,
    "dispute": 115
  },

  "matchStats": {
    "stamina": 110,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Golpe_de_Vacio",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Coz_3",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Caleb_Stonewall_T3
{
  "_id": "Caleb_Stonewall_T3",
  "name": "Stonewall",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/caleb_stonewall.png"},
  "imageDetail": { "url": "/img/jugadoresID/caleb_stonewall.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Japan",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 125,
    "control": 125,
    "technique": 135,
    "pressure": 125,
    "physique": 120,
    "agility": 115,
    "intelligence": 110,
    "kicking": 135,
    "defense": 130,
    "dispute": 125
  },

  "matchStats": {
    "stamina": 130,
    "tension": 120
  },

  "techniques": [
    { 
      "technique_id": "Coz_2", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Campo_de_Fuerza", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Pinguino_Emperador_n_3", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    {
      "technique_id": "Pinguino_celestial_endemoniado",
      "relation": "creador",
      "power_modifier": 1.0
    } 
  ]
},




//Jude_Sharp_T3
{
  "_id": "Jude_Sharp_T3",
  "name": "Jude Sharp",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/jude_sharp_w.png"},
  "imageDetail": { "url": "/img/jugadoresID/jude_sharp.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Justicia",
  "tier": "S+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Japan",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 135,
    "control": 140,
    "technique": 145,
    "pressure": 120,
    "physique": 130,
    "agility": 120,
    "intelligence": 120,
    "kicking": 135,
    "defense": 135,
    "dispute": 120
  },

  "matchStats": {
    "stamina": 130,
    "tension": 120
  },

  "techniques": [
    { "technique_id": "Espejismo_De_Balon", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Campo_de_Fuerza", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Pinguino_Emperador_n_3", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Big_Bang", "relation": "creador", "power_modifier": 1.0 },
    { 
      "technique_id": "Ventisca_Triple", 
      "relation": "heredero", 
      "power_modifier": 0.5 
    }, 
    {
      "technique_id": "Pinguino_celestial_endemoniado",
      "relation": "creador",
      "power_modifier": 1.0
    } 
  ]
},






//Shawn_Froste_T3
{
  "_id": "Shawn_Froste_T3",
  "name": "Shawn",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/shawn_froste_w.png"},
  "imageDetail": { "url": "/img/jugadoresID/shawn_froste.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "S+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Japan",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 145,
    "control": 140,
    "technique": 145,
    "pressure": 130,
    "physique": 130,
    "agility": 1450,
    "intelligence": 120,
    "kicking": 145,
    "defense": 140,
    "dispute": 135
  },

  "matchStats": {
    "stamina": 145,
    "tension": 120
  },

  "techniques": [
    { 
      "technique_id": "Ventisca_Eterna", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Angel_de_Nieve", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Paisaje_Helado", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Ventisca_Huracan",
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "La_Aurora", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Big_Bang", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Frente_Frio", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Ventisca_Triple", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },  
  ]
},




//Axel_Blaze_T3
{
  "_id": "Axel_Blaze_T3",
  "name": "Axel Blaze",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/axel_blaze_w.png"},
  "imageDetail": { "url": "/img/jugadoresID/axel_blaze.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Justicia",
  "tier": "S+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Japan",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 135,
    "control": 130,
    "technique": 145,
    "pressure": 120,
    "physique": 130,
    "agility": 135,
    "intelligence": 120,
    "kicking": 145,
    "defense": 100,
    "dispute": 120
  },

  "matchStats": {
    "stamina": 130,
    "tension": 120
  },

  "techniques": [
    { "technique_id": "Entrada_de_llamas", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Torbellino_de_Fuego", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Tormenta_del_Tigre", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Fuego_Total", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Tiro_a_Reaccion", "relation": "creador", "power_modifier": 1.0 }
  ]
},


//Austin_Hobbes_T3
{
  "_id": "Austin_Hobbes_T3",
  "name": "Austin",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/austin_hobbes.png"},
  "imageDetail": { "url": "/img/jugadoresID/austin_hobbes.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Japan",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 115,
    "control": 120,
    "technique": 125,
    "pressure": 115,
    "physique": 120,
    "agility": 115,
    "intelligence": 100,
    "kicking": 125,
    "defense": 115,
    "dispute": 100
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    { "technique_id": "Tiro_a_Reaccion", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Fuego_Total", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Tormenta_del_Tigre", "relation": "heredero", "power_modifier": 0.5 },
    { "technique_id": "Remate_del_Tigre", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Circulo_de_Espadas", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Pared_Solitaria", "relation": "copia", "power_modifier": 0.5 }
  ]
},




//David_Samford_T3
{
  "_id": "David_Samford_T3",
  "name": "Samford",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/david_samford_w.png"},
  "imageDetail": { "url": "/img/jugadoresID/samford.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "secondaryPosition": "FW",
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "A+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Japan",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 12
    }
  ],

  "stats": {
    "power": 80,
    "control": 90,
    "technique": 105,
    "pressure": 85,
    "physique": 78,
    "agility": 92,
    "intelligence": 95,
    "kicking": 98,
    "defense": 70,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Pinguino_Emperador_n_3",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Xavier_Foster_T3
{
  "_id": "Xavier_Foster_T3",
  "name": "Xavier Foster",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/xavier_foster.png"},
  "imageDetail": { "url": "/img/jugadoresID/xavier_foster.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "A+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Japan",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 18
    }
  ],

  "stats": {
    "power": 92,
    "control": 95,
    "technique": 105,
    "pressure": 90,
    "physique": 85,
    "agility": 102,
    "intelligence": 110,
    "kicking": 118,
    "defense": 65,
    "dispute": 94
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    { "technique_id": "Descenso_Estelar", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Fuego_Total", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "La_Aurora", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Big_Bang", "relation": "creador", "power_modifier": 1.0 }
  ]
},



//Darren_LaChance_T3
{
  "_id": "Darren_LaChance_T3",
  "name": "Darren LaChance",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/darren_lachance.png"},
  "imageDetail": { "url": "/img/jugadoresID/darren.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Inazuma_Japan",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 20
    }
  ],

  "stats": {
    "power": 88,
    "control": 110,
    "technique": 112,
    "pressure": 90,
    "physique": 75,
    "agility": 95,
    "intelligence": 85,
    "kicking": 70,
    "defense": 105,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 110,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Mano_Diabolica",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},







//Dragones de Fuego
//Jang_Cho
{
  "_id": "Jang_Cho",
  "name": "Jang",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/jang_cho.png"},
  "imageDetail": { "url": "/img/jugadoresID/jang_cho.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Corea del Sur",
  "country_image": {"url": "/img/countries/corea_del_sur.png"},
  "teams": [
    {
      "team_id": "Fire_Dragons",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 75,
    "control": 88,
    "technique": 85,
    "pressure": 82,
    "physique": 80,
    "agility": 78,
    "intelligence": 70,
    "kicking": 60,
    "defense": 92,
    "dispute": 75
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Rechace_de_Fuego",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Umi_Wang
{
  "_id": "Umi_Wang",
  "name": "Wang",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/umi_wang.png"},
  "imageDetail": { "url": "/img/jugadoresID/umi_wang.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Corea del Sur",
  "country_image": {"url": "/img/countries/corea_del_sur.png"},
  "teams": [
    {
      "team_id": "Fire_Dragons",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 72,
    "control": 65,
    "technique": 80,
    "pressure": 85,
    "physique": 78,
    "agility": 90,
    "intelligence": 75,
    "kicking": 60,
    "defense": 88,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Llama_Veloz",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},




//Doyo_Hong
{
  "_id": "Doyo_Hong",
  "name": "Hong",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/doyo_hong.png"},
  "imageDetail": { "url": "/img/jugadoresID/doyo_hong.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Corea del Sur",
  "country_image": {"url": "/img/countries/corea_del_sur.png"},
  "teams": [
    {
      "team_id": "Fire_Dragons",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 78,
    "control": 60,
    "technique": 75,
    "pressure": 88,
    "physique": 85,
    "agility": 82,
    "intelligence": 72,
    "kicking": 55,
    "defense": 90,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Corte_Volcanico",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Llama_Veloz",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Minho_Cho
{
  "_id": "Minho_Cho",
  "name": "Minho",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/minho_cho.png"},
  "imageDetail": { "url": "/img/jugadoresID/minho_cho.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Corea del Sur",
  "country_image": {"url": "/img/countries/corea_del_sur.png"},
  "teams": [
    {
      "team_id": "Fire_Dragons",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 82,
    "control": 62,
    "technique": 78,
    "pressure": 90,
    "physique": 88,
    "agility": 75,
    "intelligence": 70,
    "kicking": 58,
    "defense": 94,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Baile_de_Llamas",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Songwan_Ko
{
  "_id": "Songwan_Ko",
  "name": "Ko",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/songwan_ko.png"},
  "imageDetail": { "url": "/img/jugadoresID/songwan_ko.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Corea del Sur",
  "country_image": {"url": "/img/countries/corea_del_sur.png"},
  "teams": [
    {
      "team_id": "Fire_Dragons",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 84,
    "control": 60,
    "technique": 72,
    "pressure": 88,
    "physique": 92,
    "agility": 70,
    "intelligence": 78,
    "kicking": 55,
    "defense": 92,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Llama_Veloz",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Pekyong_Park
{
  "_id": "Pekyong_Park",
  "name": "Park",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/pekyong_park.png"},
  "imageDetail": { "url": "/img/jugadoresID/pekyong_park.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Corea del Sur",
  "country_image": {"url": "/img/countries/corea_del_sur.png"},
  "teams": [
    {
      "team_id": "Fire_Dragons",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 85,
    "control": 78,
    "technique": 82,
    "pressure": 88,
    "physique": 84,
    "agility": 76,
    "intelligence": 80,
    "kicking": 65,
    "defense": 82,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Entrada_de_llamas",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Llama_Veloz",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},




//Changsu_Choi
{
  "_id": "Changsu_Choi",
  "name": "Choi",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/changsu_choi.png"},
  "imageDetail": { "url": "/img/jugadoresID/changsu_choi.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "A+",
  "isCaptain": true,
  "ageGroup": "Junior",
  "country": "Corea del Sur",
  "country_image": {"url": "/img/countries/corea_del_sur.png"},
  "teams": [
    {
      "team_id": "Fire_Dragons",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 82,
    "control": 95,
    "technique": 110,
    "pressure": 92,
    "physique": 80,
    "agility": 88,
    "intelligence": 115,
    "kicking": 85,
    "defense": 88,
    "dispute": 96
  },

  "matchStats": {
    "stamina": 120,
    "tension": 100
  },

  "techniques": [
    { "technique_id": "Tacon_Infernal", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Llama_Veloz", "relation": "creador", "power_modifier": 1.0 }
  ]
},



//Enyong_Kim
{
  "_id": "Enyong_Kim",
  "name": "Kim",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/enyong_kim.png"},
  "imageDetail": { "url": "/img/jugadoresID/enyong_kim.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Juego sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Corea del Sur",
  "country_image": {"url": "/img/countries/corea_del_sur.png"},
  "teams": [
    {
      "team_id": "Fire_Dragons",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 88,
    "control": 75,
    "technique": 70,
    "pressure": 92,
    "physique": 85,
    "agility": 72,
    "intelligence": 68,
    "kicking": 62,
    "defense": 80,
    "dispute": 94
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Tacon_Infernal",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Byron_Love_T3
{
  "_id": "Byron_Love_T3",
  "name": "Aphrodite",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/byron_love_c.png"},
  "imageDetail": { "url": "/img/jugadoresID/byron_love.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "S+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Corea del Sur",
  "country_image": {"url": "/img/countries/corea_del_sur.png"},
  "teams": [
    {
      "team_id": "Fire_Dragons",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 140,
    "control": 135,
    "technique": 145,
    "pressure": 125,
    "physique": 130,
    "agility": 120,
    "intelligence": 120,
    "kicking": 145,
    "defense": 105,
    "dispute": 100
  },

  "matchStats": {
    "stamina": 150,
    "tension": 120
  },

  "techniques": [
    { 
      "technique_id": "Hora_Celestial", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Sabiduria_Divina", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Remate_Celestial", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Omnisabiduria_divina", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Remate_Caotico", 
      "relation": "creador", 
      "power_modifier": 1.0 
    }
  ]
},



//Claude_Beacons_T3
{
  "_id": "Torch_W",
  "name": "Torch",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/torch_w.png"},
  "imageDetail": { "url": "/img/jugadoresID/torch_w.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Afinidad",
  "tier": "S+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Corea del Sur",
  "country_image": {"url": "/img/countries/corea_del_sur.png"},
  "teams": [
    {
      "team_id": "Fire_Dragons",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 135,
    "control": 130,
    "technique": 135,
    "pressure": 110,
    "physique": 120,
    "agility": 130,
    "intelligence": 110,
    "kicking": 135,
    "defense": 100,
    "dispute": 110
  },

  "matchStats": {
    "stamina": 130,
    "tension": 120
  },

  "techniques": [
    { 
      "technique_id": "Llamarada_Atomica", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Remate_Caotico", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    {
      "technique_id": "Ventisca_de_Fuego",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Bryce_Whitingale_T3
{
  "_id": "Gazelle_W",
  "name": "Gazelle",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/Gazelle_w.png"},
  "imageDetail": { "url": "/img/jugadoresID/gazelle_w.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego sucio",
  "tier": "S+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Corea del Sur",
  "country_image": {"url": "/img/countries/corea_del_sur.png"},
  "teams": [
    {
      "team_id": "Fire_Dragons",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 130,
    "control": 125,
    "technique": 135,
    "pressure": 110,
    "physique": 120,
    "agility": 130,
    "intelligence": 110,
    "kicking": 135,
    "defense": 100,
    "dispute": 110
  },

  "matchStats": {
    "stamina": 130,
    "tension": 120
  },

  "techniques": [
    { 
      "technique_id": "Balon_Iceberg", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    { 
      "technique_id": "Remate_Caotico", 
      "relation": "creador", 
      "power_modifier": 1.0 
    },
    {
      "technique_id": "Ventisca_de_Fuego",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//Knights_of_Queen
//Freddy_McQueen
{
  "_id": "Freddy_McQueen",
  "name": "McQueen",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/freddy_mcqueen.png"},
  "imageDetail": { "url": "/img/jugadoresID/freddy_mcqueen.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Inglaterra",
  "country_image": {"url": "/img/countries/inglaterra.png"},
  "teams": [
    {
      "team_id": "Knights_of_Queen",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 84,
    "control": 88,
    "technique": 82,
    "pressure": 80,
    "physique": 85,
    "agility": 74,
    "intelligence": 70,
    "kicking": 60,
    "defense": 90,
    "dispute": 78
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Espada_Defensora",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Gary_Lancaster
{
  "_id": "Gary_Lancaster",
  "name": "Gazzer",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/gary_lancaster.png"},
  "imageDetail": { "url": "/img/jugadoresID/gary_lancaster.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Inglaterra",
  "country_image": {"url": "/img/countries/inglaterra.png"},
  "teams": [
    {
      "team_id": "Knights_of_Queen",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 86,
    "control": 60,
    "technique": 74,
    "pressure": 88,
    "physique": 92,
    "agility": 68,
    "intelligence": 75,
    "kicking": 50,
    "defense": 92,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Jaula_de_Piedra",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//David_Buckingham
{
  "_id": "David_Buckingham",
  "name": "Buckingham",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/david_buckingham.png"},
  "imageDetail": { "url": "/img/jugadoresID/david_buckingham.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Inglaterra",
  "country_image": {"url": "/img/countries/inglaterra.png"},
  "teams": [
    {
      "team_id": "Knights_of_Queen",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 92,
    "control": 58,
    "technique": 72,
    "pressure": 90,
    "physique": 95,
    "agility": 62,
    "intelligence": 70,
    "kicking": 55,
    "defense": 94,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Jaula_de_Piedra",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Lance_Ralton
{
  "_id": "Lance_Ralton",
  "name": "Ralton",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/lance_ralton.png"},
  "imageDetail": { "url": "/img/jugadoresID/lance_ralton.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Inglaterra",
  "country_image": {"url": "/img/countries/inglaterra.png"},
  "teams": [
    {
      "team_id": "Knights_of_Queen",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 80,
    "control": 62,
    "technique": 75,
    "pressure": 92,
    "physique": 84,
    "agility": 88,
    "intelligence": 72,
    "kicking": 50,
    "defense": 86,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Jaula_de_Piedra",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Edge_Ripper
{
  "_id": "Edge_Ripper",
  "name": "Ripper",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/edge_ripper.png"},
  "imageDetail": { "url": "/img/jugadoresID/edge_ripper.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Inglaterra",
  "country_image": {"url": "/img/countries/inglaterra.png"},
  "teams": [
    {
      "team_id": "Knights_of_Queen",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 78,
    "control": 70,
    "technique": 85,
    "pressure": 82,
    "physique": 76,
    "agility": 94,
    "intelligence": 80,
    "kicking": 60,
    "defense": 88,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Jaula_de_Piedra",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Corte_Giratorio",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Peter_Coole
{
  "_id": "Peter_Coole",
  "name": "Coole",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/peter_coole.png"},
  "imageDetail": { "url": "/img/jugadoresID/peter_coole.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Inglaterra",
  "country_image": {"url": "/img/countries/inglaterra.png"},
  "teams": [
    {
      "team_id": "Knights_of_Queen",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 75,
    "control": 88,
    "technique": 85,
    "pressure": 78,
    "physique": 72,
    "agility": 92,
    "intelligence": 86,
    "kicking": 65,
    "defense": 70,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "UltraLuna",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Balon_Galgo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Gary_Mane
{
  "_id": "Gary_Mane",
  "name": "Mane",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/gary_mane.png"},
  "imageDetail": { "url": "/img/jugadoresID/gary_mane.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Inglaterra",
  "country_image": {"url": "/img/countries/inglaterra.png"},
  "teams": [
    {
      "team_id": "Knights_of_Queen",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 82,
    "control": 84,
    "technique": 80,
    "pressure": 75,
    "physique": 88,
    "agility": 70,
    "intelligence": 82,
    "kicking": 68,
    "defense": 78,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "UltraLuna",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Giro_Bobina",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Paul_Appleton
{
  "_id": "Paul_Appleton",
  "name": "Appleton",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/paul_appleton.png"},
  "imageDetail": { "url": "/img/jugadoresID/paul_appleton.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Inglaterra",
  "country_image": {"url": "/img/countries/inglaterra.png"},
  "teams": [
    {
      "team_id": "Knights_of_Queen",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 74,
    "control": 86,
    "technique": 82,
    "pressure": 85,
    "physique": 70,
    "agility": 88,
    "intelligence": 90,
    "kicking": 62,
    "defense": 75,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "UltraLuna",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Eric_Purpleton
{
  "_id": "Eric_Purpleton",
  "name": "Purpleton",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/eric_purpleton.png"},
  "imageDetail": { "url": "/img/jugadoresID/eric_purpleton.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Inglaterra",
  "country_image": {"url": "/img/countries/inglaterra.png"},
  "teams": [
    {
      "team_id": "Knights_of_Queen",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 78,
    "control": 82,
    "technique": 88,
    "pressure": 80,
    "physique": 75,
    "agility": 85,
    "intelligence": 92,
    "kicking": 76,
    "defense": 72,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Entrada_de_llamas",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Ataque_de_Paladin",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Edgar_Partinus
{
  "_id": "Edgar_Partinus",
  "name": "Edgar",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/edgar_partinus.png"},
  "imageDetail": { "url": "/img/jugadoresID/edgar_partinus.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "S",
  "isCaptain": true,
  "ageGroup": "Junior",
  "country": "Inglaterra",
  "country_image": {"url": "/img/countries/inglaterra.png"},
  "teams": [
    {
      "team_id": "Knights_of_Queen",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 115,
    "control": 125,
    "technique": 135,
    "pressure": 100,
    "physique": 120,
    "agility": 115,
    "intelligence": 100,
    "kicking": 135,
    "defense": 90,
    "dispute": 110
  },

  "matchStats": {
    "stamina": 120,
    "tension": 100
  },

  "techniques": [
    { "technique_id": "Excalibur", "relation": "creador", "power_modifier": 1.0 },
    { "technique_id": "Ataque_de_Paladin", "relation": "creador", "power_modifier": 1.0 }
  ]
},



//Philip_Arwen
{
  "_id": "Philip_Arwen",
  "name": "Arwen",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/philip_arwen.png"},
  "imageDetail": { "url": "/img/jugadoresID/philip_arwen.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Inglaterra",
  "country_image": {"url": "/img/countries/inglaterra.png"},
  "teams": [
    {
      "team_id": "Knights_of_Queen",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 84,
    "control": 80,
    "technique": 82,
    "pressure": 78,
    "physique": 85,
    "agility": 90,
    "intelligence": 75,
    "kicking": 94,
    "defense": 45,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Ataque_de_Paladin",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Espejismo_De_Balon",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Los Emperadores
//Nacho_Ortega
{
  "_id": "Nacho_Ortega",
  "name": "Ortega",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/nacho_ortega.png"},
  "imageDetail": { "url": "/img/jugadoresID/nacho_ortega.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Argentina",
  "country_image": {"url": "/img/countries/argentina.png"},
  "teams": [
    {
      "team_id": "Los_Emperadores",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 90,
    "control": 92,
    "technique": 85,
    "pressure": 88,
    "physique": 84,
    "agility": 70,
    "intelligence": 72,
    "kicking": 50,
    "defense": 96,
    "dispute": 75
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Millon_de_Manos",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Thiago_Torres
{
  "_id": "Thiago_Torres",
  "name": "Torres",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/thiago_torres.png"},
  "imageDetail": { "url": "/img/jugadoresID/thiago_torres.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "S+",
  "isCaptain": true,
  "ageGroup": "Junior",
  "country": "Argentina",
  "country_image": {"url": "/img/countries/argentina.png"},
  "teams": [
    {
      "team_id": "Los_Emperadores",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 125,
    "control": 130,
    "technique": 135,
    "pressure": 110,
    "physique": 145,
    "agility": 120,
    "intelligence": 110,
    "kicking": 110,
    "defense": 145,
    "dispute": 125
  },

  "matchStats": {
    "stamina": 130,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Muro_de_Hierro",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Felipe_Palacios
{
  "_id": "Felipe_Palacios",
  "name": "Palacios",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/felipe_palacios.png"},
  "imageDetail": { "url": "/img/jugadoresID/felipe_palacios.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Argentina",
  "country_image": {"url": "/img/countries/argentina.png"},
  "teams": [
    {
      "team_id": "Los_Emperadores",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 78,
    "control": 82,
    "technique": 85,
    "pressure": 80,
    "physique": 82,
    "agility": 88,
    "intelligence": 74,
    "kicking": 55,
    "defense": 86,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Balon_Falso",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Miquel_Ros
{
  "_id": "Miquel_Ros",
  "name": "Ros",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/miquel_ros.png"},
  "imageDetail": { "url": "/img/jugadoresID/miquel_ros.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Argentina",
  "country_image": {"url": "/img/countries/argentina.png"},
  "teams": [
    {
      "team_id": "Los_Emperadores",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 88,
    "control": 62,
    "technique": 70,
    "pressure": 85,
    "physique": 92,
    "agility": 74,
    "intelligence": 78,
    "kicking": 50,
    "defense": 90,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Superarmadillo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Ramón_Martínez
{
  "_id": "Ramon_Martinez",
  "name": "Martínez",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/ramon_martinez.png"},
  "imageDetail": { "url": "/img/jugadoresID/ramon_martinez.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Argentina",
  "country_image": {"url": "/img/countries/argentina.png"},
  "teams": [
    {
      "team_id": "Los_Emperadores",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 94,
    "control": 58,
    "technique": 68,
    "pressure": 92,
    "physique": 96,
    "agility": 60,
    "intelligence": 72,
    "kicking": 55,
    "defense": 92,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Voltereta_Circense",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},

//Enrique_Caroso
{
  "_id": "Enrique_Caroso",
  "name": "Caroso",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/enrique_caroso.png"},
  "imageDetail": { "url": "/img/jugadoresID/enrique_caroso.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Argentina",
  "country_image": {"url": "/img/countries/argentina.png"},
  "teams": [
    {
      "team_id": "Los_Emperadores",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 72,
    "control": 88,
    "technique": 85,
    "pressure": 75,
    "physique": 70,
    "agility": 94,
    "intelligence": 82,
    "kicking": 64,
    "defense": 78,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Balon_Galgo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Sergio_López
{
  "_id": "Sergio_Lopez",
  "name": "López",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/sergio_lopez.png"},
  "imageDetail": { "url": "/img/jugadoresID/sergio_lopez.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Argentina",
  "country_image": {"url": "/img/countries/argentina.png"},
  "teams": [
    {
      "team_id": "Los_Emperadores",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 70,
    "control": 90,
    "technique": 88,
    "pressure": 72,
    "physique": 74,
    "agility": 95,
    "intelligence": 84,
    "kicking": 60,
    "defense": 68,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 70
  },

  "techniques": [
    {
      "technique_id": "Imagen_Residual",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Roberto_Torinni
{
  "_id": "Roberto_Torinni",
  "name": "Torinni",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/roberto_torinni.png"},
  "imageDetail": { "url": "/img/jugadoresID/roberto_torinni.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Argentina",
  "country_image": {"url": "/img/countries/argentina.png"},
  "teams": [
    {
      "team_id": "Los_Emperadores",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 76,
    "control": 84,
    "technique": 88,
    "pressure": 82,
    "physique": 75,
    "agility": 92,
    "intelligence": 80,
    "kicking": 62,
    "defense": 78,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Balon_Galgo",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Ciclon",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Pablo_Castiglione
{
  "_id": "Pablo_Castiglione",
  "name": "Castiglione",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/pablo_castiglione.png"},
  "imageDetail": { "url": "/img/jugadoresID/pablo_castiglione.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Argentina",
  "country_image": {"url": "/img/countries/argentina.png"},
  "teams": [
    {
      "team_id": "Los_Emperadores",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 74,
    "control": 82,
    "technique": 90,
    "pressure": 85,
    "physique": 72,
    "agility": 95,
    "intelligence": 88,
    "kicking": 78,
    "defense": 65,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Remate_del_Aguila",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},

//Leone_Balone
{
  "_id": "Leone_Balone",
  "name": "Balone",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/leone_balone.png"},
  "imageDetail": { "url": "/img/jugadoresID/leone_balone.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Argentina",
  "country_image": {"url": "/img/countries/argentina.png"},
  "teams": [
    {
      "team_id": "Los_Emperadores",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 92,
    "control": 85,
    "technique": 98,
    "pressure": 80,
    "physique": 88,
    "agility": 94,
    "intelligence": 82,
    "kicking": 118,
    "defense": 40,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Remate_del_Aguila",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Llamarada_Infernal",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Diego_Oro
{
  "_id": "Diego_Oro",
  "name": "Oro",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/diego_oro.png"},
  "imageDetail": { "url": "/img/jugadoresID/diego_oro.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Argentina",
  "country_image": {"url": "/img/countries/argentina.png"},
  "teams": [
    {
      "team_id": "Los_Emperadores",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 86,
    "control": 78,
    "technique": 80,
    "pressure": 75,
    "physique": 90,
    "agility": 82,
    "intelligence": 70,
    "kicking": 92,
    "defense": 42,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Remate_del_Aguila",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Llamarada_Infernal",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Unicorn
//Billy_Dash
{
  "_id": "Billy_Dash",
  "name": "Dash",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/billy_dash.png"},
  "imageDetail": { "url": "/img/jugadoresID/billy_dash.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "USA",
  "country_image": {"url": "/img/countries/eeuu.png"},
  "teams": [
    {
      "team_id": "Unicorn",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 85,
    "control": 88,
    "technique": 82,
    "pressure": 84,
    "physique": 80,
    "agility": 88,
    "intelligence": 75,
    "kicking": 50,
    "defense": 92,
    "dispute": 78
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Golpes_de_Luz",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Ted_Bryant
{
  "_id": "Ted_Bryant",
  "name": "Bryant",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/ted_bryant.png"},
  "imageDetail": { "url": "/img/jugadoresID/ted_bryant.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "USA",
  "country_image": {"url": "/img/countries/eeuu.png"},
  "teams": [
    {
      "team_id": "Unicorn",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 82,
    "control": 65,
    "technique": 78,
    "pressure": 88,
    "physique": 90,
    "agility": 84,
    "intelligence": 70,
    "kicking": 52,
    "defense": 86,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Robo_Veloz",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Tony_Strider
{
  "_id": "Tony_Strider",
  "name": "Strider",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/tony_strider.png"},
  "imageDetail": { "url": "/img/jugadoresID/tony_strider.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "USA",
  "country_image": {"url": "/img/countries/eeuu.png"},
  "teams": [
    {
      "team_id": "Unicorn",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 78,
    "control": 70,
    "technique": 82,
    "pressure": 85,
    "physique": 80,
    "agility": 98,
    "intelligence": 76,
    "kicking": 50,
    "defense": 88,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 90
  },

  "techniques": [
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Drake_Dynamo
{
  "_id": "Drake_Dynamo",
  "name": "Dynamo",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/drake_dynamo.png"},
  "imageDetail": { "url": "/img/jugadoresID/drake_dynamo.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "USA",
  "country_image": {"url": "/img/countries/eeuu.png"},
  "teams": [
    {
      "team_id": "Unicorn",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 90,
    "control": 68,
    "technique": 75,
    "pressure": 82,
    "physique": 95,
    "agility": 70,
    "intelligence": 74,
    "kicking": 55,
    "defense": 92,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Megaterremoto",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Bobby_Shearer
{
  "_id": "Bobby_Shearer_W",
  "name": "Bobby",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/bobby_shearer_w.png"},
  "imageDetail": { "url": "/img/jugadoresID/bobby_shearer_w.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "USA",
  "country_image": {"url": "/img/countries/eeuu.png"},
  "teams": [
    {
      "team_id": "Unicorn",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 110,
    "control": 105,
    "technique": 100,
    "pressure": 125,
    "physique": 125,
    "agility": 125,
    "intelligence": 100,
    "kicking": 90,
    "defense": 135,
    "dispute": 120
  },

  "matchStats": {
    "stamina": 120,
    "tension": 100
  },

  "techniques": [
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Corte_Volcanico",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Steve_Woodmark
{
  "_id": "Steve_Woodmark",
  "name": "Woodmark",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/steve_woodmark.png"},
  "imageDetail": { "url": "/img/jugadoresID/steve_woodmark.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "USA",
  "country_image": {"url": "/img/countries/eeuu.png"},
  "teams": [
    {
      "team_id": "Unicorn",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 85,
    "control": 72,
    "technique": 78,
    "pressure": 90,
    "physique": 88,
    "agility": 76,
    "intelligence": 72,
    "kicking": 60,
    "defense": 84,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},





//Erik_Eagle
{
  "_id": "Erik_Eagle_W",
  "name": "Erik Eagle",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/erik_eagle_w.png"},
  "imageDetail": { "url": "/img/jugadoresID/erik_eagle_w.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "USA",
  "country_image": {"url": "/img/countries/eeuu.png"},
  "teams": [
    {
      "team_id": "Unicorn",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 110,
    "control": 115,
    "technique": 120,
    "pressure": 10,
    "physique": 100,
    "agility": 130,
    "intelligence": 100,
    "kicking": 120,
    "defense": 100,
    "dispute": 105
  },

  "matchStats": {
    "stamina": 120,
    "tension": 110
  },

  "techniques": [
    {
      "technique_id": "Remate_Pegaso",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Espejismo_De_Balon",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Baile_de_Llamas",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Gran_Lobo",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Shane_Pierce
{
  "_id": "Shane_Pierce",
  "name": "Pierce",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/shane_pierce.png"},
  "imageDetail": { "url": "/img/jugadoresID/shane_pierce.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "USA",
  "country_image": {"url": "/img/countries/eeuu.png"},
  "teams": [
    {
      "team_id": "Unicorn",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 80,
    "control": 84,
    "technique": 82,
    "pressure": 78,
    "physique": 85,
    "agility": 74,
    "intelligence": 80,
    "kicking": 70,
    "defense": 76,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 80
  },

  "techniques": [
    {
      "technique_id": "Chut_Congelante",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Mark_Krueger
{
  "_id": "Mark_Krueger",
  "name": "Krueger",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/mark_krueger.png"},
  "imageDetail": { "url": "/img/jugadoresID/mark_krueger.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "S",
  "isCaptain": true,
  "ageGroup": "Junior",
  "country": "USA",
  "country_image": {"url": "/img/countries/eeuu.png"},
  "teams": [
    {
      "team_id": "Unicorn",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 105,
    "control": 110,
    "technique": 115,
    "pressure": 100,
    "physique": 105,
    "agility": 115,
    "intelligence": 120,
    "kicking": 120,
    "defense": 90,
    "dispute": 110
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Remate_Unicornio",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Gran_Lobo",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Dylan_Keats
{
  "_id": "Dylan_Keats",
  "name": "Keats",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/dylan_keats.png"},
  "imageDetail": { "url": "/img/jugadoresID/dylan_keats.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "USA",
  "country_image": {"url": "/img/countries/eeuu.png"},
  "teams": [
    {
      "team_id": "Unicorn",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 110,
    "control": 105,
    "technique": 125,
    "pressure": 115,
    "physique": 105,
    "agility": 105,
    "intelligence": 100,
    "kicking": 115,
    "defense": 105,
    "dispute": 100
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Gran_Lobo",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Remate_Unicornio",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Truco_Balonazo",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Gabriel_Jax
{
  "_id": "Gabriel_Jax",
  "name": "Jax",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/gabriel_jax.png"},
  "imageDetail": { "url": "/img/jugadoresID/gabriel_jax.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "USA",
  "country_image": {"url": "/img/countries/eeuu.png"},
  "teams": [
    {
      "team_id": "Unicorn",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 84,
    "control": 72,
    "technique": 78,
    "pressure": 82,
    "physique": 88,
    "agility": 80,
    "intelligence": 68,
    "kicking": 90,
    "defense": 40,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Remate_Pegaso",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Orfeo
//Gigi_Blasi
{
  "_id": "Gigi_Blasi",
  "name": "Gigi Blasi",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/gigi_blasi.png"},
  "imageDetail": { "url": "/img/jugadoresID/gigi_blasi.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Italia",
  "country_image": {"url": "/img/countries/italia.png"},
  "teams": [
    {
      "team_id": "Orfeo",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 88,
    "control": 92,
    "technique": 85,
    "pressure": 90,
    "physique": 82,
    "agility": 86,
    "intelligence": 80,
    "kicking": 50,
    "defense": 95,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Guardia_del_Coliseo",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Vento_Galliano
{
  "_id": "Vento_Galliano",
  "name": "Galliano",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/vento_galliano.png"},
  "imageDetail": { "url": "/img/jugadoresID/vento_galliano.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Italia",
  "country_image": {"url": "/img/countries/italia.png"},
  "teams": [
    {
      "team_id": "Orfeo",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 78,
    "control": 72,
    "technique": 85,
    "pressure": 88,
    "physique": 80,
    "agility": 95,
    "intelligence": 84,
    "kicking": 50,
    "defense": 90,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Entrada_Huracan",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Entrada_Tormenta",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Otto_Nobili
{
  "_id": "Otto_Nobili",
  "name": "Nobili",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/otto_nobili.png"},
  "imageDetail": { "url": "/img/jugadoresID/otto_nobili.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Italia",
  "country_image": {"url": "/img/countries/italia.png"},
  "teams": [
    {
      "team_id": "Orfeo",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 92,
    "control": 65,
    "technique": 70,
    "pressure": 95,
    "physique": 102,
    "agility": 68,
    "intelligence": 75,
    "kicking": 48,
    "defense": 94,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Sismo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Anton_Graziuso
{
  "_id": "Anton_Graziuso",
  "name": "Graziuso",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/anton_graziuso.png"},
  "imageDetail": { "url": "/img/jugadoresID/anton_graziuso.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Italia",
  "country_image": {"url": "/img/countries/italia.png"},
  "teams": [
    {
      "team_id": "Orfeo",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 95,
    "control": 62,
    "technique": 74,
    "pressure": 98,
    "physique": 110,
    "agility": 65,
    "intelligence": 72,
    "kicking": 50,
    "defense": 96,
    "dispute": 92
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Defensa_Multiple",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Marco_Maserati
{
  "_id": "Marco_Maserati",
  "name": "Maserati",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/marco_maserati.png"},
  "imageDetail": { "url": "/img/jugadoresID/marco_maserati.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Italia",
  "country_image": {"url": "/img/countries/italia.png"},
  "teams": [
    {
      "team_id": "Orfeo",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 88,
    "control": 70,
    "technique": 82,
    "pressure": 92,
    "physique": 85,
    "agility": 88,
    "intelligence": 78,
    "kicking": 52,
    "defense": 90,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "UltraLuna",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Voltereta_Circense",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Angelo_Gabrini
{
  "_id": "Angelo_Gabrini",
  "name": "Gabrini",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/angelo_gabrini.png"},
  "imageDetail": { "url": "/img/jugadoresID/angelo_gabrini.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Italia",
  "country_image": {"url": "/img/countries/italia.png"},
  "teams": [
    {
      "team_id": "Orfeo",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 70,
    "control": 88,
    "technique": 92,
    "pressure": 75,
    "physique": 72,
    "agility": 105,
    "intelligence": 90,
    "kicking": 76,
    "defense": 68,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Flecha_Divina",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Impulso_Brillante",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Hidetoshi_Nakata
{
  "_id": "Hidetoshi_Nakata",
  "name": "Nakata",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/hidetoshi_nakata.png"},
  "imageDetail": { "url": "/img/jugadoresID/hidetoshi_nakata.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Tension",
  "tier": "S+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Italia",
  "country_image": {"url": "/img/countries/italia.png"},
  "teams": [
    {
      "team_id": "Orfeo",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 135,
    "control": 120,
    "technique": 130,
    "pressure": 135,
    "physique": 130,
    "agility": 135,
    "intelligence": 125,
    "kicking": 140,
    "defense": 100,
    "dispute": 105
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Disparo_Valiente",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Giacomo_Yani
{
  "_id": "Giacomo_Yani",
  "name": "Yani",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/giacomo_yani.png"},
  "imageDetail": { "url": "/img/jugadoresID/giacomo_yani.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Italia",
  "country_image": {"url": "/img/countries/italia.png"},
  "teams": [
    {
      "team_id": "Orfeo",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 82,
    "control": 85,
    "technique": 80,
    "pressure": 88,
    "physique": 84,
    "agility": 76,
    "intelligence": 82,
    "kicking": 65,
    "defense": 85,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Ataque_Afilado",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Gianluca_Zanardi
{
  "_id": "Gianluca_Zanardi",
  "name": "Zanardi",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/gianluca_zanardi.png"},
  "imageDetail": { "url": "/img/jugadoresID/gianluca_zanardi.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Italia",
  "country_image": {"url": "/img/countries/italia.png"},
  "teams": [
    {
      "team_id": "Orfeo",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 78,
    "control": 82,
    "technique": 85,
    "pressure": 76,
    "physique": 80,
    "agility": 84,
    "intelligence": 88,
    "kicking": 70,
    "defense": 82,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Pantalla_Acuatica",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Paolo_Bianchi
{
  "_id": "Paolo_Bianchi",
  "name": "Paolo Bianchi",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/paolo_bianchi.png"},
  "imageDetail": { "url": "/img/jugadoresID/paolo_bianchi.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "secondaryPosition": "MD",
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "S+",
  "isCaptain": true,
  "ageGroup": "Junior",
  "country": "Italia",
  "country_image": {"url": "/img/countries/italia.png"},
  "teams": [
    {
      "team_id": "Orfeo",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 135,
    "control": 135,
    "technique": 145,
    "pressure": 135,
    "physique": 125,
    "agility": 140,
    "intelligence": 145,
    "kicking": 130,
    "defense": 125,
    "dispute": 125
  },

  "matchStats": {
    "stamina": 140,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Flecha_Divina",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Himno_de_Athenea",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Espada_de_Odin",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Pared_Solitaria",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},

//Raffaele_Generani
{
  "_id": "Raffaele_Generani",
  "name": "Generani",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/raffaele_generani.png"},
  "imageDetail": { "url": "/img/jugadoresID/raffaele_generani.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Italia",
  "country_image": {"url": "/img/countries/italia.png"},
  "teams": [
    {
      "team_id": "Orfeo",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 82,
    "control": 75,
    "technique": 88,
    "pressure": 70,
    "physique": 78,
    "agility": 105,
    "intelligence": 80,
    "kicking": 86,
    "defense": 42,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Chut_Congelante",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Falcao_Da_Silva
{
  "_id": "Falcao_Da_Silva",
  "name": "Da Silva",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/falcao_da_silva.png"},
  "imageDetail": { "url": "/img/jugadoresID/falcao_da_silva.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Brasil",
  "country_image": {"url": "/img/countries/brasil.png"},
  "teams": [
    {
      "team_id": "Os_Reis",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 92,
    "control": 95,
    "technique": 88,
    "pressure": 85,
    "physique": 90,
    "agility": 84,
    "intelligence": 78,
    "kicking": 55,
    "defense": 96,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Parada_Capoeira",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Carlos_Lagarto
{
  "_id": "Carlos_Lagarto",
  "name": "Lagarto",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/carlos_lagarto.png"},
  "imageDetail": { "url": "/img/jugadoresID/carlos_lagarto.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Brasil",
  "country_image": {"url": "/img/countries/brasil.png"},
  "teams": [
    {
      "team_id": "Os_Reis",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 85,
    "control": 70,
    "technique": 78,
    "pressure": 92,
    "physique": 88,
    "agility": 94,
    "intelligence": 75,
    "kicking": 50,
    "defense": 92,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Entrada_Rodante",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Antonio_Bagre
{
  "_id": "Antonio_Bagre",
  "name": "Bagre",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/antonio_bagre.png"},
  "imageDetail": { "url": "/img/jugadoresID/antonio_bagre.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Brasil",
  "country_image": {"url": "/img/countries/brasil.png"},
  "teams": [
    {
      "team_id": "Os_Reis",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 80,
    "control": 68,
    "technique": 82,
    "pressure": 85,
    "physique": 82,
    "agility": 98,
    "intelligence": 72,
    "kicking": 45,
    "defense": 88,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Ciclon",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Monstro_Ximenes
{
  "_id": "Monstro_Ximenes",
  "name": "Monstro",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/monstro_ximenes.png"},
  "imageDetail": { "url": "/img/jugadoresID/monstro_ximenes.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Brasil",
  "country_image": {"url": "/img/countries/brasil.png"},
  "teams": [
    {
      "team_id": "Os_Reis",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 94,
    "control": 60,
    "technique": 72,
    "pressure": 90,
    "physique": 105,
    "agility": 70,
    "intelligence": 65,
    "kicking": 55,
    "defense": 92,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Entrada_Rodante",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Formiga_Clemens
{
  "_id": "Formiga_Clemens",
  "name": "Clemens",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/formiga_clemens.png"},
  "imageDetail": { "url": "/img/jugadoresID/formiga_clemens.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Brasil",
  "country_image": {"url": "/img/countries/brasil.png"},
  "teams": [
    {
      "team_id": "Os_Reis",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 88,
    "control": 62,
    "technique": 75,
    "pressure": 94,
    "physique": 85,
    "agility": 90,
    "intelligence": 60,
    "kicking": 40,
    "defense": 93,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Giro_de_Mono",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Presa_Passos
{
  "_id": "Presa_Passos",
  "name": "Passos",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/presa_passos.png"},
  "imageDetail": { "url": "/img/jugadoresID/presa_passos.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Brasil",
  "country_image": {"url": "/img/countries/brasil.png"},
  "teams": [
    {
      "team_id": "Os_Reis",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 78,
    "control": 85,
    "technique": 82,
    "pressure": 74,
    "physique": 80,
    "agility": 92,
    "intelligence": 86,
    "kicking": 65,
    "defense": 80,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Entrada_Rodante",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Borboleta_Barboza
{
  "_id": "Borboleta_Barboza",
  "name": "Barboza",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/borboleta_barboza.png"},
  "imageDetail": { "url": "/img/jugadoresID/borboleta_barboza.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Brasil",
  "country_image": {"url": "/img/countries/brasil.png"},
  "teams": [
    {
      "team_id": "Os_Reis",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 72,
    "control": 95,
    "technique": 98,
    "pressure": 68,
    "physique": 70,
    "agility": 110,
    "intelligence": 92,
    "kicking": 74,
    "defense": 62,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Regate_Espejismo",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Impulso_Brillante",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Coruja_Cerezo
{
  "_id": "Coruja_Cerezo",
  "name": "Cerezo",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/coruja_cerezo.png"},
  "imageDetail": { "url": "/img/jugadoresID/coruja_cerezo.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Brasil",
  "country_image": {"url": "/img/countries/brasil.png"},
  "teams": [
    {
      "team_id": "Os_Reis",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 85,
    "control": 88,
    "technique": 90,
    "pressure": 78,
    "physique": 82,
    "agility": 80,
    "intelligence": 95,
    "kicking": 68,
    "defense": 84,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Impulso_Brillante",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Aceleracion",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Leonardo_Almeida
{
  "_id": "Leonardo_Almeida",
  "name": "Almeida",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/leonardo_almeida.png"},
  "imageDetail": { "url": "/img/jugadoresID/leonardo_almeida.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "secondaryPosition": "FW",
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Brasil",
  "country_image": {"url": "/img/countries/brasil.png"},
  "teams": [
    {
      "team_id": "Os_Reis",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 80,
    "control": 92,
    "technique": 95,
    "pressure": 75,
    "physique": 84,
    "agility": 98,
    "intelligence": 90,
    "kicking": 88,
    "defense": 65,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Tornado_Inverso",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Superelastico",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Mac_Robingo
{
  "_id": "Mac_Robingo",
  "name": "Mac Robingo",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/mac_robingo.png"},
  "imageDetail": { "url": "/img/jugadoresID/mac_robingo.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "S+",
  "isCaptain": true,
  "ageGroup": "Junior",
  "country": "Brasil",
  "country_image": {"url": "/img/countries/brasil.png"},
  "teams": [
    {
      "team_id": "Os_Reis",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 135,
    "control": 135,
    "technique": 125,
    "pressure": 130,
    "physique": 140,
    "agility": 120,
    "intelligence": 110,
    "kicking": 130,
    "defense": 100,
    "dispute": 105
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Golpe_de_Samba",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Superelastico",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Lisensiado
{
  "_id": "Lisensiado",
  "name": "Lisensiado",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/lisensiado.png"},
  "imageDetail": { "url": "/img/jugadoresID/lisensiado.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "S+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Brasil",
  "country_image": {"url": "/img/countries/brasil.png"},
  "teams": [
    {
      "team_id": "Os_Reis",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 150,
    "control": 150,
    "technique": 150,
    "pressure": 150,
    "physique": 150,
    "agility": 150,
    "intelligence": 150,
    "kicking": 150,
    "defense": 150,
    "dispute": 150
  },

  "matchStats": {
    "stamina": 150,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Robo_Colombiano",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Tiro_RB6",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Aprobada_Historica",
      "relation": "real",
      "power_modifier": 10
    }
  ]
},




//Little gigants
//Hector_Helio
{
  "_id": "Hector_Helio",
  "name": "Helio",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/hector_helio.png"},
  "imageDetail": { "url": "/img/jugadoresID/hector_helio.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "secondaryPosition": "FW",
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "S+",
  "isCaptain": true,
  "ageGroup": "Junior",
  "country": "Costail",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Little_Giants",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 145,
    "control": 120,
    "technique": 145,
    "pressure": 130,
    "physique": 145,
    "agility": 135,
    "intelligence": 110,
    "kicking": 125,
    "defense": 115,
    "dispute": 120
  },

  "matchStats": {
    "stamina": 140,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Mano_Celestial_X",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Mano_Espiritual",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Canon_X",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Zephyr_Vitesse
{
  "_id": "Zephyr_Vitesse",
  "name": "Vitesse",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/zephyr_vitesse.png"},
  "imageDetail": { "url": "/img/jugadoresID/zephyr_vitesse.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Costail",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Little_Giants",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 75,
    "control": 82,
    "technique": 88,
    "pressure": 85,
    "physique": 78,
    "agility": 115,
    "intelligence": 80,
    "kicking": 60,
    "defense": 92,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Regate_Multiple",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Defensa_Multiple",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Walter_Mountain
{
  "_id": "Walter_Mountain",
  "name": "Mountain",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/walter_mountain.png"},
  "imageDetail": { "url": "/img/jugadoresID/walter_mountain.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Costail",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Little_Giants",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 115,
    "control": 55,
    "technique": 68,
    "pressure": 98,
    "physique": 120,
    "agility": 45,
    "intelligence": 70,
    "kicking": 50,
    "defense": 96,
    "dispute": 95
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Megaterremoto",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Jimi_Gaines
{
  "_id": "Jimi_Gaines",
  "name": "Gaines",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/jimi_gaines.png"},
  "imageDetail": { "url": "/img/jugadoresID/jimi_gaines.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Costail",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Little_Giants",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 84,
    "control": 70,
    "technique": 85,
    "pressure": 92,
    "physique": 88,
    "agility": 80,
    "intelligence": 76,
    "kicking": 50,
    "defense": 94,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Ataque_Sombrio",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Imagen_Residual",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Ian_Ferrum
{
  "_id": "Ian_Ferrum",
  "name": "Ferrum",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/ian_ferrum.png"},
  "imageDetail": { "url": "/img/jugadoresID/ian_ferrum.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Costail",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Little_Giants",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 94,
    "control": 65,
    "technique": 78,
    "pressure": 96,
    "physique": 102,
    "agility": 70,
    "intelligence": 68,
    "kicking": 50,
    "defense": 90,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Regate_Espejismo",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Baile_de_llamas",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Quint_Hampton
{
  "_id": "Quint_Hampton",
  "name": "Hampton",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/quint_hampton.png"},
  "imageDetail": { "url": "/img/jugadoresID/quint_hampton.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Costail",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Little_Giants",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 70,
    "control": 88,
    "technique": 92,
    "pressure": 72,
    "physique": 75,
    "agility": 105,
    "intelligence": 84,
    "kicking": 62,
    "defense": 78,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "acelerrelampago",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Yasir_Haddad
{
  "_id": "Yasir_Haddad",
  "name": "Haddad",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/yasir_haddad.png"},
  "imageDetail": { "url": "/img/jugadoresID/yasir_haddad.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Costail",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Little_Giants",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 76,
    "control": 84,
    "technique": 90,
    "pressure": 78,
    "physique": 72,
    "agility": 98,
    "intelligence": 85,
    "kicking": 74,
    "defense": 70,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Cabezazo_Kung_Fu",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Torbellino_Dragon",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Keith_Ryan
{
  "_id": "Keith_Ryan",
  "name": "Ryan",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/keith_ryan.png"},
  "imageDetail": { "url": "/img/jugadoresID/keith_ryan.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Costail",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Little_Giants",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 82,
    "control": 86,
    "technique": 88,
    "pressure": 80,
    "physique": 85,
    "agility": 90,
    "intelligence": 82,
    "kicking": 84,
    "defense": 76,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Chut_Granada",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Balon_Falso",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},




//Maximino_Cruz
{
  "_id": "Maximino_Cruz",
  "name": "Maxi",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/maximino_cruz.png"},
  "imageDetail": { "url": "/img/jugadoresID/maximino_cruz.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "S",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Costail",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Little_Giants",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 120,
    "control": 115,
    "technique": 125,
    "pressure": 110,
    "physique": 100,
    "agility": 135,
    "intelligence": 90,
    "kicking": 100,
    "defense": 105,
    "dispute": 120
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Patin_Aereo",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "acelerrelampago",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Regate_Espejismo",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Gareth_Flare
{
  "_id": "Gareth_Flare",
  "name": "Flare",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/gareth_flare.png"},
  "imageDetail": { "url": "/img/jugadoresID/gareth_flare.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Costail",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Little_Giants",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 88,
    "control": 82,
    "technique": 90,
    "pressure": 75,
    "physique": 80,
    "agility": 95,
    "intelligence": 84,
    "kicking": 92,
    "defense": 55,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Tornado_de_Fuego",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Drago_Hill
{
  "_id": "Drago_Hill",
  "name": "Drago",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/drago_hill.png"},
  "imageDetail": { "url": "/img/jugadoresID/drago_hill.png" },  
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Costail",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Little_Giants",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 112,
    "control": 75,
    "technique": 80,
    "pressure": 90,
    "physique": 108,
    "agility": 85,
    "intelligence": 72,
    "kicking": 115,
    "defense": 50,
    "dispute": 105
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Mandibulas_Dobles",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Patin_Aereo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Neo Japon
//Joseph_King_Neo
{
  "_id": "Joseph_King_Neo",
  "name": "King",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/joseph_king_neo.png"},
  "imageDetail": { "url": "/img/jugadoresID/king.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Neo_Japon",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 98,
    "control": 92,
    "technique": 95,
    "pressure": 90,
    "physique": 88,
    "agility": 84,
    "intelligence": 86,
    "kicking": 65,
    "defense": 96,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Muralla_Infinita",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Destroza_Taladros",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Alan_Master_Neo
{
  "_id": "Alan_Master_Neo",
  "name": "Master",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/alan_master_neo.png"},
  "imageDetail": { "url": "/img/jugadoresID/master.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Neo_Japon",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 82,
    "control": 74,
    "technique": 88,
    "pressure": 90,
    "physique": 80,
    "agility": 95,
    "intelligence": 78,
    "kicking": 55,
    "defense": 92,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Zack_Cummings_Neo
{
  "_id": "Zack_Cummings_Neo",
  "name": "Zohen",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/zack_cummings_neo.png"},
  "imageDetail": { "url": "/img/jugadoresID/zohen.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Neo_Japon",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 95,
    "control": 60,
    "technique": 72,
    "pressure": 94,
    "physique": 105,
    "agility": 65,
    "intelligence": 70,
    "kicking": 50,
    "defense": 88,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Sismo",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Argie_Bargie_Neo
{
  "_id": "Argie_Bargie_Neo",
  "name": "Bargie",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/argie_bargie_neo.png"},
  "imageDetail": { "url": "/img/jugadoresID/bargie_rx.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Neo_Japon",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 88,
    "control": 68,
    "technique": 82,
    "pressure": 92,
    "physique": 85,
    "agility": 80,
    "intelligence": 75,
    "kicking": 50,
    "defense": 90,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Daniel_Hatch_Neo
{
  "_id": "Daniel_Hatch_Neo",
  "name": "Hatch",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/daniel_hatch_neo.png"},
  "imageDetail": { "url": "/img/jugadoresID/hatch.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Neo_Japon",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 85,
    "control": 72,
    "technique": 94,
    "pressure": 88,
    "physique": 82,
    "agility": 88,
    "intelligence": 80,
    "kicking": 86,
    "defense": 88,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Chut_De_Los_100_Toques",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Barrido_Defensivo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Neil_Turner_Neo
{
  "_id": "Neil_Turner_Neo",
  "name": "Turner",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/neil_turner_neo.png"},
  "imageDetail": { "url": "/img/jugadoresID/turner.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Neo_Japon",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 80,
    "control": 88,
    "technique": 96,
    "pressure": 78,
    "physique": 82,
    "agility": 94,
    "intelligence": 86,
    "kicking": 90,
    "defense": 65,
    "dispute": 78
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Remate_Misil",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Tornado_de_Fuego",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Sail_Bluessea_Neo
{
  "_id": "Sail_Bluessea_Neo",
  "name": "Cloak",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/sail_bluessea_neo.png"},
  "imageDetail": { "url": "/img/jugadoresID/cloak.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Neo_Japon",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 92,
    "control": 80,
    "technique": 85,
    "pressure": 82,
    "physique": 98,
    "agility": 74,
    "intelligence": 78,
    "kicking": 70,
    "defense": 76,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Bola_de_Tierra",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Imagen_Residual",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Johan_Tassman_Neo
{
  "_id": "Johan_Tassman_Neo",
  "name": "Talisman",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/johan_tassman_neo.png"},
  "imageDetail": { "url": "/img/jugadoresID/talisman.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Neo_Japon",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 76,
    "control": 92,
    "technique": 98,
    "pressure": 85,
    "physique": 74,
    "agility": 88,
    "intelligence": 94,
    "kicking": 82,
    "defense": 70,
    "dispute": 78
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Tiro_Fantasma",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Astro_Remate",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Wilbur_Watkins_Neo
{
  "_id": "Wilbur_Watkins_Neo",
  "name": "Wittz",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/wilbur_watkins_neo.png"},
  "imageDetail": { "url": "/img/jugadoresID/wittz.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Neo_Japon",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 84,
    "control": 80,
    "technique": 92,
    "pressure": 78,
    "physique": 85,
    "agility": 105,
    "intelligence": 82,
    "kicking": 94,
    "defense": 45,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Rayo_de_Ganimedes",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Dave_Quagmire_Neo
{
  "_id": "Dave_Quagmire_Neo",
  "name": "Quagmire",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/dave_quagmire_neo.png"},
  "imageDetail": { "url": "/img/jugadoresID/quagmire.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Afinidad",
  "tier": "S",
  "isCaptain": true,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Neo_Japon",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 105,
    "control": 100,
    "technique": 110,
    "pressure": 105,
    "physique": 105,
    "agility": 100,
    "intelligence": 115,
    "kicking": 120,
    "defense": 100,
    "dispute": 95
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Lanza_de_Odin",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Espejismo_De_Balon",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Zeke_Valanche_Neo
{
  "_id": "Zeke_Valanche_Neo",
  "name": "Zeke",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/zeke_valanche_neo.png"},
  "imageDetail": { "url": "/img/jugadoresID/zeke.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Japan",
  "country_image": {"url": "/img/countries/japan.png"},
  "teams": [
    {
      "team_id": "Neo_Japon",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 94,
    "control": 82,
    "technique": 88,
    "pressure": 96,
    "physique": 100,
    "agility": 92,
    "intelligence": 78,
    "kicking": 104,
    "defense": 40,
    "dispute": 95
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Rayo_de_Ganimedes",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Sky team
//Anorel
{
  "_id": "Anorel",
  "name": "Anorel",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/anorel.png"},
  "imageDetail": { "url": "/img/jugadoresID/anorel.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Sky_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 94,
    "control": 96,
    "technique": 92,
    "pressure": 88,
    "physique": 85,
    "agility": 90,
    "intelligence": 84,
    "kicking": 60,
    "defense": 95,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Zona_Sagrada",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Nenel
{
  "_id": "Nenel",
  "name": "Nenel",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/nenel.png"},
  "imageDetail": { "url": "/img/jugadoresID/nenel.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Sky_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 82,
    "control": 88,
    "technique": 95,
    "pressure": 90,
    "physique": 78,
    "agility": 102,
    "intelligence": 96,
    "kicking": 70,
    "defense": 94,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Subida_a_los_Cielos",
      "relation": "heredero",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Balon_Angelical",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Genel
{
  "_id": "Genel",
  "name": "Genel",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/genel.png"},
  "imageDetail": { "url": "/img/jugadoresID/genel.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Sky_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 92,
    "control": 70,
    "technique": 84,
    "pressure": 95,
    "physique": 98,
    "agility": 72,
    "intelligence": 80,
    "kicking": 55,
    "defense": 96,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Subida_a_los_Cielos",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Regate_Espejismo",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Ekadel
{
  "_id": "Ekadel",
  "name": "Ekadel",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/ekadel.png"},
  "imageDetail": { "url": "/img/jugadoresID/ekadel.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Sky_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 78,
    "control": 82,
    "technique": 90,
    "pressure": 85,
    "physique": 75,
    "agility": 110,
    "intelligence": 88,
    "kicking": 65,
    "defense": 94,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Subida_a_los_Cielos",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Lephiel
{
  "_id": "Lephiel",
  "name": "Lephiel",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/lephiel.png"},
  "imageDetail": { "url": "/img/jugadoresID/lephiel.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Sky_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 96,
    "control": 68,
    "technique": 82,
    "pressure": 98,
    "physique": 105,
    "agility": 70,
    "intelligence": 75,
    "kicking": 50,
    "defense": 92,
    "dispute": 94
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Subida_a_los_Cielos",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Sachinel
{
  "_id": "Sachinel",
  "name": "Sachinel",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/sachinel.png"},
  "imageDetail": { "url": "/img/jugadoresID/sachinel.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Sky_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 88,
    "control": 84,
    "technique": 86,
    "pressure": 82,
    "physique": 92,
    "agility": 74,
    "intelligence": 80,
    "kicking": 65,
    "defense": 82,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Balon_Angelical",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//Wenel
{
  "_id": "Wenel",
  "name": "Wenel",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/wenel.png"},
  "imageDetail": { "url": "/img/jugadoresID/wenel.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Sky_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 80,
    "control": 92,
    "technique": 94,
    "pressure": 78,
    "physique": 75,
    "agility": 98,
    "intelligence": 88,
    "kicking": 82,
    "defense": 60,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Balon_Angelical",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Nuel
{
  "_id": "Nuel",
  "name": "Nuel",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/nuel.png"},
  "imageDetail": { "url": "/img/jugadoresID/nuel.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Sky_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 78,
    "control": 95,
    "technique": 90,
    "pressure": 84,
    "physique": 80,
    "agility": 92,
    "intelligence": 96,
    "kicking": 75,
    "defense": 72,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Balon_Angelical",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Ientel
{
  "_id": "Ientel",
  "name": "Ientel",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/ientel.png"},
  "imageDetail": { "url": "/img/jugadoresID/ientel.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Sky_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 72,
    "control": 98,
    "technique": 102,
    "pressure": 80,
    "physique": 70,
    "agility": 105,
    "intelligence": 94,
    "kicking": 78,
    "defense": 85,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Balon_Angelical",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Subida_a_los_Cielos",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Gaiel
{
  "_id": "Gaiel",
  "name": "Gaiel",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/gaiel.png"},
  "imageDetail": { "url": "/img/jugadoresID/gaiel.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Sky_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 94,
    "control": 82,
    "technique": 88,
    "pressure": 85,
    "physique": 90,
    "agility": 108,
    "intelligence": 76,
    "kicking": 102,
    "defense": 40,
    "dispute": 92
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Vuelo_de_Icaro",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Remate_Celestial",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Sael
{
  "_id": "Sael",
  "name": "Sael",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/sael.png"},
  "imageDetail": { "url": "/img/jugadoresID/sael.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "S",
  "isCaptain": true,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Sky_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 110,
    "control": 125,
    "technique": 110,
    "pressure": 100,
    "physique": 115,
    "agility": 125,
    "intelligence": 100,
    "kicking": 125,
    "defense": 95,
    "dispute": 105
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Remate_Celestial_W",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "UltraLuna",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},



//DARK
//Astaroth
{
  "_id": "Astaroth",
  "name": "Astaroth",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/astaroth.png"},
  "imageDetail": { "url": "/img/jugadoresID/astaroth.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 105,
    "control": 92,
    "technique": 88,
    "pressure": 96,
    "physique": 102,
    "agility": 84,
    "intelligence": 80,
    "kicking": 50,
    "defense": 98,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 110,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "El_Olvido",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Araña_Gigante",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Rubu
{
  "_id": "Rubu",
  "name": "Rubú",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/rubu.png"},
  "imageDetail": { "url": "/img/jugadoresID/rubu.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 98,
    "control": 70,
    "technique": 85,
    "pressure": 94,
    "physique": 102,
    "agility": 75,
    "intelligence": 78,
    "kicking": 55,
    "defense": 96,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Cinto_Astral",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Caida_a_los_Infiernos",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Agor
{
  "_id": "Agor",
  "name": "Agor",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/agor.png"},
  "imageDetail": { "url": "/img/jugadoresID/agor.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 85,
    "control": 72,
    "technique": 88,
    "pressure": 96,
    "physique": 82,
    "agility": 105,
    "intelligence": 80,
    "kicking": 60,
    "defense": 94,
    "dispute": 88
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Balon_Diabolico",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Hebimos
{
  "_id": "Hebimos",
  "name": "Hebimos",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/hebimos.png"},
  "imageDetail": { "url": "/img/jugadoresID/hebimos.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 90,
    "control": 75,
    "technique": 82,
    "pressure": 92,
    "physique": 95,
    "agility": 80,
    "intelligence": 84,
    "kicking": 58,
    "defense": 96,
    "dispute": 91
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Balon_Diabolico",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Belal
{
  "_id": "Belal",
  "name": "Belal",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/belal.png"},
  "imageDetail": { "url": "/img/jugadoresID/belal.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Brecha",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 88,
    "control": 72,
    "technique": 85,
    "pressure": 90,
    "physique": 80,
    "agility": 105,
    "intelligence": 78,
    "kicking": 82,
    "defense": 94,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Caida_a_los_Infiernos",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Carga_Negativa",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Malphas
{
  "_id": "Malphas",
  "name": "Malphas",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/malphas.png"},
  "imageDetail": { "url": "/img/jugadoresID/malphas.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 82,
    "control": 90,
    "technique": 94,
    "pressure": 88,
    "physique": 78,
    "agility": 102,
    "intelligence": 90,
    "kicking": 70,
    "defense": 86,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Balon_Diabolico",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Corte_Diabolico",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Gorja
{
  "_id": "Gorja",
  "name": "Gorja",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/gorja.png"},
  "imageDetail": { "url": "/img/jugadoresID/gorja.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 94,
    "control": 80,
    "technique": 82,
    "pressure": 88,
    "physique": 110,
    "agility": 65,
    "intelligence": 78,
    "kicking": 72,
    "defense": 85,
    "dispute": 92
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Balon_Diabolico",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Llamarada_Infernal",
      "relation": "copia",
      "power_modifier": 0.3
    }
  ]
},


//Arakune
{
  "_id": "Arakune",
  "name": "Arakuné",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/arakune.png"},
  "imageDetail": { "url": "/img/jugadoresID/arakune.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 84,
    "control": 92,
    "technique": 98,
    "pressure": 90,
    "physique": 72,
    "agility": 102,
    "intelligence": 96,
    "kicking": 70,
    "defense": 88,
    "dispute": 82
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Balon_Diabolico",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Corte_Diabolico",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Borba
{
  "_id": "Borba",
  "name": "Borba",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/borba.png"},
  "imageDetail": { "url": "/img/jugadoresID/borba.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Juego Sucio",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 85,
    "control": 88,
    "technique": 92,
    "pressure": 95,
    "physique": 84,
    "agility": 98,
    "intelligence": 90,
    "kicking": 75,
    "defense": 88,
    "dispute": 86
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Caida_a_los_Infiernos",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Zanos
{
  "_id": "Zanos",
  "name": "Zanos",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/zanos.png"},
  "imageDetail": { "url": "/img/jugadoresID/zanos.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 92,
    "control": 84,
    "technique": 86,
    "pressure": 90,
    "physique": 95,
    "agility": 88,
    "intelligence": 82,
    "kicking": 98,
    "defense": 45,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Balon_Diabolico",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Carga_Negativa",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},



//Destra
{
  "_id": "Destra",
  "name": "Destra",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/destra.png"},
  "imageDetail": { "url": "/img/jugadoresID/destra.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Tension",
  "tier": "S",
  "isCaptain": true,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Team",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 125,
    "control": 120,
    "technique": 125,
    "pressure": 120,
    "physique": 112,
    "agility": 120,
    "intelligence": 100,
    "kicking": 120,
    "defense": 100,
    "dispute": 95
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Balon_Diabolico",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Carga_Negativa",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Gravitacion",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},





//DArk Angles
//Astaroth
{
  "_id": "Astaroth_DA",
  "name": "Astaroth",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/astaroth_DA.png"},
  "imageDetail": { "url": "/img/jugadoresID/astaroth.png" },
  "position": "GK",
  "position_image": {"url": "/img/positions/gk.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Brecha",
  "tier": "A+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Angels",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 1
    }
  ],

  "stats": {
    "power": 105,
    "control": 92,
    "technique": 88,
    "pressure": 96,
    "physique": 102,
    "agility": 84,
    "intelligence": 80,
    "kicking": 50,
    "defense": 98,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "El_Olvido",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Araña_Gigante",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Hebimos
{
  "_id": "Hebimos_DA",
  "name": "Hebimos",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/hebimos_DA.png"},
  "imageDetail": { "url": "/img/jugadoresID/hebimos.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Angels",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 2
    }
  ],

  "stats": {
    "power": 90,
    "control": 75,
    "technique": 82,
    "pressure": 92,
    "physique": 95,
    "agility": 80,
    "intelligence": 84,
    "kicking": 58,
    "defense": 96,
    "dispute": 91
  },

  "matchStats": {
    "stamina": 110,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Gravitacion",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Balon_Diabolico",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},




//Rubu
{
  "_id": "Rubu_DA",
  "name": "Rubú",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/rubu_DA.png"},
  "imageDetail": { "url": "/img/jugadoresID/rubu.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Angels",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 3
    }
  ],

  "stats": {
    "power": 98,
    "control": 70,
    "technique": 85,
    "pressure": 94,
    "physique": 102,
    "agility": 75,
    "intelligence": 78,
    "kicking": 55,
    "defense": 96,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Cinto_Astral",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Caida_a_los_Infiernos",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},



//Nenel
{
  "_id": "Nenel_DA",
  "name": "Nenel",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/nenel_DA.png"},
  "imageDetail": { "url": "/img/jugadoresID/nenel.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Fuego",
  "element_image": {"url": "/img/elements/fuego.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Angels",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 4
    }
  ],

  "stats": {
    "power": 82,
    "control": 88,
    "technique": 95,
    "pressure": 90,
    "physique": 78,
    "agility": 102,
    "intelligence": 96,
    "kicking": 70,
    "defense": 94,
    "dispute": 85
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Subida_a_los_Cielos",
      "relation": "heredero",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Balon_Angelical",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},

//Lephiel
{
  "_id": "Lephiel_DA",
  "name": "Lephiel",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/lephiel_DA.png"},
  "imageDetail": { "url": "/img/jugadoresID/lephiel.png" },
  "position": "DF",
  "position_image": {"url": "/img/positions/df.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Angels",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 5
    }
  ],

  "stats": {
    "power": 96,
    "control": 68,
    "technique": 82,
    "pressure": 98,
    "physique": 105,
    "agility": 70,
    "intelligence": 75,
    "kicking": 50,
    "defense": 92,
    "dispute": 94
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Subida_a_los_Cielos",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},

//Malphas
{
  "_id": "Malphas_DA",
  "name": "Malphas",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/malphas_DA.png"},
  "imageDetail": { "url": "/img/jugadoresID/malphas.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Angels",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 6
    }
  ],

  "stats": {
    "power": 82,
    "control": 90,
    "technique": 94,
    "pressure": 88,
    "physique": 78,
    "agility": 102,
    "intelligence": 90,
    "kicking": 70,
    "defense": 86,
    "dispute": 84
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Balon_Diabolico",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Corte_Diabolico",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Zanos
{
  "_id": "Zanos_DA",
  "name": "Zanos",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/zanos_DA.png"},
  "imageDetail": { "url": "/img/jugadoresID/zanos.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Tension",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Angels",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 7
    }
  ],

  "stats": {
    "power": 92,
    "control": 84,
    "technique": 86,
    "pressure": 90,
    "physique": 95,
    "agility": 88,
    "intelligence": 82,
    "kicking": 98,
    "defense": 45,
    "dispute": 90
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Balon_Diabolico",
      "relation": "heredero",
      "power_modifier": 0.5
    },
    {
      "technique_id": "Carga_Negativa",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},

//Gaiel
{
  "_id": "Gaiel_DA",
  "name": "Gaiel",
  "sex": "F",
  "role": "player",
  "image": {"url": "/img/jugadores/gaiel_DA.png"},
  "imageDetail": { "url": "/img/jugadoresID/gaiel.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Contraataque",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Angels",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 8
    }
  ],

  "stats": {
    "power": 94,
    "control": 82,
    "technique": 88,
    "pressure": 85,
    "physique": 90,
    "agility": 108,
    "intelligence": 76,
    "kicking": 102,
    "defense": 40,
    "dispute": 92
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Vuelo_de_Icaro",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Remate_Celestial",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},


//Wenel
{
  "_id": "Wenel_DA",
  "name": "Wenel",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/wenel_DA.png"},
  "imageDetail": { "url": "/img/jugadoresID/wenel.png" },
  "position": "MD",
  "position_image": {"url": "/img/positions/md.png"},
  "element": "Aire",
  "element_image": {"url": "/img/elements/aire.png"},
  "nature": "Justicia",
  "tier": "A",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Angels",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 9
    }
  ],

  "stats": {
    "power": 80,
    "control": 92,
    "technique": 94,
    "pressure": 78,
    "physique": 75,
    "agility": 98,
    "intelligence": 88,
    "kicking": 82,
    "defense": 60,
    "dispute": 80
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Balon_Angelical",
      "relation": "heredero",
      "power_modifier": 0.5
    }
  ]
},




//Destra
{
  "_id": "Destra_DA",
  "name": "Destra",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/destra_DA.png"},
  "imageDetail": { "url": "/img/jugadoresID/destra.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Montaña",
  "element_image": {"url": "/img/elements/mountain.png"},
  "nature": "Tension",
  "tier": "S+",
  "isCaptain": true,
  "ageGroup": "Junior",
  "country": "Hell",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Angels",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 10
    }
  ],

  "stats": {
    "power": 125,
    "control": 130,
    "technique": 135,
    "pressure": 130,
    "physique": 132,
    "agility": 140,
    "intelligence": 100,
    "kicking": 140,
    "defense": 100,
    "dispute": 105
  },

  "matchStats": {
    "stamina": 120,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Balon_Diabolico",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Carga_Negativa",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Gravitacion",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "Rayo_Oscuro",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


//Sael
{
  "_id": "Sael_DA",
  "name": "Sael",
  "sex": "M",
  "role": "player",
  "image": {"url": "/img/jugadores/sael_DA.png"},
  "imageDetail": { "url": "/img/jugadoresID/sael.png" },
  "position": "FW",
  "position_image": {"url": "/img/positions/fw.png"},
  "element": "Bosque",
  "element_image": {"url": "/img/elements/bosque.png"},
  "nature": "Afinidad",
  "tier": "S+",
  "isCaptain": false,
  "ageGroup": "Junior",
  "country": "Heaven",
  "country_image": {"url": "/img/countries/unknow.png"},
  "teams": [
    {
      "team_id": "Dark_Angels",
      "seasons": "Season_T3",
      "to": null,
      "isCurrent": true,
      "number": 11
    }
  ],

  "stats": {
    "power": 130,
    "control": 125,
    "technique": 130,
    "pressure": 130,
    "physique": 135,
    "agility": 125,
    "intelligence": 100,
    "kicking": 135,
    "defense": 115,
    "dispute": 125
  },

  "matchStats": {
    "stamina": 130,
    "tension": 120
  },

  "techniques": [
    {
      "technique_id": "Remate_Celestial_W",
      "relation": "creador",
      "power_modifier": 1.0
    },
    {
      "technique_id": "UltraLuna",
      "relation": "copia",
      "power_modifier": 0.3
    },
    {
      "technique_id": "Rayo_Oscuro",
      "relation": "creador",
      "power_modifier": 1.0
    }
  ]
},


];
const resultado = await jugadores.insertMany(datos);
console.log("Jugadores insertados:", resultado.insertedCount);
} catch (error) {
console.error("Error al insertar jugadores:", error);
} finally {
await client.close();
}
}


insertarJugadores();