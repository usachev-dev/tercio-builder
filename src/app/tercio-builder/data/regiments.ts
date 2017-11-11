
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
    companies_available: default_companies_available,
    color: 'blue'
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
    companies_available: ['shot_company_horse'],
    color: 'green'
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
    commander:{
    },
    units_available: ['light_art','med_art','heavy_art'],
    companies_available: default_companies_available,
    color: 'red'
  }
];
