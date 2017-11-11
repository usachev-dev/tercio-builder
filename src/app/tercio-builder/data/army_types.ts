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
  }
];
