const { MongoClient} = require("mongodb");


async function insertarEquipos() {
const uri = "mongodb://localhost:27017"; 
const client = new MongoClient(uri);


try {
await client.connect();
const db = client.db("Lisensiado"); 
const equipos = db.collection("equipos");


const datos = [

{
  _id: "Raimon_T1",
  name: "Raimon",
  image: {"url": "/img/equipos/raimon.png"},
  country: "Japan",
  academy: "Instituto Raimon",
  category: "Junior",
  color_primary: "#1E90FF",
  coach_id: null,

  player_ids: [
    "Mark_Evans_T1",
    "Nathan_Swift_T1",
    "Jack_Wallside_T1",
    "Jim_Wraith_T1",
    "Tod_Ironside_T1",
    "Steve_Grim_T1",
    "Tim_Saunders_T1",
    "Sam_Kincaid_T1",
    "Maxell_Carson_T1",
    "Axel_Blaze_T1",
    "Kevin_Dragonfly_T1",
    "William_Glass_T1",
    "Bobby_Shearer_T1",
    "Jude_Sharp_T1",
    "Erik_Eagle_T1",
  ],

  seasons: [
    "Season_T1"
  ]
},


{
  _id: "Occult_T1",
  name: "Occult",
  image: {"url": "/img/equipos/occult.png"},
  country: "Japan",
  academy: "Instituto Occult",
  category: "Junior",
  color_primary: "#4B0082",
  coach_id: null,
  player_ids: [
    "Nathan_Jones_T1",
    "Russell_Walk_T1",
    "Jason_Jones_T1",
    "Ken_Furan_T1",
    "Jerry_Fulton_T1",
    "Ray_Mannings_T1",
    "Robert_Mayer_T1",
    "Alexander_Brave_T1",
    "Johan_Tassman_T1",
    "Troy_Moon_T1",
    "Burt_Wolf_T1"
  ],
  seasons: [
    "Season_T1"
  ]
},

{
  _id: "Wild_T1",
  name: "Wild",
  image: {"url": "/img/equipos/wild.png"},
  country: "Japan",
  academy: "Instituto Wild",
  category: "Junior",
  color_primary: "#556B2F",
  coach_id: null,
  player_ids: [
    "Charlie_Boardfield_T1",
    "Hugo_Talgeese_T1",
    "Wilson_Fishman_T1",
    "Peter_Johnson_T1",
    "Leonard_OShea_T1",
    "Cham_Lion_T1",
    "Steve_Eagle_T1",
    "Bruce_Monkey_T1",
    "Gary_Lancaster_T1",
    "Harry_Snake_T1",
    "Adrian_Speed_T1",
  ],
  seasons: [
    "Season_T1"
  ]
},

{
  _id: "Brain_T1",
  name: "Brain",
  image: {"url": "/img/equipos/brain.png"},
  country: "Japan",
  academy: "Instituto Brain",
  category: "Junior",
  color_primary: "#838b86",
  coach_id: null,
  player_ids: [
    "Thomas_Feldt_T1",
    "Harry_Leading_T1",
    "Terry_Stronger_T1",
    "Philip_Marvel_T1",
    "Noel_Good_T1",
    "Tyron_Rock_T1",
    "Francis_Tell_T1",
    "Samuel_Buster_T1",
    "Jonathan_Seller_T1",
    "Victor_Kind_T1",
    "Neil_Turner_T1",
  ],
  seasons: [
    "Season_T1"
  ]
},

{
  _id: "Royal_Academy_T1",
  name: "Royal Academy",
  image: {"url": "/img/equipos/royal_t1.png"},
  country: "Japan",
  academy: "Teikoku Gakuen",
  category: "Junior",
  color_primary: "#003b17",
  coach_id: null,
  player_ids: [
    "Joseph_King_T1",
    "Peter_Drent_T1",
    "Ben_Simmons_T1",
    "Alan_Master_T1",
    "Gus_Martin_T1",
    "Bobby_Shearer_T1R",
    "Herman_Waldon_T1",
    "John_Bloom_T1",
    "Derek_Swing_T1",
    "Daniel_Hatch_T1",
    "David_Samford_T1",
    "Jude_Sharp_T1R",
  ],
  seasons: [
    "Season_T1"
  ]
},

{
  _id: "Shuriken_T1",
  name: "Shuriken",
  image: {"url": "/img/equipos/shuriken.png"},
  country: "Japan",
  academy: "Instituto Shuriken",
  category: "Junior",
  color_primary: "#2F2F2F",
  coach_id: null,
  player_ids: [
    "Morgan_Sanders_T1",
    "Newton_Flust_T1",
    "Jim_Hillfort_T1", 
    "Galen_Thunderbird_T1",
    "Finn_Stoned_T1",
    "Phil_Wingate_T1",
    "Jez_Shell_T1",
    "Jupiter_Jumper_T1",
    "Sam_Samurai_T1",
    "Hank_Sullivan_T1",
    "Sail_Bluesea_T1"
  ],
  seasons: [
    "Season_T1"
  ]
},

{
  _id: "Kirkwood_T1",
  name: "Kirkwood",
  image: {"url": "/img/equipos/kirkwood.png"},
  country: "Japan",
  academy: "Instituto Kirkwood",
  category: "Junior",
  color_primary: "#cf0101",
  coach_id: null,
  player_ids: [
    "John_Neville_T1",
    "Malcolm_Night_T1",
    "Alfred_Meenan_T1",
    "Dan_Mirthful_T1",
    "Ricky_Clover_T1",
    "Toby_Damian_T1",
    "York_Nashmith_T1",
    "Zachary_Moore_T1",
    "Marvin_Murdock_T1",
    "Thomas_Murdock_T1",
    "Tyler_Murdock_T1"
  ],
  seasons: [
    "Season_T1"
  ]
},

{
  _id: "Zeus_T1",
  name: "Zeus",
  image: {"url": "/img/equipos/zeus.png"},
  country: "Japan",
  academy: "Instituto Zeus",
  category: "Junior",
  color_primary: "#f1eed8",
  coach_id: null,
  player_ids: [
    "Paul_Siddon_T1",
    "Apollo_Light_T1",
    "Jeff_Iron_T1",
    "Lane_War_T1",
    "Danny_Wood_T1",
    "Artie_Mishman_T1",
    "Arion_Matlock_T1",
    "Wesley_Knox_T1",
    "Jonas_Demetrius_T1",
    "Byron_Love_T1",
    "Henry_House_T1"
  ],
  seasons: [
    "Season_T1"
  ]
},

{
  _id: "Ogre_T1",
  name: "La Ogre",
  image: {"url": "/img/equipos/ogre.png"},
  country: "Japan",
  academy: "Instituto Ogre",
  category: "Junior",
  color_primary: "#8b1212",
  coach_id: null,
  player_ids: [
    "Lars_Luceafar_T1",
    "Bump_Trungus_T1",
    "Lump_Trungus_T1",
    "Radd_Ischer_T1",
    "Jynx_Jenkins_T1",
    "Oni_Triumvir_T1",
    "Drachen_Gunther_T1",
    "Ichabod_Stark_T1",
    "Escavan_Malice_T1",
    "Bash_Lancer_T1",
    "Mystral_Callous_T1",
  ],
  seasons: [
    "Season_T1"
  ]
},

{
  _id: "Inazuma_Eleven_Veterans",
  name: "Veteranos del Inazuma Eleven",
  image: {"url": "/img/equipos/veteran_inazuma.png"},
  country: "Japan",
  academy: "Exequipos Inazuma Eleven",
  category: "Senior",
  color_primary: "#00008B",
  coach_id: null,
  player_ids: [
    "Seymour_Hillman",
    "Charles_Island",
    "Garret_Hairtown",
    "Arthur_Sweet",
    "Peter_Mildred",
    "Josh_Nathaniel",
    "Edward_Gladstone",
    "Tyler_Thomas",
    "Joseph_Yosemite",
    "Ian_Suffolk",
    "Constant_Builder"
  ],
  seasons: [
    "Season_T1"
  ]
},

{
  _id: "Alpine_T2",
  name: "Alpine",
  image: {"url": "/img/equipos/alpine.png"},
  country: "Japan",
  academy: "Instituto Alpine",
  category: "Junior",
  color_primary: "#ADD8E6",
  coach_id: null,
  player_ids: [
    "Adam_Ropes_T2",
    "Joaquine_Downtown_T2",
    "Milton_Bindings_T2",
    "Spike_Gleeson_T2",
    "Sean_Snowfield_T2",
    "Kerry_Bootgaiter_T2",
    "Maddox_Rock_T2",
    "Robert_Skipolson_T2",
    "Roland_Climbstein_T2",
    "Quentin_Rackner_T2",
    "Shawn_Froste_Al"
  ],
  seasons: [
    "Season_T2"
  ] 
},

{
  _id: "Tormenta_de_Geminis",
  name: "Tormenta de Géminis",
  image: {"url": "/img/equipos/tormenta_geminis.png"},
  country: "Japan",
  academy: "Instituto Tormenta de Géminis",
  category: "Junior",
  color_primary: "#54585c",
  coach_id: null,
  player_ids: [
    "Gordon_Star_T2",
    "Connor_Shuttle_T2",
    "Jim_Landing_T2",
    "Grant_Icewater_T2",
    "Charles_Riverboat_T2",
    "Pat_Box_T2",
    "Gregory_Saturn_T2",
    "Izzy_Jupiter_T2",
    "Rhona_Countdown_T2",
    "Jordan_Greenway_T2",
    "Dylan_Bluemoon_T2"
  ],
  seasons: [
    "Season_T2"
  ]
},

{
  _id: "Epsilon_T2",
  name: "Epsilon",
  image: {"url": "/img/equipos/epsilon.png"},
  country: "Japan",
  academy: "Instituto Epsilon",
  category: "Junior",
  color_primary: "#242222",
  coach_id: null,
  player_ids: [
    "Dave_Quagmire_T2",
    "Craven_Kenville_T2",
    "Anna_Mole_T2",
    "Kayson_Wattever_T2",
    "Chris_Tytan_T2",
    "Mads_Hatter_T2",
    "Karen_Ripton_T2",
    "Yakker_Plantsworm_T2",
    "Carrie_McCuring_T2",
    "Ronny_Metcalf_T2",
    "Zeke_Valanche_T2",
  ],
  seasons: [
    "Season_T2"
  ]
},

{
  _id: "Royal_Academy_RX",
  name: "Royal Academy Redux",
  image: {"url": "/img/equipos/royal_rx.png"},
  country: "Japan",
  academy: "Teikoku Gakuen",
  category: "Junior",
  color_primary: "#003b17",
  coach_id: null,
  player_ids: [
    "Joseph_King_RX",
    "Rowan_Beltzer_RX",
    "Blade_Healen_RX",
    "Argie_Bargie_RX",
    "Lee_Bamboo_RX",
    "Eton_Messer_RX",
    "Jonah_Spark_RX",
    "Sue_Sparrow_RX",
    "Riley_Jamm_RX",
    "Caleb_Stonewall_RX",
    "David_Samford_RX",
  ],
  seasons: [
    "Season_T2"
  ]
},

{
  _id: "Diamond",
  name: "Diamond",
  image: {"url": "/img/equipos/diamond.png"},
  country: "Japan",
  academy: "Instituto Diamond",
  category: "Junior",
  color_primary: "#1E3A5F",
  coach_id: null,
  player_ids: [
    "Ben_North_D",
    "Alan_Downhill_D",
    "Claire_Lesnow_D",
    "Albert_Denver_D",
    "Lucy_Hailstone_D",
    "Brad_Coldwater_D",
    "Dawson_Foxx_D",
    "Ving_Rice_D",
    "Bernie_White_D",
    "Gazelle_D",
    "Denzel_Freezer_D"
  ],
  seasons: [
    "Season_T2"
  ]
},

{
  _id: "Prominence",
  name: "Prominence",
  image: {"url": "/img/equipos/prominence.png"},
  country: "Japan",
  academy: "Instituto Prominence",
  category: "Junior",
  color_primary: "#862c08",
  coach_id: null,
  player_ids: [
    "Grant_Cook_P",
    "Bonnie_Sparks_P",
    "Val_Flamewood_P",
    "Sean_Ashford_P",
    "Ben_Blowton_P",
    "Ethan_Whitering_P",
    "Brenda_Firequest_P",
    "Sam_Bournes_P",
    "Jim_Flareson_P",
    "Torch_P",
    "Nigel_August_P"
  ],
  seasons: [
    "Season_T2"
  ]
},

{
  _id: "Caos",
  name: "Caos",
  image: {"url": "/img/equipos/caos.png"},
  country: "Japan",
  academy: "Instituto Caos",
  category: "Junior",
  color_primary: "#b90e0e",
  coach_id: null,
  player_ids: [
    "Grant_Cook_CS",
    "Bonnie_Sparks_CS",
    "Albert_Denver_CS",
    "Ben_Blowton_CS",
    "Claire_Lesnow_CS",
    "Ethan_Whitering_CS",
    "Dawson_Foxx_CS",
    "Ving_Rice_CS",
    "Nigel_August_CS",
    "Gazelle_CS",
    "Torch_CS"
  ],
  seasons: [
    "Season_T2"
  ]
},


{
  _id: "Raimon_T2",
  name: "Raimon Resistencia",
  image: {"url": "/img/equipos/raimon_resistencia.png"},
  country: "Japan",
  academy: "Instituto Raimon",
  category: "Junior",
  color_primary: "#1f77cf",
  coach_id: null,

  player_ids: [
    "Mark_Evans_T2",
    "Jack_Wallside_T2",
    "Scott_Banyan_T2",
    "Bobby_Shearer_T2",
    "Hurley_Kane_T2",
    "Tori_T2",
    "Sue_T2",
    "Jude_Sharp_T2",
    "Erik_Eagle_T2",
    "Axel_Blaze_T2",
    "Shawn_Froste_T2",
    "Byron_Love_T2",
    "Darren_LaChance_T2"
  ],

  seasons: [
    "Season_T2"
  ]
},


{
  _id: "Genesis",
  name: "Genesis",
  image: {"url": "/img/equipos/genesis.png"},
  country: "Japan",
  academy: "Instituto Genesis",
  category: "Junior",
  color_primary: "#ffffff",
  coach_id: null,
  player_ids: [
    "Nero_G",
    "Gele_G",
    "Kiburn_G",
    "Zohen_G",
    "Hauser_G",
    "Kormer_G",
    "Kiwill_G",
    "Ark_G",
    "Wittz_G",
    "Bellatrix_G",
    "Xene_G"
  ],
  seasons: [
    "Season_T2"
  ]
},

{
  _id: "Emperadores_Oscuros",
  name: "Emperadores Oscuros",
  image: {"url": "/img/equipos/emperadores_oscuros.png"},
  country: "Japan",
  academy: "Instituto Emperadores Oscuros",
  category: "Junior",
  color_primary: "#1E3A5F",
  coach_id: null,
  player_ids: [
    "Thomas_Feldt_EO",
    "Malcolm_Night_EO",
    "Sam_Kincaid_EO",
    "Jim_Wraith_EO",
    "Tod_Ironside_EO",
    "Steve_Grim_EO",
    "Tim_Saunders_EO",
    "Maxwell_Carson_EO",
    "Shadow_Cimmerian_EO",
    "Nathan_Swift_EO",
    "Kevin_Dragonfly_EO"
  ],
  seasons: [
    "Season_T2"
  ]
},

{
  _id: "Inazuma_Japan",
  name: "Inazuma Japon",
  image: {"url": "/img/equipos/inazuma_japon.png"},
  country: "Japan",
  academy: "Instituto Inazuma Japon",
  category: "Junior",
  color_primary: "#ffef0b",
  coach_id: null,
  player_ids: [
    "Mark_Evans_T3",
    "Nathan_Swift_T3",
    "Jack_Wallside_T3",
    "Hurley_Kane_T3",
    "Scott_Banyan_T3",
    "Archer_Hawkins_T3",
    "Caleb_Stonewall_T3",
    "Jude_Sharp_T3",
    "Shawn_Froste_T3",
    "Axel_Blaze_T3",
    "Austin_Hobbes_T3",
    "David_Samford_T3",
    "Xavier_Foster_T3",
    "Darren_LaChance_T3"
  ],
  seasons: [
    "Season_T3"
  ]
},


{
  _id: "Fire_Dragons",
  name: "Dragones de Fuego",
  image: {"url": "/img/equipos/fire_dragons.png"},
  country: "Corea del Sur",
  academy: "Instituto Dragones de Fuego",
  category: "Junior",
  color_primary: "#ff0000",
  coach_id: null,
  player_ids: [
    "Jang_Cho",
    "Umi_Wang",
    "Doyo_Hong",
    "Minho_Cho",
    "Songwan_Ko",
    "Pekyong_Park",
    "Changsu_Choi",
    "Enyong_Kim",
    "Byron_Love_T3",
    "Torch_W",
    "Gazelle_W"
  ],
  seasons: [
    "Season_T3"
  ]
},


{
  _id: "Knights_of_Queen",
  name: "Knights of Queen",
  image: {"url": "/img/equipos/knights_of_queen.png"},
  country: "Inglaterra",
  academy: "Instituto Knights of Queen",
  category: "Junior",
  color_primary: "#a2b9d8",
  coach_id: null,
  player_ids: [
    "Freddy_McQueen",
    "Gary_Lancaster",
    "David_Buckingham",
    "Lance_Ralton",
    "Edge_Ripper",
    "Peter_Coole",
    "Gary_Mane",
    "Paul_Appleton",
    "Eric_Purpleton",
    "Edgar_Partinus",
    "Philip_Arwen"
  ],
  seasons: [
    "Season_T3"
  ]
},


{
  _id: "Los_Emperadores",
  name: "Los Emperadores",
  image: {"url": "/img/equipos/emperadores.png"},
  country: "Argrentina",
  academy: "Instituto Los Emperadores",
  category: "Junior",
  color_primary: "#2e69bb",
  coach_id: null,
  player_ids: [
    "Nacho_Ortega",
    "Thiago_Torres",
    "Felipe_Palacios",
    "Miquel_Ros",
    "Ramon_Martinez",
    "Enrique_Caroso",
    "Sergio_Lopez",
    "Roberto_Torinni",
    "Pablo_Castiglione",
    "Leone_Balone",
    "Diego_Oro"
  ],
  seasons: [
    "Season_T3"
  ]
},

{
  _id: "Unicorn",
  name: "Unicorns",
  image: {"url": "/img/equipos/unicorn.png"},
  country: "EEUU",
  academy: "Instituto Unicorns",
  category: "Junior",
  color_primary: "#70767e",
  coach_id: null,
  player_ids: [
    "Billy_Dash",
    "Ted_Bryant",
    "Tony_Strider",
    "Drake_Dynamo",
    "Bobby_Shearer_W",
    "Steve_Woodmark",
    "Erik_Eagle_W",
    "Shane_Pierce",
    "Mark_Krueger",
    "Dylan_Keats",
    "Gabriel_Jax"
  ],
  seasons: [
    "Season_T3"
  ]
},

{
  _id: "Orfeo",
  name: "Orfeo",
  image: {"url": "/img/equipos/orfeo.png"},
  country: "Italia",
  academy: "Instituto Orfeo",
  category: "Junior",
  color_primary: "#1411c4",
  coach_id: null,
  player_ids: [
    "Gigi_Blasi",
    "Vento_Galliano",
    "Otto_Nobili",
    "Anton_Graziuso",
    "Marco_Maserati",
    "Angelo_Gabrini",
    "Hidetoshi_Nakata",
    "Giacomo_Yani",
    "Gianluca_Zanardi",
    "Paolo_Bianchi",
    "Raffaele_Generani"
  ],
  seasons: [
    "Season_T3"
  ]
},

{
  _id: "Os_Reis",
  name: "Os Reis",
  image: {"url": "/img/equipos/os_reis.png"},
  country: "Brasil",
  academy: "Instituto Os Reis",
  category: "Junior",
  color_primary: "#cddb09",
  coach_id: null,
  player_ids: [
    "Falcao_Da_Silva",
    "Carlos_Lagarto",
    "Antonio_Bagre",
    "Monstro_Ximenes",
    "Formiga_Clemens",
    "Presa_Passos",
    "Borboleta_Barboza",
    "Coruja_Cerezo",
    "Leonardo_Almeida",
    "Mac_Robingo",
    "Lisensiado"
  ],
  seasons: [
    "Season_T3"
  ]
},

{
  _id: "Little_Giants",
  name: "The little Giants",
  image: {"url": "/img/equipos/little_giants.png"},
  country: "Costail",
  academy: "Instituto The little Giants",
  category: "Junior",
  color_primary: "#85e28d",
  coach_id: null,
  player_ids: [
    "Hector_Helio",
    "Zephyr_Vitesse",
    "Walter_Mountain",
    "Jimi_Gaines",
    "Ian_Ferrum",
    "Quint_Hampton",
    "Yasir_Haddad",
    "Keith_Ryan",
    "Maximino_Cruz",
    "Gareth_Flare",
    "Drago_Hill"
  ],
  seasons: [
    "Season_T3"
  ]
},

{
  _id: "Neo_Japon",
  name: "Neo Japon",
  image: {"url": "/img/equipos/neo_japon.png"},
  country: "Japan",
  academy: "Instituto Neo Japon",
  category: "Junior",
  color_primary: "#7c8592",
  coach_id: null,
  player_ids: [
    "Joseph_King_Neo",
    "Alan_Master_Neo",
    "Zack_Cummings_Neo",
    "Argie_Bargie_Neo",
    "Daniel_Hatch_Neo",
    "Neil_Turner_Neo",
    "Sail_Bluessea_Neo",
    "Johan_Tassman_Neo",
    "Wilbur_Watkins_Neo",
    "Dave_Quagmire_Neo",
    "Zeke_Valanche_Neo"
  ],
  seasons: [
    "Season_T3"
  ]
},

{
  _id: "Sky_Team",
  name: "Sky Team",
  image: {"url": "/img/equipos/sky.png"},
  country: "Isla Liocott",
  academy: "Sky Team",
  category: "Junior",
  color_primary: "#b5b8bd",
  coach_id: null,
  player_ids: [
    "Anorel",
    "Nenel",
    "Genel",
    "Ekadel",
    "Lephiel",
    "Sachinel",
    "Wenel",
    "Nuel",
    "Ientel",
    "Gaiel",
    "Sael"
  ],
  seasons: [
    "Season_T3"
  ]
},

{
  _id: "Dark_Team",
  name: "Dark Team",
  image: {"url": "/img/equipos/dark.png"},
  country: "Isla Liocott",
  academy: "Dark Team",
  category: "Junior",
  color_primary: "#000000",
  coach_id: null,
  player_ids: [
    "Astaroth",
    "Rubu",
    "Agor",
    "Hebimos",
    "Belal",
    "Malphas",
    "Gorja",
    "Arakune",
    "Borba",
    "Zanos",
    "Destra"
  ],
  seasons: [
    "Season_T3"
  ]
},

{
  _id: "Dark_Angels",
  name: "Dark angels",
  image: {"url": "/img/equipos/dark_angels.png"},
  country: "Isla Liocott",
  academy: "Dark angels",
  category: "Junior",
  color_primary: "#c56c06",
  coach_id: null,
  player_ids: [
    "Astaroth_DA",
    "Hebimos_DA",
    "Rubu_DA",
    "Nenel_DA",
    "Lephiel_DA",
    "Malphas_DA",
    "Zanos_DA",
    "Gaiel_DA",
    "Wenel_DA",
    "Destra_DA",
    "Sael_DA"
  ],
  seasons: [
    "Season_T3"
  ]
},




];

const resultado = await equipos.insertMany(datos);
console.log("Equipos insertados:", resultado.insertedCount);
} catch (error) {
console.error("Error al insertar equipos:", error);
} finally {
await client.close();
}
}


insertarEquipos();
