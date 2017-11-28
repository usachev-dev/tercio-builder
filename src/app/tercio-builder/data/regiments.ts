
const default_companies_available = ['shot_company','pike_company', 'melee_company'];

export const regimentData = [
  {
    id: 'foot_regiment',
    title: 'Foot Regiment',
    min_units: 2,
    max_units: 4,
    min_companies: 0,
    max_companies: 2,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: <string[]>[],
    additional_units: <string[]>[],
    companies_available: default_companies_available,
    color: 'blue',
    instead_of: ''
  },
  {
    id: 'horse_regiment',
    title: 'Horse Regiment',
    min_units: 1,
    max_units: 4,
    min_companies: 0,
    max_companies: 2,
    companies_limit: 'units',
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4,
      virtues:['Elan']
    },
    units_available: ['mtd_arquebus', 'cuirassiers', 'light_horse', 'dragoons', 'modern_cav'],
    switch_to: <string[]>[],
    companies_available: ['shot_company_horse'],
    color: 'green',
    instead_of: ''
  },
  {
    id: 'battle_group',
    title: 'Battle Group',
    min_units: 0,
    max_units: 0,
    min_companies: 2,
    max_companies: 4,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: <string[]>[],
    switch_to: <string[]>[],
    companies_available: default_companies_available,
    color: 'yellow',
    instead_of: ''
  },
  {
    id: 'artillery_battery',
    title: 'Artillery Battery',
    min_units: 1,
    max_units: 1,
    min_companies: 0,
    max_companies: 2,
    commander:{
    },
    units_available: ['light_art','med_art','heavy_art'],
    companies_available: default_companies_available,
    color: 'red',
    instead_of: ''
  },
  {
    id: 'eastern_battle_group',
    title: 'Eastern Battle Group',
    min_units: 0,
    max_units: 0,
    min_companies: 1,
    max_companies: 4,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: <string[]>[],
    companies_available: ['melee_company'],
    color: 'yellow',
    instead_of: ''
  },
  {
    id: 'turkey_battle_group',
    title: 'Ottoman Battle Group',
    min_units: 0,
    max_units: 0,
    min_companies: 2,
    max_companies: 4,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: <string[]>[],
    companies_available: ['bashi','azapes'],
    color: 'yellow',
    instead_of: ''
  },
  {
    id: 'armatoles_battle_group',
    title: 'Armatoles Battle Group',
    min_units: 0,
    max_units: 0,
    min_companies: 2,
    max_companies: 4,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: <string[]>[],
    companies_available: ['armatoles'],
    color: 'yellow',
    instead_of: ''
  },
  {
    id: 'balkan_battle_group',
    title: 'Balkan Battle Group',
    min_units: 0,
    max_units: 0,
    min_companies: 1,
    max_companies: 4,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: <string[]>[],
    companies_available: ['shoot_company','pike_company','melee_company','haiduk'],
    color: 'yellow',
    instead_of: ''
  },
  {
    id: 'poland_battle_group',
    title: 'Polish-Lithuanian Battle Group',
    min_units: 0,
    max_units: 0,
    min_companies: 2,
    max_companies: 4,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: <string[]>[],
    companies_available: default_companies_available,
    color: 'yellow',
    instead_of: ''
  },
  {
    id: 'haiduk_battle_group',
    title: 'Haiduk Battle Group',
    min_units: 0,
    max_units: 0,
    min_companies: 2,
    max_companies: 4,
    switch_to: ['poland_battle_group'],
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: <string[]>[],
    companies_available: ['haiduk'],
    color: 'yellow',
    instead_of: ''
  },
  {
    id: 'russian_battle_group',
    title: 'Russian Battle Group',
    min_units: 0,
    max_units: 1,
    min_companies: 2,
    max_companies: 4,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: ['streltsi'],
    companies_available: default_companies_available,
    color: 'yellow',
    instead_of: ''
  },
  {
    id: 'poland_horse_regiment',
    title: 'Polish-Lithuanian Cavalry Regiment',
    min_units: 1,
    max_units: 4,
    min_companies: 0,
    max_companies: 0,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: ['heavy_hussar','lisow'],
    companies_available: default_companies_available,
    color: 'green',
    instead_of: ''
  },
  {
    id: 'balkan_horse_regiment',
    title: 'Balkan Cavalry Regiment',
    min_units: 1,
    max_units: 4,
    min_companies: 0,
    max_companies: 0,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: ['light_hussar','boyar'],
    companies_available: default_companies_available,
    same_unit: false,
    color: 'green',
    instead_of: ''
  },
  {
    id: 'turkey_horse_regiment',
    title: 'Ottoman Cavalry Regiment',
    min_units: 1,
    max_units: 4,
    min_companies: 0,
    max_companies: 0,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: ['sipahi','akinci'],
    same_unit: false,
    companies_available: default_companies_available,
    color: 'green',
    instead_of: ''
  },
  {
    id: 'russian_horse_regiment',
    title: 'Russian Cavalry Regiment',
    min_units: 1,
    max_units: 3,
    min_companies: 0,
    max_companies: 0,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: ['reitar','boyar'],
    same_unit: false,
    companies_available: default_companies_available,
    color: 'green',
    instead_of: ''
  },
  {
    id: 'east_horse_regiment',
    title: 'East Cavalry Regiment',
    min_units: 2,
    max_units: 6,
    min_companies: 0,
    max_companies: 0,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: <string[]>[],
    same_unit: false,
    companies_available: default_companies_available,
    color: 'green',
    instead_of: ''
  },
  {
    id: 'poland_foot_regiment',
    title: 'Polish-Lithuanian Foot Regiment',
    min_units: 1,
    max_units: 4,
    min_companies: 0,
    max_companies: 1,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: ['battalion','levies'],
    companies_available: default_companies_available,
    color: 'blue',
    instead_of: ''
  },
  {
    id: 'russian_foot_regiment',
    title: 'Russian Foot Regiment',
    min_units: 2,
    max_units: 6,
    min_companies: 0,
    max_companies: 0,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: ['battalion','levies','streltsi'],
    companies_available: default_companies_available,
    color: 'blue',
    instead_of: ''
  },
  {
    id: 'turkey_foot_regiment',
    title: 'Ottoman Foot Regiment',
    min_units: 1,
    max_units: 4,
    min_companies: 0,
    max_companies: 2,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: ['janissary'],
    companies_available: ['bashi'],
    color: 'blue',
    instead_of: ''
  },
  {
    id: 'balkan_foot_regiment',
    title: 'Balkan Foot Regiment',
    min_units: 1,
    max_units: 3,
    min_companies: 0,
    max_companies: 2,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: ['battalion'],
    companies_available: ['shoot_company','pike_company','melee_company','haiduk'],
    color: 'blue',
    instead_of: ''
  },
  {
    id: 'russian_artillery_battery',
    title: 'Russian Artillery Battery',
    min_units: 1,
    max_units: 1,
    min_companies: 0,
    max_companies: 2,
    commander:{
    },
    units_available: ['light_art','med_art','heavy_art','super_heavy_art'],
    companies_available: default_companies_available,
    color: 'red',
    instead_of: ''
  },
  {
    id: 'dragoons_regiment',
    title: 'Dragoons Regiment',
    min_units: 1,
    max_units: 2,
    min_companies: 0,
    max_companies: 0,
    commander:{
      cost:{
        0:5,
        1:10,
        2:25,
        3:50,
        4:100
      },
      min_rank: 0,
      max_rank: 4
    },
    units_available: ['dragoons'],
    companies_available: <string[]>[],
    color: 'blue',
    instead_of: ''
  }
];
