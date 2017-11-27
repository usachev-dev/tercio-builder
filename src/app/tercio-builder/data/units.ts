export const unitData = [
  {
    id: 'tercio',
    title: 'Tercio',
    base_cost: 140,
    stats: {
      speed: 4,
      melee: 4,
      shoot: [3, 2],
      discipline: 5,
      courage: 4,
      stamina: 5,
      infantry: 4,
      cavalry: 5,
      salvo: 4,
      artillery: 3
    },
    rules: ['Large'],
    weaponry: ['Pikes','Arquebus/Musket']
  },
  {
    id: 'classic_sqd',
    title: 'Classic Squadron',
    base_cost: 110,
    stats: {
      speed: 4,
      melee: 4,
      shoot: [3, 2],
      discipline: 4,
      courage: 4,
      stamina: 4,
      infantry: 4,
      cavalry: 5,
      salvo: 4,
      artillery: 3
    },
    rules: <string[]>[],
    weaponry: ['Pikes','Arquebus/Musket']
  },
  {
    id: 'reformed',
    title: 'Reformed Battalion',
    base_cost: 125,
    stats: {
      speed: 4,
      melee: 4,
      shoot: [4, 2],
      discipline: 4,
      courage: 4,
      stamina: 4,
      infantry: 4,
      cavalry: 5,
      salvo: 4,
      artillery: 4
    },
    rules: ['Brigade'],
    weaponry: ['Pikes','Arquebus/Musket']
  },
  {
    id: 'modern',
    title: 'Modern Squadron',
    base_cost: 110,
    stats: {
      speed: 4,
      melee: 3,
      shoot: [4, 4],
      discipline: 5,
      courage: 4,
      stamina: 3,
      infantry: 4,
      cavalry: 5,
      salvo: 4,
      artillery: 4
    },
    rules: ['Brigade'],
    weaponry: ['Pikes','Musket']
  },
  {
    id: 'cuirassiers',
    title: 'Cuirassiers',
    base_cost: 100,
    stats: {
      speed: 7,
      melee: 4,
      shoot: [2, 2],
      discipline: 3,
      courage: 4,
      stamina: 3,
      infantry: 4,
      cavalry: 4,
      salvo: 3,
      artillery: 4
    },
    rules: ['Mobility','Evasion','Pursuit'],
    weaponry: ['Pistol']
  },
  {
    id: 'mtd_arquebus',
    title: 'Mounted Arquebusier',
    base_cost: 65,
    stats: {
      speed: 8,
      melee: 3,
      shoot: [3, 3],
      discipline: 3,
      courage: 3,
      stamina: 3,
      infantry: 4,
      cavalry: 3,
      salvo: 3,
      artillery: 4
    },
    rules: ['Mobility','Evasion','Pursuit','Caracole'],
    weaponry: ['Arquebus']
  },
  {
    id: 'light_horse',
    title: 'Light Horse',
    base_cost: 50,
    stats: {
      speed: 8,
      melee: 3,
      shoot: [2, 2],
      discipline: 2,
      courage: 3,
      stamina: 2,
      infantry: 4,
      cavalry: 3,
      salvo: 4,
      artillery: 5,
    },
    rules: ['Mobility','Evasion','Pursuit','Light', 'Extended Arc of Fire'],
    weaponry: ['Pistol']
  },
  {
    id: 'dragoons',
    title: 'Dragoons',
    base_cost: 75,
    stats: {
      speed: 8,
      melee: 3,
      shoot: [3, 3],
      discipline: 3,
      courage: 3,
      stamina: 3,
      infantry: 4,
      cavalry: 3,
      salvo: 3,
      artillery: 4
    },
    rules: ['Mobility','Evasion','Pursuit','Dragoon', 'Light'],
    weaponry: ['Musket']
  },
  {
    id: 'modern_cav',
    title: 'Modern cavalry',
    base_cost: 85,
    stats: {
      speed: 8,
      melee: 4,
      shoot: [0, 0],
      discipline: 3,
      courage: 3,
      stamina: 3,
      infantry: 4,
      cavalry: 4,
      salvo: 3,
      artillery: 4
    },
    rules: ['Mobility','Evasion','Pursuit'],
    weaponry: <string[]>[]
  },
  {
    id: 'light_art',
    title: 'Light Artillery',
    base_cost: 60,
    stats: {
      speed: 6,
      melee: 2,
      shoot: [1, 1],
      discipline: 3,
      courage: 2,
      stamina: 1,
      infantry: 3,
      cavalry: 3,
      salvo: 5,
      artillery: 5
    },
    rules: ['Integral Command','Crew Defence', 'No Escape'],
    weaponry: <string[]>[]
  },
  {
    id: 'med_art',
    title: 'Medium Artillery',
    base_cost: 60,
    stats: {
      speed: 5,
      melee: 2,
      shoot: [1, 1],
      discipline: 3,
      courage: 2,
      stamina: 1,
      infantry: 3,
      cavalry: 3,
      salvo: 5,
      artillery: 5
    },
    rules: ['Integral Command','Crew Defence', 'No Escape'],
    weaponry: <string[]>[]
  },
  {
    id: 'heavy_art',
    title: 'Heavy Artillery',
    base_cost: 60,
    stats: {
      speed: 4,
      melee: 2,
      shoot: [1, 1],
      discipline: 3,
      courage: 2,
      stamina: 1,
      infantry: 3,
      cavalry: 3,
      salvo: 5,
      artillery: 5
    },
    rules: ['Integral Command','Crew Defence', 'No Escape'],
    weaponry: <string[]>[]
  },
  {
    id: 'shot_company',
    title: 'Shot Company',
    base_cost: 55,
    stats: {
      speed: 5,
      melee: 2,
      shoot: [3, 3],
      discipline: 3,
      courage: 3,
      stamina: 2,
      infantry: 3,
      cavalry: 3,
      salvo: 4,
      artillery: 4
    },
    rules: ['Light'],
    weaponry: ['Arquebus']
  },
  {
    id: 'shot_company_horse',
    title: 'Shot Company',
    base_cost: 55,
    stats: {
      speed: 5,
      melee: 2,
      shoot: [3, 3],
      discipline: 3,
      courage: 3,
      stamina: 2,
      infantry: 3,
      cavalry: 3,
      salvo: 4,
      artillery: 4
    },
    rules: ['Light', 'Commanded Shot'],
    weaponry: ['Arquebus']
  },
  {
    id: 'pike_company',
    title: 'Pike Company',
    base_cost: 60,
    stats: {
      speed: 4,
      melee: 3,
      shoot: [0, 0],
      discipline: 3,
      courage: 3,
      stamina: 3,
      infantry: 4,
      cavalry: 5,
      salvo: 4,
      artillery: 4
    },
    rules: <string[]>[],
    weaponry: ['Pikes']
  },
  {
    id: 'melee_company',
    title: 'Melee Company',
    base_cost: 50,
    stats: {
      speed: 5,
      melee: 3,
      shoot: [0, 0],
      discipline: 3,
      courage: 3,
      stamina: 3,
      infantry: 4,
      cavalry: 4,
      salvo: 4,
      artillery: 4
    },
    rules: <string[]>[],
    weaponry: <string[]>[]
  },
  {
    id: 'musketeer_corps',
    title: 'Musketeer Corps',
    base_cost: 85,
    stats: {
      speed: 5,
      melee: 4,
      shoot: [4, 4],
      discipline: 3,
      courage: 3,
      stamina: 3,
      infantry: 3,
      cavalry: 3,
      salvo: 4,
      artillery: 4
    },
    rules: <string[]>[],
    weaponry: ['Musket']
  },
  {
    id: 'battalion',
    title: 'Battalion',
    base_cost: 100,
    stats: {
      speed: 4,
      melee: 4,
      shoot: [3, 2],
      discipline: 3,
      courage: 4,
      stamina: 4,
      infantry: 4,
      cavalry: 5,
      salvo: 4,
      artillery: 3
    },
    rules: <string[]>[],
    weaponry: ['Pikes','Arquebus/Musket']
  },
  {
    id: 'levies',
    title: 'Levies',
    base_cost: 50,
    stats: {
      speed: 4,
      melee: 2,
      shoot: [2, 2],
      discipline: 2,
      courage: 3,
      stamina: 4,
      infantry: 4,
      cavalry: 4,
      salvo: 4,
      artillery: 3
    },
    rules: <string[]>[],
    weaponry: ['Pikes','Arquebus']
  },
  {
    id: 'haiduk',
    title: 'Haiduks',
    base_cost: 70,
    stats: {
      speed: 5,
      melee: 3,
      shoot: [3, 3],
      discipline: 3,
      courage: 3,
      stamina: 3,
      infantry: 3,
      cavalry: 3,
      salvo: 4,
      artillery: 4
    },
    rules: ['Light','Ambush'],
    weaponry: ['Musket']
  },
  {
    id: 'heavy_hussar',
    title: 'Heavy Hussar',
    base_cost: 115,
    stats: {
      speed: 7,
      melee: 4,
      shoot: [0, 0],
      discipline: 4,
      courage: 4,
      stamina: 3,
      infantry: 4,
      cavalry: 4,
      salvo: 4,
      artillery: 4
    },
    rules: ['Mobility','Evasion','Pursuit','Choragiew'],
    weaponry: ['Lances']
  },
  {
    id: 'lisow',
    title: 'Lisowczycy',
    base_cost: 55,
    stats: {
      speed: 8,
      melee: 3,
      shoot: [2, 2],
      discipline: 2,
      courage: 3,
      stamina: 2,
      infantry: 4,
      cavalry: 3,
      salvo: 4,
      artillery: 5
    },
    rules: ['Mobility','Evasion','Pursuit','Light','Extended Arc of Fire','Frenzied'],
    weaponry: ['Bow']
  },
  {
    id: 'streltsi',
    title: 'Streltsi',
    base_cost: 100,
    stats: {
      speed: 5,
      melee: 4,
      shoot: [3, 3],
      discipline: 4,
      courage: 4,
      stamina: 3,
      infantry: 4,
      cavalry: 4,
      salvo: 4,
      artillery: 4
    },
    rules: <string[]>[],
    weaponry: ['Bardiche','Arquebus']
  },
  {
    id: 'boyar',
    title: 'Boyars',
    base_cost: 70,
    stats: {
      speed: 6,
      melee: 3,
      shoot: [0, 0],
      discipline: 3,
      courage: 4,
      stamina: 3,
      infantry: 4,
      cavalry: 4,
      salvo: 3,
      artillery: 4
    },
    rules: ['Evasion','Pursuit','Heavy Cavalry'],
    weaponry: ['Lances']
  },
  {
    id: 'reitar',
    title: 'Reitar',
    base_cost: 70,
    stats: {
      speed: 7,
      melee: 3,
      shoot: [3, 3],
      discipline: 3,
      courage: 3,
      stamina: 3,
      infantry: 4,
      cavalry: 4,
      salvo: 3,
      artillery: 4
    },
    rules: ['Evasion','Pursuit','Mobility','Mercenaries','Caracole'],
    weaponry: ['Pistols']
  },
  {
    id: 'super_heavy_art',
    title: 'Super Heavy Artillery',
    base_cost: 95,
    stats: {
      speed: 0,
      melee: 2,
      shoot: [1, 1],
      discipline: 3,
      courage: 2,
      stamina: 1,
      infantry: 3,
      cavalry: 3,
      salvo: 5,
      artillery: 5
    },
    rules: ['Integral Command','Crew Defence', 'No Escape', 'Super Heavy Gun'],
    weaponry: <string[]>[]
  },

  {
    id: 'janissary',
    title: 'Janissaries',
    base_cost: 70,
    stats: {
      speed: 5,
      melee: 3,
      shoot: [3, 3],
      discipline: 3,
      courage: 3,
      stamina: 4,
      infantry: 4,
      cavalry: 4,
      salvo: 4,
      artillery: 4
    },
    rules: <string[]>[],
    weaponry: ['Arquebus']
  },
  {
    id: 'bashi',
    title: 'Bashi-Bazouk',
    base_cost: 40,
    stats: {
      speed: 5,
      melee: 2,
      shoot: [3, 3],
      discipline: 2,
      courage: 2,
      stamina: 2,
      infantry: 3,
      cavalry: 3,
      salvo: 4,
      artillery: 4
    },
    rules: ['Skirmishers','Open Order','Mercenaries'],
    weaponry: ['Arquebus']
  },
  {
    id: 'azapes',
    title: 'Azapes',
    base_cost: 55,
    stats: {
      speed: 6,
      melee: 3,
      shoot: [3, 3],
      discipline: 2,
      courage: 3,
      stamina: 2,
      infantry: 3,
      cavalry: 3,
      salvo: 4,
      artillery: 4
    },
    rules: ['Light','Vanguard','Extended Arc of Fire'],
    weaponry: ['Bow']
  },
  {
    id: 'armatoles',
    title: 'Armatoles',
    base_cost: 55,
    stats: {
      speed: 5,
      melee: 3,
      shoot: [3, 3],
      discipline: 3,
      courage: 3,
      stamina: 3,
      infantry: 3,
      cavalry: 3,
      salvo: 4,
      artillery: 4
    },
    rules: ['Light','Mercenaries','Extended Arc of Fire'],
    weaponry: ['Arquebus']
  },
  {
    id: 'sipahi',
    title: 'Sipahi',
    base_cost: 70,
    stats: {
      speed: 8,
      melee: 3,
      shoot: [2, 2],
      discipline: 3,
      courage: 3,
      stamina: 3,
      infantry: 4,
      cavalry: 4,
      salvo: 3,
      artillery: 4
    },
    rules: ['Evasion','Pursuit','Mobility'],
    weaponry: ['Lances','Bow']
  },
  {
    id: 'akinci',
    title: 'Akinci',
    base_cost: 60,
    stats: {
      speed: 8,
      melee: 3,
      shoot: [3, 3],
      discipline: 2,
      courage: 2,
      stamina: 2,
      infantry: 4,
      cavalry: 3,
      salvo: 4,
      artillery: 5
    },
    rules: ['Evasion','Pursuit','Mobility','Light','Extended Arc of Fire','Vanguard'],
    weaponry: ['Bow']
  },
  {
    id: 'light_hussar',
    title: 'Light Hussar',
    base_cost: 45,
    stats: {
      speed: 8,
      melee: 3,
      shoot: [2, 2],
      discipline: 2,
      courage: 3,
      stamina: 2,
      infantry: 4,
      cavalry: 3,
      salvo: 4,
      artillery: 5
    },
    rules: ['Evasion','Pursuit','Mobility','Light','Extended Arc of Fire','Mercenaries'],
    weaponry: ['Pistols']
  },

  {
    id: 'plastun',
    title: 'Plastun',
    base_cost: 70,
    stats: {
      speed: 6,
      melee: 3,
      shoot: [2, 2],
      discipline: 2,
      courage: 3,
      stamina: 2,
      infantry: 3,
      cavalry: 3,
      salvo: 4,
      artillery: 4
    },
    rules: ['Skirmishers','Ambush'],
    weaponry: ['Arquebus']
  },
  {
    id: 'cossack',
    title: 'Cossacks',
    base_cost: 55,
    stats: {
      speed: 8,
      melee: 3,
      shoot: [2, 2],
      discipline: 2,
      courage: 3,
      stamina: 2,
      infantry: 4,
      cavalry: 3,
      salvo: 4,
      artillery: 5
    },
    rules: ['Evasion','Pursuit','Mobility','Light','Open Order','Frenzied'],
    weaponry: ['Pistols']
  },
  {
    id: 'tartar',
    title: 'Tartars',
    base_cost: 65,
    stats: {
      speed: 8,
      melee: 3,
      shoot: [2, 2],
      discipline: 2,
      courage: 3,
      stamina: 2,
      infantry: 4,
      cavalry: 3,
      salvo: 4,
      artillery: 5
    },
    rules: ['Evasion','Pursuit','Mobility','Light','Open Order','Extended Arc of Fire','Harasser'],
    weaponry: ['Bow']
  },
];
