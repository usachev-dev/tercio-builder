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
      },
      musketeer_corps: {
        options: ['New Model Army']
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
        additional_units: ['musketeer_corps']
      }
    },
    unit_modifiers: {
      shot_company:{
        options:['Brigade']
      },
      modern_cav:{
        options:['Determined']
      },
      musketeer_corps:{
        options:['Reinforced']
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
      },
      horse_regiment: {
        units_available: ['lisow'],
      },
      balkan_horse_regiment: {
        instead_of:'horse_regiment'
      },
      east_horse_regiment: {
        units_available: ['cossack'],
        instead_of:'horse_regiment'
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
      },
      horse_regiment: {
        units_available: ['lisow'],
      },
      east_horse_regiment: {
        units_available: ['tartar'],
        instead_of: 'horse_regiment'
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
        additional_units: ['musketeer_corps']
      }
    },
    unit_modifiers: {
      cuirassiers:{
        options:['Heavy']
      },
      modern_cav:{
        options:['Gendarmes']
      },
      musketeer_corps:{
        options:['Reinforced']
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
      },
      horse_regiment: {
        units_available: ['boyar'],
      },
      east_horse_regiment: {
        instead_of: 'horse_regiment',
        units_available: ['cossack','tartar'],
      },
      battle_group: {
      },
      haiduk_battle_group: {
        instead_of: 'battle_group'
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
        additional_units: ['musketeer_corps']
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
      },
      musketeer_corps:{
        options:['Reinforced']
      }
    }
  },

  {
    id: 'cossack',
    title:'Cossacks',
    sort: 9000,
    flag:'assets/icons/flags/cossack.svg',
    army_types:['riders_army'],
    regiment_modifiers: {
      eastern_battle_group: {
        companies_available: ['plastun'],
      },
      east_horse_regiment: {
        units_available: ['cossack','tartar'],
      }
    },
    unit_modifiers: {
      cossack: {
        options: ['Zaporozhian Host', 'Don Host']
      }
    }
  },

  {
    id: 'tartar',
    title:'Tartars',
    sort: 10000,
    flag:'assets/icons/flags/tartar.svg',
    army_types:['riders_army'],
    regiment_modifiers: {
      eastern_battle_group: {
        companies_available: ['azapes'],
      },
      east_horse_regiment: {
        units_available: ['cossack','tartar'],
      }
    },
    unit_modifiers: {

    }
  },

  {
    id: 'croatia',
    title:'Croatia',
    sort: 8000,
    flag:'assets/icons/flags/croatia.svg',
    army_types:['balkan_army'],
    regiment_modifiers: {

    },
    unit_modifiers: {
      light_hussar: {
        options: ['Fiercers', 'Elusives']
      },
      boyars: {
        options: ['Hussar Boyars']
      }
    }
  },

  {
    id: 'hungary',
    title:'Kingdom of Hungary',
    sort: 7000,
    flag:'assets/icons/flags/hungary.svg',
    army_types:['balkan_army'],
    regiment_modifiers: {

    },
    unit_modifiers: {
      light_hussar: {
        options: ['Large Unit']
      },
      boyars: {
        options: ['Large unit','Siculi','Hussar Boyars']
      }
    }
  },

  {
    id: 'russia',
    title:'Tsardom of Russia',
    sort: 5000,
    flag:'assets/icons/flags/russia.svg',
    army_types:['russia_army'],
    regiment_modifiers: {
      east_horse_regiment: {
        instead_of: 'russian_horse_regiment',
        units_available: ['cossack'],
      },
    },
    unit_modifiers: {
      boyars: {
        options: ['Large unit','Inozemskii']
      },
      battalion: {
        options: ['Large unit','Modernized','+Bardiches']
      },
      levies: {
        options: ['Large unit','Gulyay-Gorod','Obedients','+Bardiches']
      },
      cossack: {
        options: ['Don Host']
      }
    }
  },

  {
    id: 'turkey',
    title:'Ottoman Empire',
    sort: 6000,
    flag:'assets/icons/flags/turkey.svg',
    army_types:['turkey_army'],
    regiment_modifiers: {
      armatoles_battle_group: {
        instead_of: 'turkey_battle_group'
      }
    },
    unit_modifiers: {

    }
  },

  {
    id: 'poland',
    title: 'Polish-Lithuanian Commonwealth',
    sort: 4000,
    flag: 'assets/icons/flags/poland.svg',
    army_types: ['poland_army'],
    regiment_modifiers: {
      haiduk_battle_group: {
        instead_of: 'battle_group'
      },
      east_horse_regiment: {
        instead_of: 'poland_horse_regiment',
        units_available: ['cossack'],
      },
    },
    unit_modifiers: {
      lisow: {
        options: ['Organized']
      },
      haiduk: {
        options: ['Well Equiped']
      },
      battalion: {
        options: ['Large unit', 'Modernized', 'German Mercenaries']
      },
      levies: {
        options: ['Pospolite Ruszenie', 'Large unit', 'Tabor', 'Obedients']
      },
      cossack: {
        options: ['Zaporozhian Host']
      }
    }
  }

];
