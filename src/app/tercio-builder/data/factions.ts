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
        options:['Viejo','+Swordsmen']
      }
    }
  },

  {
    id: 'england',
    title: 'Kingdom of England',
    sort: 500,
    flag: 'assets/icons/flags/england.svg',
    army_types:['standart_army','mounted_army', 'companies_army'],
    regiment_modifiers: {
      foot_regiment: {
        units_available: ['reformed']
      }
    },
    unit_modifiers: {
      shot_company: {
        options: ['Archers','Archers, large']
      },
      reformed: {
        options: ['+Greatswords']
      }
    }
  },

  {
    id: 'sweden',
    title:'Swedish Empire',
    sort: 800,
    flag:'assets/icons/flags/sweden.svg',
    army_types:['standart_army','mounted_army', 'companies_army'],
    regiment_modifiers: {
      foot_regiment: {
        units_available: ['modern'],
      }
    },
    unit_modifiers: {
      shot_company:{
        options:['Brigade']
      },
      modern_cav:{
        options:['Determined']
      }
    }
  },

  {
    id: 'hre',
    title:'Holy Roman Empire',
    sort: 100,
    flag:'assets/icons/flags/hre.svg',
    army_types:['standart_army','mounted_army', 'companies_army'],
    regiment_modifiers: {
      foot_regiment: {
        units_available: ['tercio', 'classic_sqd'],
      }
    },
    unit_modifiers: {
      classic_sqd:{
        options:['Large Squadron', 'Modernised']
      },
      shot_company:{
        options:['Crossbowmen']
      },
      cuirassiers:{
        options:['Large Formation', 'Heavy']
      },
      mtd_arquebus:{
        options:['Large Formation']
      }
    }
  },

  {
    id: 'protestant',
    title:'German Protestant',
    sort: 300,
    flag:'assets/icons/flags/protestant.svg',
    army_types:['standart_army','mounted_army', 'companies_army'],
    regiment_modifiers: {
      foot_regiment: {
        units_available: ['classic_sqd', 'reformed'],
      }
    },
    unit_modifiers: {
      classic_sqd:{
        options:['Large Squadron', 'Modernised']
      },
      reformed:{
        options:['Mercenaries','+Greatswords']
      },
      shot_company:{
        options:['Crossbowmen']
      },
      mtd_arquebus:{
        options:['Large Formation']
      },
      cuirassiers:{
        options:['Large Formation', 'Heavy']
      },
      modern_cav:{
        options:['Pistoliers']
      }
    }
  },

  {
    id: 'denmark',
    title:'Kingdom of Denmark-Norway',
    sort: 400,
    flag:'assets/icons/flags/denmark.svg',
    army_types:['standart_army','mounted_army', 'companies_army'],
    regiment_modifiers: {
      foot_regiment: {
        units_available: ['reformed'],
      }
    },
    unit_modifiers: {
      reformed:{
        options:['Mercenaries']
      },
      modern_cav:{
        options:['Pistoliers']
      }
    }
  },

  {
    id: 'france',
    title:'Kingdom of France',
    sort: 600,
    flag:'assets/icons/flags/france.svg',
    army_types:['standart_army','mounted_army', 'companies_army'],
    regiment_modifiers: {
      foot_regiment: {
        units_available: ['reformed'],
      }
    },
    unit_modifiers: {
      cuirassiers:{
        options:['Heavy']
      },
      modern_cav:{
        options:['Gendarmes']
      }
    }
  },

  {
    id: 'trans',
    title:'Principality of Transylvania',
    sort: 700,
    flag:'assets/icons/flags/trans.svg',
    army_types:['standart_army','mounted_army', 'companies_army'],
    regiment_modifiers: {
      foot_regiment: {
        units_available: ['classic_sqd'],
      }
    },
    unit_modifiers: {
      cuirassiers:{
        options:['Heavy']
      },
      shot_company:{
        options:['Crossbowmen']
      }
    }
  },

  {
    id: 'united',
    title:'United Provinces of the Low Countries',
    sort: 900,
    flag:'assets/icons/flags/united.svg',
    army_types:['standart_army','mounted_army', 'companies_army'],
    regiment_modifiers: {
      foot_regiment: {
        units_available: ['reformed'],
      }
    },
    unit_modifiers: {
      cuirassiers:{
        options:['Heavy']
      },
      shot_company:{
        options:['Crossbowmen']
      },
      modern_cav:{
        options:['Pistoliers']
      }
    }
  },
];
