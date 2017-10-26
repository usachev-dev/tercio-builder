export const factionData = [
  {
    id: 'spain',
    title: 'Spanish Empire',
    sort: 200,
    flag:'assets/icons/flags/spain.svg',
    army_types:['standart_army','mounted_army', 'companies_army'],
    regiment_modifiers:{
      foot_regiment:{
        units_available: ['tercio']
      }
    },
    unit_modifiers: {
      tercio:{
        options:['viejo','swordsmen']
      }
    }
  },

  {
    id: 'england',
    title: 'Kingdom of England',
    sort: 500,
    flag: 'assets/icons/flags/england.svg',
    //army_types:['standart_army','mounted_army', 'companies_army'],
    army_types: ['standart_army'],
    regiment_modifiers: {
      foot_regiment: {
        units_available: ['reformed']
      }
    },
    unit_modifiers: {
      shot_company: {
        options: ['archers']
      }
    }
  },

  {
    id: 'sweden',
    title:'Swedish Empire',
    sort: 800,
    flag:'assets/icons/flags/sweden.svg',
    //army_types:['standart_army','mounted_army', 'companies_army'],
    army_types:['standart_army','mounted_army'],
    regiment_modifiers: {
      foot_regiment: {
        units_available: ['modern'],
      }
    },
    unit_modifiers: {
      shot_company:{
        options:['brigade']
      }
    }
  }
];


export const armyTypeData = [
  {
    id:'standart_army',
    title: 'Standart Army',
    regiments: [
      {
        id: 'foot_regiment',
        min: 1,
        max:4
      },
      {
        id: 'horse_regiment',
        min:0,
        max:3
      },
      {
        id: 'artillery_battery',
        min:0,
        max:2
      },
      {
        id: 'battle_group',
        min:0,
        max:1
      }
    ]
  },
  {
    id: 'mounted_army',
    title: 'Mounted Army',
    regiments: [
      {
        id: 'foot_regiment',
        min: 0,
        max:2
      },
      {
        id: 'horse_regiment',
        min:2,
        max:6
      },
      {
        id: 'artillery_battery',
        min:0,
        max:1
      },
      {
        id: 'battle_group',
        min:0,
        max:2
      }
    ]
  },
  {
    id: 'companies_army',
    title: 'Companies Army',
    regiments: [
      {
        id: 'foot_regiment',
        min: 0,
        max:2
      },
      {
        id: 'horse_regiment',
        min:0,
        max:3
      },
      {
        id: 'artillery_battery',
        min:0,
        max:1
      },
      {
        id: 'battle_group',
        min:2,
        max:6
      }
    ]
  }
];

const default_companies_available = ['shot_company','pike_company', 'melee_company'];

export const regimentData = [
  {
    id: 'foot_regiment',
    title: 'Foot Regiment',
    min_units: 2,
    max_units: 4,
    min_companies: 0,
    max_companies: 2,
    min_commander_rank: 1,
    max_commander_rank: 4,
    units_available: <string[]>[],
    companies_available: default_companies_available,
    color: 'blue'
  },
  {
    id: 'horse_regiment',
    title: 'Horse Regiment',
    min_units: 2,
    max_units: 4,
    min_companies: 0,
    max_companies: 2,
    min_commander_rank: 1,
    max_commander_rank: 4,
    units_available: ['mtd_arquebus, cuirassiers, light_horse, dragoons'],
    companies_available: default_companies_available,
    color: 'green'
  },
  {
    id: 'battle_group',
    title: 'Battle Group',
    min_units: 0,
    max_units: 0,
    min_companies: 2,
    max_companies: 4,
    min_commander_rank: 1,
    max_commander_rank: 4,
    units_available: <string[]>[],
    companies_available: default_companies_available,
    color: 'yellow'
  },
  {
    id: 'artillery_battery',
    title: 'Artillery Battery',
    min_units: 1,
    max_units: 1,
    min_companies: 0,
    max_companies: 1,
    min_commander_rank: -1,
    max_commander_rank: -1,
    units_available: ['light_art','med_art','heavy_art'],
    companies_available: default_companies_available,
    color: 'red'
  }
];

export const unitData = [
  {
    id: 'tercio',
    title: 'Tercio',
    base_cost: 140,
    speed: 4,
    melee: 4,
    shoot: [3,2],
    discipline: 5,
    courage: 4,
    stamina: 5,
    infantry:4,
    cavalry: 5,
    salvo: 4,
    artillery: 3,
    rules: ['Large'],
    weaponry: ['Pikes','Arquebus/Musket']
  },
  {
    id: 'classc_sqd',
    title: 'Classic Squadron',
    base_cost: 110,
    speed: 4,
    melee: 4,
    shoot: [3,2],
    discipline: 4,
    courage: 4,
    stamina: 4,
    infantry:4,
    cavalry: 5,
    salvo: 4,
    artillery: 3,
    rules: <string[]>[],
    weaponry: ['Pikes','Arquebus/Musket']
  },
  {
    id: 'reformed',
    title: 'Reformed Battalion',
    base_cost: 125,
    speed: 4,
    melee: 4,
    shoot: [4,2],
    discipline: 4,
    courage: 4,
    stamina: 4,
    infantry:4,
    cavalry: 5,
    salvo: 4,
    artillery: 4,
    rules: ['Brigade'],
    weaponry: ['Pikes','Arquebus/Musket']
  },
  {
    id: 'modern',
    title: 'Modern Squadron',
    base_cost: 110,
    speed: 4,
    melee: 3,
    shoot: [4,4],
    discipline: 5,
    courage: 4,
    stamina: 3,
    infantry:4,
    cavalry: 5,
    salvo: 4,
    artillery: 4,
    rules: ['Brigade'],
    weaponry: ['Pikes','Musket']
  },
  {
    id: 'cuirassiers',
    title: 'Cuirassiers',
    base_cost: 100,
    speed: 7,
    melee: 4,
    shoot: [2,2],
    discipline: 3,
    courage: 4,
    stamina: 3,
    infantry:4,
    cavalry: 4,
    salvo: 3,
    artillery: 4,
    rules: ['Mobility','Evasion','Pursuit'],
    weaponry: ['Pistol']
  },
  {
    id: 'mtd_arquebus',
    title: 'Mounted Arquebusier',
    base_cost: 65,
    speed: 8,
    melee: 3,
    shoot: [3,3],
    discipline: 3,
    courage: 3,
    stamina: 3,
    infantry:4,
    cavalry: 3,
    salvo: 3,
    artillery: 4,
    rules: ['Mobility','Evasion','Pursuit','Caracole'],
    weaponry: ['Arquebus']
  },
  {
    id: 'light_horse',
    title: 'Light Horse',
    base_cost: 50,
    speed: 8,
    melee: 3,
    shoot: [2,2],
    discipline: 2,
    courage: 3,
    stamina: 2,
    infantry:4,
    cavalry: 3,
    salvo: 4,
    artillery: 5,
    rules: ['Mobility','Evasion','Pursuit','Light', 'Extended Arc of Fire'],
    weaponry: ['Pistol']
  },
  {
    id: 'dragoons',
    title: 'Dragoons',
    base_cost: 75,
    speed: 8,
    melee: 3,
    shoot: [3,3],
    discipline: 3,
    courage: 3,
    stamina: 3,
    infantry:4,
    cavalry: 3,
    salvo: 3,
    artillery: 4,
    rules: ['Mobility','Evasion','Pursuit','Dragoon', 'Light'],
    weaponry: ['Musket']
  },
  {
    id: 'light_art',
    title: 'Light Artillery',
    base_cost: 60,
    speed: 6,
    melee: 2,
    shoot: [1,1],
    discipline: 3,
    courage: 2,
    stamina: 1,
    infantry:3,
    cavalry: 3,
    salvo: 5,
    artillery: 5,
    rules: ['Integral Command','Crew Defence', 'No Escape'],
    weaponry: <string[]>[]
  },
  {
    id: 'med_art',
    title: 'Medium Artillery',
    base_cost: 60,
    speed: 5,
    melee: 2,
    shoot: [1,1],
    discipline: 3,
    courage: 2,
    stamina: 1,
    infantry:3,
    cavalry: 3,
    salvo: 5,
    artillery: 5,
    rules: ['Integral Command','Crew Defence', 'No Escape'],
    weaponry: <string[]>[]
  },
  {
    id: 'heavy_art',
    title: 'Heavy Artillery',
    base_cost: 60,
    speed: 4,
    melee: 2,
    shoot: [1,1],
    discipline: 3,
    courage: 2,
    stamina: 1,
    infantry:3,
    cavalry: 3,
    salvo: 5,
    artillery: 5,
    rules: ['Integral Command','Crew Defence', 'No Escape'],
    weaponry: <string[]>[]
  },
];

export const companyData = [
  {
    id: 'shot_company',
    title: 'Shot Company',
    base_cost: 55,
    speed: 5,
    melee: 2,
    shoot: [3,3],
    discipline: 3,
    courage: 3,
    stamina: 2,
    infantry:3,
    cavalry: 3,
    salvo: 4,
    artillery: 4,
    rules: ['Light'],
    weaponry: ['Arquebus']
  },
  {
    id: 'pike_company',
    title: 'Pike Company',
    base_cost: 60,
    speed: 4,
    melee: 3,
    shoot: [0,0],
    discipline: 3,
    courage: 3,
    stamina: 3,
    infantry:4,
    cavalry: 5,
    salvo: 4,
    artillery: 4,
    rules: <string[]>[],
    weaponry: ['Pikes']
  },
  {
    id: 'melee_company',
    title: 'Melee Company',
    base_cost: 50,
    speed: 5,
    melee: 3,
    shoot: [0,0],
    discipline: 3,
    courage: 3,
    stamina: 3,
    infantry:4,
    cavalry: 4,
    salvo: 4,
    artillery: 4,
    rules: <string[]>[],
    weaponry: <string[]>[]
  }
];


export const optionData = {
  tercio: {
    default:['Field Square','Modernised','Depleted','+Halberds'],
    options:{
      'Field Square':{
        cost:10,
        rules: ['Squares','Extended Arc of Fire']
      },
      'Viejo': {
        cost: 45,
        stats: {
          courage: 5,
          melee: 5
        }
      },
      'Modernised':{
        cost:15,
        stats: {
          shoot:[4,3]
        },
        not_with:['Field Square']
      },
      'Depleted':{
        cost:-15,
        stats: {
          stamina: 4
        }
      },
      '+Swordsmen':{
        cost:5,
        weaponry:['Swordsmen']
      },
      '+Halberds':{
        cost:5,
        weaponry:['Halberds']
      }
    }
  },
  reformed: {
    default: ['Veteran', 'Raw', 'Hesitant', 'Modernised', '+Halberds'],
    options: {
      'Veteran':{
        cost:10,
        stats: {
          discipline: 5,
        }
      },
      'Raw':{
        cost:-10,
        stats: {
          discipline: 3,
        }
      },
      'Hesitant':{
        cost:-15,
        stats: {
          courage: 3,
        }
      },
      'Mercenaries':{
        cost:-10,
        rules: ['Mercenaries']
      },
      'Modernised':{
        cost:10,
        stats: {
          shoot:[4,4]
        },
      },
      '+Swordsmen':{
        cost:5,
        weaponry:['Greatswords']
      },
      '+Halberds':{
        cost:5,
        weaponry:['Halberds']
      }
    }
  }
};
