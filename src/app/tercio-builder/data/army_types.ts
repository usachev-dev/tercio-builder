const commander_note="Regiment commanders must have the same or lower rank than CnC. Battle group commanders must have lower rank than CnC."
export const armyTypeData = [
  {
    id:'standart_army',
    title: 'Standart Army',
    special: commander_note,
    commander:{
      cost:{
        2:0,
        3:25,
        4:100,
        5:250
      },
      min_rank: 2,
      max_rank: 5
    },
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
    special:'2 Horse Regiments must be of the same type of cavalry. There must be more Horse regiments than from any other type. Artillery must have Carthorses. '+commander_note,
    commander:{
      cost:{
        2:0,
        3:25,
        4:100,
        5:250
      },
      min_rank: 2,
      max_rank: 5,
      virtues: ['Elan']
    },
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
    special: commander_note,
    commander:{
      cost:{
        2:0,
        3:25,
        4:100,
        5:250
      },
      min_rank: 2,
      max_rank: 5
    },
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
  },
  {
    id:'poland_army',
    title: 'Polish-Lithuanian Army',
    special: commander_note+' At least 1 Regiment must be of Heavy Hussars. You must have at least as many cavalry regiments as the sum of others.',
    commander:{
      cost:{
        2:0,
        3:25,
        4:100,
        5:250
      },
      min_rank: 2,
      max_rank: 5
    },
    regiments: [
      {
        id: 'poland_foot_regiment',
        min: 0,
        max:2
      },
      {
        id: 'poland_horse_regiment',
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
      },
      {
        id: 'dragoons_regiment',
        min:0,
        max:1
      }
    ]
  },
  {
    id:'balkan_army',
    title: 'Balkan Army',
    special: commander_note+' To include the Artillery Battry is compulsory to include also the Infantry Regiment. Only one of the Cavalry Regiment can include Boyars. If the army does not include the Foot Regiment it gets the Horde rule.',
    commander:{
      cost:{
        2:0,
        3:25,
        4:100,
        5:250
      },
      min_rank: 2,
      max_rank: 5
    },
    regiments: [
      {
        id: 'balkan_foot_regiment',
        min: 0,
        max:1
      },
      {
        id: 'balkan_horse_regiment',
        min:1,
        max:6
      },
      {
        id: 'artillery_battery',
        min:0,
        max:2
      },
      {
        id: 'balkan_battle_group',
        min:0,
        max:3
      },
      {
        id: 'dragoons_regiment',
        min:0,
        max:1
      }
    ]
  },
  {
    id:'russia_army',
    title: 'Russian Army',
    special: commander_note+' There cannot be more Artillery Batteries than Infantry Regiments',
    commander:{
      cost:{
        2:0,
        3:25,
        4:100,
        5:250
      },
      min_rank: 2,
      max_rank: 5
    },
    regiments: [
      {
        id: 'russian_foot_regiment',
        min: 1,
        max:6
      },
      {
        id: 'russian_horse_regiment',
        min:0,
        max:3
      },
      {
        id: 'russian_artillery_battery',
        min:0,
        max:3
      },
      {
        id: 'russian_battle_group',
        min:0,
        max:2
      },
      {
        id: 'dragoons_regiment',
        min:0,
        max:1
      }
    ]
  },
  {
    id:'turkey_army',
    title: 'Ottoman Army',
    special: commander_note,
    commander:{
      cost:{
        2:0,
        3:25,
        4:100,
        5:250
      },
      min_rank: 2,
      max_rank: 5
    },
    regiments: [
      {
        id: 'turkey_foot_regiment',
        min: 1,
        max:4
      },
      {
        id: 'turkey_horse_regiment',
        min:1,
        max:4
      },
      {
        id: 'artillery_battery',
        min:0,
        max:2
      },
      {
        id: 'turkey_battle_group',
        min:0,
        max:2
      },
      {
        id: 'dragoons_regiment',
        min:0,
        max:1
      }
    ]
  },
  {
    id:'riders_army',
    title: 'Eastern Riders Army',
    special: commander_note+' There must be more Cavalry Regiments than Battle Groups. If the Cossacks choose Zaporozhian or Don Host, it must be the same for the entire army. The army has the Horde rule. All Cossacks from the same regiment must choose the same options.',
    commander:{
      cost:{
        2:0,
        3:25,
        4:100,
        5:250
      },
      min_rank: 2,
      max_rank: 5
    },
    regiments: [
      {
        id: 'east_horse_regiment',
        min:2,
        max:8
      },
      {
        id: 'eastern_battle_group',
        min:0,
        max:2
      }
    ]
  }
];
