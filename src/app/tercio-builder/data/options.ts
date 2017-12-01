const shot_company = {
  default_options: ['Veteran', 'Large Company', 'Mercenaries','Musketeers','Skirmishers','Flintlock'],
  options: {
    'Veteran':{
      cost:10,
      stats: {
        discipline: 4,
      }
    },
    'Large Company':{
      cost:20,
      stats: {
        shoot: [4,4],
        stamina: 3
      },
      rules_loss:['Light'],
      not_with:['Archers']
    },
    'Mercenaries':{
      cost:-5,
      rules: ['Mercenaries']
    },
    'Musketeers':{
      cost: 10,
      weaponry:['Musket'],
      weaponry_loss:['Arquebus'],
      not_with:['Archers, large','Archers','Crossbowmen','Flintlock']
    },
    'Flintlock':{
      cost: 20,
      weaponry:['Flintlock'],
      weaponry_loss:['Arquebus'],
      not_with:['Archers, large','Archers','Crossbowmen','Musketeers','Brigade']
    },
    'Archers':{
      cost: 0,
      weaponry:['Longbow'],
      weaponry_loss:['Arquebus'],
      stats:{
        shoot: [2,2]
      },
      not_with: ['Large Company','Archers, large','Musketeers','Flintlock','Crossbowmen']
    },
    'Archers, large':{
      cost: 0,
      weaponry:['Longbow'],
      weaponry_loss:['Arquebus'],
      stats:{
        shoot: [3,3]
      },
      not_with: ['Archers','Musketeers','Flintlock','Crossbowmen'],
      with_option:['Large Company']
    },
    'Crossbowmen':{
      cost: +5,
      weaponry:['Crossbow'],
      weaponry_loss:['Arquebus'],
      not_with:['Archers, large','Archers','Musketeers','Flintlock']
    },
    'Brigade':{
      cost: 5,
      rules: ['Brigade'],
      not_with: ['Flintlock']
    },
    'Skirmishers':{
      cost: -10,
      stats:{
        courage:2
      },
      rules:['Skirmishers']
    },
    'Tories':{
      cost: 5,
      rules: ['Ambush'],
      not_with: ['Archers, large']
    }
  }
};

export const optionData = {
  tercio: {
    default_options:['Field Square','Modernised','Depleted','+Halberds'],
    options:{
      'Field Square':{
        cost:10,
        rules: ['Squares','Extended Arc of Fire'],
        not_with:['Modernised']
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

  classic_sqd: {
    default_options:['Raw','Veteran','Hesitant','Mercenaries', '+Halberds', '+Greatswords', 'Musket only', 'Musket only, Modernised'],
    options:{
      'Raw':{
        cost:-10,
        stats: {
          discipline: 3
        },
        not_with:['Veteran']
      },
      'Veteran':{
        cost:10,
        stats: {
          discipline: 5
        },
        not_with:['Raw']
      },
      'Large Squadron':{
        cost:20,
        stats: {
          stamina: 5
        },
        rules: ['Large']
      },
      'Modernised':{
        cost:15,
        stats: {
          shoot:[4,3]
        },
        not_with:['Musket only']
      },
      'Hesitant':{
        cost:-15,
        stats: {
          courage: 3
        }
      },
      'Mercenaries':{
        cost:-10,
        rules:['Mercenaries']
      },
      '+Greatswords':{
        cost:5,
        weaponry:['Greatswords']
      },
      '+Halberds':{
        cost:5,
        weaponry:['Halberds']
      },
      'Musket only, Modernised':{
        cost: 5,
        stats: {
          shoot: [4,4]
        },
        weaponry: ['Musket'],
        weaponry_loss:['Arquebus/Musket'],
        not_with:['Musket only'],
        with_option: ['Modernised']
      },
      'Musket only':{
        cost: 5,
        stats: {
          shoot: [3,3]
        },
        weaponry: ['Musket'],
        weaponry_loss:['Arquebus/Musket'],
        not_with:['Modernised', 'Musket only, Modernised']
      },
    }
  },

  reformed: {
    default_options: ['Veteran', 'Raw', 'Hesitant', 'Modernised', '+Halberds'],
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
        weaponry:['Musket'],
        weaponry_loss:['Arquebus/Musket']
      },
      '+Greatswords':{
        cost:5,
        weaponry:['Greatswords']
      },
      '+Halberds':{
        cost:5,
        weaponry:['Halberds']
      }
    }
  },

  modern: {
    default_options: ['Veteran', 'Reinforced', 'Raw', 'Hesitated', 'Mercenaries'],
    options: {
      'Veteran':{
        cost:25,
        stats: {
          discipline: 5,
          melee: 4
        },
        not_with:['Raw']
      },
      'Reinforced':{
        cost:20,
        stats: {
          shoot: [5,5]
        }
      },
      'Raw':{
        cost:-10,
        stats: {
          discipline: 3,
        },
        not_with:['Veteran']
      },
      'Hesitated':{
        cost:-15,
        stats: {
          courage: 3,
        }
      },
      'Mercenaries':{
        cost:-10,
        rules: ['Mercenaries']
      }
    }
  },

  shot_company:shot_company,

  shot_company_horse:shot_company,

  pike_company:{
    default_options: ['Veteran', 'Mercenaries','+Halberds','+Greatswords','+Swordsmen','Lancers'],
    options: {
      'Veteran':{
        cost:10,
        stats: {
          discipline: 4,
        }
      },
      'Mercenaries':{
        cost:-5,
        rules: ['Mercenaries']
      },
      '+Swordsmen':{
        cost:5,
        weaponry:['Swordsmen'],
        not_with:['+Halberds','+Greatswords']
      },
      '+Halberds':{
        cost:5,
        weaponry:['Halberds'],
        not_with:['+Swordsmen','+Greatswords']
      },
      '+Greatswords':{
        cost:5,
        weaponry:['Greatswords'],
        not_with:['+Halberds','+Swordsmen']
      },
      'Lancers':{
        weaponry_loss:['Pikes']
      }
    }
  },

  melee_company:{
    default_options: ['Veteran', 'Mercenaries','Light','+Halberds','+Greatswords'],
    options: {
      'Veteran':{
        cost:10,
        stats: {
          discipline: 4,
        }
      },
      'Brave':{
        cost: 30,
        stats:{
          melee: 4,
          courage: 4
        },
        not_with:['Highlanders', 'Tories']
      },
      'Mob':{
        cost: 15,
        stats:{
          stamina: 4
        },
        rules: ['Large'],
        not_with:['Light','Tories','Highlanders']
      },
      'Mercenaries':{
        cost:-5,
        rules: ['Mercenaries']
      },
      'Light':{
        rules:['Light'],
        not_with:['Mob']
      },
      '+Halberds':{
        cost:5,
        weaponry:['Halberds'],
        not_with:['+Greatswords','+Bardiches']
      },
      '+Greatswords':{
        cost:5,
        weaponry:['Halberds'],
        not_with:['+Halberds','+Bardiches']
      },
      '+Bardiches':{
        cost:5,
        weaponry:['Bardiches'],
        not_with:['+Halberds','+Greatswords']
      },
      'Highlanders':{
        cost: 5,
        rules: ['Frenzied'],
        not_with:['Tories','Brave','Mob']
      },
      'Tories': {
        cot: 10,
        weaponry: ['Grenades'],
        rules: ['Skirmishers'],
        not_with: ['Mob','Highlanders','Brave']
      }
    }
  },

  mtd_arquebus:{
    default_options: ['Veteran','+Pistol','Crossbowmen'],
    options: {
      'Large Formation':{
        cost: 20,
        stats:{
          shoot: [4,4],
          stamina: 4
        }
      },
      'Veteran':{
        cost:10,
        stats: {
          discipline: 4,
        }
      },
      '+Pistol':{
        cost:5,
        weaponry:['Pistol']
      },
      'Crossbowmen':{
        cost:0,
        weaponry: ['Crossbow'],
        weaponry_loss: ['Arquebus'],
        rules_loss: ['Caracole']
      }
    }
  },

  cuirassiers:{
    default_options: ['Veteran','Fearless','Modern Cavalry','Mercenaries','Caracole','+Lances'],
    options: {
      'Large Formation':{
        cost: 10,
        stats:{
          stamina: 4
        }
      },
      'Veteran':{
        cost:10,
        stats: {
          discipline: 4,
        }
      },
      'Fearless':{
        cost:20,
        stats: {
          melee: 5
        },
        rules:['Impetuous']
      },
      'Heavy':{
        cost: 25,
        stats:{
          courage: 5,
          speed: 6
        },
        not_with:['Modern']
      },
      'Modern Cavalry':{
        cost: -15,
        stats:{
          speed: 8,
          courage: 3,
          shoot: [0,0]
        },
        not_with: ['Heavy'],
        weaponry_loss: ['Pistol']
      },
      'Mercenaries':{
        cost:-10,
        rules: ['Mercenaries']
      },
      'Caracole':{
        cost: 5,
        rules:['Caracole']
      },
      '+Pistol':{
        cost:5,
        weaponry:['Pistol']
      },
      '+Lances':{
        cost:5,
        weaponry: ['Lances'],
      }
    }
  },

  light_horse:{
    default_options: ['Veteran','Fearless','Caracole','Mounted Archers','Mercenaries','+Arquebus'],
    options: {
      'Veteran':{
        cost:10,
        stats: {
          discipline: 3,
        }
      },
      'Fearless':{
        cost:10,
        stats: {
          melee: 4
        },
        rules:['Impetuous']
      },
      'Caracole':{
        cost: 5,
        rules:['Caracole']
      },
      'Mounted Archers':{
        cost: 0,
        stats:{
          melee: 2
        },
        weaponry: ['Bow'],
        weaponry_loss: ['Pistol']
      },
      'Mercenaries':{
        cost:-5,
        rules: ['Mercenaries']
      },
      '+Arquebus':{
        cost:5,
        weaponry:['Arquebus']
      }
    }
  },

  dragoons:{
    default_options: ['Veteran','Small Unit','Elite','Modernized','Outdated'],
    options: {
      'Veteran':{
        cost:10,
        stats: {
          discipline: 4,
        }
      },
      'Small Unit':{
        cost: -15,
        stats:{
          melee: 2,
          stamina: 2
        }
      },
      'Elite':{
        cost: 20,
        stats:{
          discipline: 4
        },
        rules: ['Elite']
      },
      'Modernized':{
        cost: 10,
        weaponry_loss:['Musket'],
        weaponry:['Flintlock'],
        not_with: ['Outdated']
      },
      'Outdated':{
        cost: -10,
        weaponry_loss:['Musket'],
        weaponry:['Arquebus'],
        not_with: ['Modernized']
      }
    }
  },

  modern_cav:{
    default_options: ['Veteran','Mercenaries','Demi-Cuirassiers'],
    options: {
      'Veteran': {
        cost: 10,
        stats: {
          discipline: 4,
        }
      },
      'Mercenaries': {
        cost:-10,
        rules: ['Mercenaries']
      },
      'Demi-Cuirassiers': {
        cost: 10,
        stats: {
          courage: 4
        },
        not_with:['Gendarmes','Pistoliers','Determined']
      },
      'Determined':{
        cost: 20,
        stats: {
          melee: 5
        },
        rules:['Brigade'],
        not_with:['Gendarmes','Pistoliers','Demi-Cuirassiers']
      },
      'Gendarmes':{
        cost:30,
        stats:{
          speed: 7,
          melee: 5,
          discipline: 5
        },
        not_with:['Determined','Pistoliers','Demi-Cuirassiers']
      },
      'Pistoliers':{
        cost:10,
        stats:{
          shoot:[2,2]
        },
        rules:['Caracole'],
        weaponry:['Pistol']
      },
      not_with:['Gendarmes','Determined','Demi-Cuirassiers']
    }
  },

  light_art:{
    default_options: ['Leather Gun','Carthorses'],
    options: {
      'Veteran Crew':{
        cost:5,
        stats: {
          discipline: 4,
        }
      },
      'Large Battery':{
        cost:35,
        stats: {
          stamina: 2,
          shoot: [2,2]
        },
        not_with: ['Regimental Gun']
      },
      'Regimental Gun':{
        cost:15,
        rules:['Regimental Gun'],
        not_with:['Large Battery']
      },
      'Leather Gun':{
        cost:-5,
        rules:['Experimental'],
      },
      'Carthorses':{
        cost:5,
        rules:'Carthorses',
        stats: {
          speed: '2/6'
        }
      }
    }
  },

  med_art:{
    default_options: ['Mortar','Carthorses','Fortified'],
    options: {
      'Veteran Crew':{
        cost:5,
        stats: {
          discipline: 4,
        }
      },
      'Large Battery':{
        cost: 40,
        stats: {
          stamina: 2,
          shoot: [2,2]
        }
      },
      'Mortar':{
        cost:5,
        rules:['Mortar'],
      },
      'Carthorses':{
        cost:5,
        rules:'Carthorses',
        stats: {
          speed: '0/5'
        }
      },
      'Fortified':{
        cost: 10,
        rules:['Fortified']
      }
    }
  },

  heavy_art:{
    default_options: ['Mortar','Carthorses','Fortified'],
    options: {
      'Veteran Crew':{
        cost:5,
        stats: {
          discipline: 4,
        }
      },
      'Large Battery':{
        cost: 40,
        stats: {
          stamina: 2,
          shoot: [2,2]
        },
        not_with: ['Regimental Gun']
      },
      'Mortar':{
        cost:5,
        rules:['Mortar'],
      },
      'Carthorses':{
        cost:10,
        rules:'Carthorses',
        stats: {
          speed: '0/4'
        }
      },
      'Fortified':{
        cost: 10,
        rules:['Fortified']
      }
    }
  },

  musketeer_corps: {
    default_options: ['Veterans'],
    options: {
      'Veterans':{
        cost: 10,
        stats: {
          discipline: 4,
        },
        rules:['Brigade'],
        not_with:['New Model Army']
      },
      'New Model Army':{
        cost:30,
        stats: {
          shoot: [5,5],
          discipline: 4
        },
        rules: ['Brigade'],
        not_with:['Veterans','Reinforced']
      },
      'Reinforced':{
        cost:20,
        stats: {
          shoot: [5,5]
        },
        not_with:['New Model Army']
      }
    }
  },
  battalion: {
    default_options: ['Raw', '+Halberdiers', '+Greatswords', 'Mercenaries'],
    options: {
      'Large unit':{
        cost: 20,
        stats: {
          stamina: 5
        },
        rules:['Large']
      },
      'Modernized':{
        cost: 20,
        stats: {
          shoot: [4,4]
        },
        weaponry:['Musket'],
        weaponry_loss:['Arquebus/Musket']
      },
      '+Halberds':{
        cost:5,
        weaponry:['Halberds']
      },
      '+Greatswords':{
        cost:5,
        weaponry:['Greatswords']
      },
      '+Bardiches':{
        cost:5,
        weaponry:['Bardiches']
      },
      'Raw':{
        cost:-15,
        stats: {
          courage: 3,
        }
      },
      'Mercenaries':{
        cost:-10,
        rules: ['Mercenaries'],
        not_with:['German Mercenaries']
      },
      'German Mercenaries':{
        cost:0,
        rules: ['Mercenaries'],
        stats: {
          discipline: 4,
        },
        not_with:['Mercenaries']
      }
    }
  },
  levies: {
    default_options: ['Mob', 'Well Equiped', 'Outdated', '-Pikes'],
    options: {
      'Pospolite Ruszenie': {
        cost: 25,
        stats: {
          melee: 3,
          courage: 4
        }
      },
      'Large unit': {
        cost: 15,
        stats: {
          stamina: 5
        }
      },
      'Tabor': {
        cost: 15,
        rules:['Mobile Fortress']
      },
      'Gulyay-Gorod': {
        cost: 25,
        stats: {
          courage: 4
        },
        rules:['Mobile Fortress']
      },
      'Obedients':{
        cost: 10,
        stats: {
          discipline: 3
        }
      },
      'Mob':{
        cost: 10,
        stats: {
          melee: 3
        },
        rules: ['Impetuous']
      },
      'Well Equiped': {
        cost: 5,
        weaponry: ['Musket'],
        weaponry_loss: ['Arquebus'],
        not_with: ['Outdated']
      },
      'Outdated': {
        cost: 0,
        weaponry: ['Crossbow'],
        weaponry_loss: ['Arquebus'],
        not_with: ['Well Equiped']
      },
      '-Pikes': {
        cost: -5,
        weaponry_loss: ['Pikes'],
      },
      '+Bardiches':{
        cost:5,
        weaponry:['Bardiches']
      }
    }
  },
  haiduk: {
    default_options: ['Veterans','Poorly Equiped','Scarce Unit','+Pistols','+Halberds'],
    options: {
      'Veterans': {
        cost: 10,
        stats: {
          discipline: 3
        },
        rules:['Vanguard']
      },
      'Well Equiped': {
        cost: 10,
        weaponry: ['Flintlock'],
        weaponry_loss: ['Musket'],
        not_with: ['Poorly Equiped']
      },
      'Poorly Equiped': {
        cost: -10,
        weaponry: ['Arquebus'],
        weaponry_loss: ['Musket'],
        not_with: ['Well Equiped']
      },
      'Scarce Unit': {
        cost: -10,
        stats: {
          melee: 2,
          stamina: 2
        }
      },
      '+Halberds':{
        cost:5,
        weaponry:['Halberds']
      },
      '+Pistols':{
        cost:5,
        weaponry:['Pistols'],
        not_with: ['Well Equiped']
      }
    }
  },
  heavy_hussar: {
    default_options: ['Large unit','Husarska','Pancerna','Petyhorcy','Lekka'],
    options: {
      'Large unit':{
        cost: 15,
        stats: {
          stamina: 4
        }
      },
      'Husarska':{
        cost: 25,
        stats: {
          courage: 5
        },
        weaponry:['Heavy Lances']
      },
      'Pancerna': {
        cost: 10,
        stats: {
          melee: 5
        },
        rules:['Heavy Cavalry'],
        rules_loss:['Mobility']
      },
      'Petyhorcy': {
        cost: 20,
        stats: {
          melee: 5
        },
        weaponry:['Heavy Lances']
      },
      'Lekka': {
        cost: 5,
        stats: {
          speed: 8,
          shoot: [2,2]
        },
        weaponry: ['Pistols'],
        weaponry_loss: ['Lances']
      }
    }
  },
  lisow:{
    default_options: ['+Arquebus','+Pistols'],
    options: {
      'Organized':{
        cost: 15,
        stats: {
          discipline: 3
        },
        rules: ['Choragiew']
      },
      '+Arquebus':{
        cost: 5,
        weaponry:['Arquebus']
      },
      '+Pistols':{
        cost: 5,
        weaponry:['Pistols'],
      }
    }
  },
  streltsi:{
    default_options: ['Large Sotnia','Gulyay-Gorod','Modernized','+Pikes'],
    options: {
      'Large Sotnia':{
        cost: 0,
        stats: {
          discipline: 3,
          stamina: 4
        }
      },
      'Gulyay-Gorod': {
        cost: 10,
        rules:['Mobile Fortress'],
        not_with:['+Pikes']
      },
      'Modernized':{
        cost: 10,
        weaponry:['Musket'],
        weaponry_loss:['Arquebus']
      },
      '+Pikes':{
        cost: 5,
        weaponry:['Pikes'],
        not_with:['Gulyay-Gorod']
      }
    }
  },
  boyar:{
    default_options: ['Archers','Shooters','Lancers'],
    options: {
      'Large unit':{
        cost: 25,
        stats:{
          stamina: 4,
          courage: 4
        },
        not_with: ['Shooters']
      },
      'Archers':{
        cost: 5,
        stats: {
          shoot: [2,2]
        },
        weaponry: ['Bows'],
        not_with:['Lancers','Shooters','Shooters, large']
      },
      'Shooters':{
        cost: 5,
        stats: {
          shoot: [2,2]
        },
        weaponry: ['Arquebus'],
        not_with:['Lancers','Archers','Shooters, large']
      },
      'Shooters, large':{
        cost: 5,
        stats: {
          shoot: [3,3]
        },
        weaponry: ['Arquebus'],
        not_with:['Lancers','Archers','Shooters'],
        with_option: ['Large unit']
      },
      'Lancers': {
        cost: 5,
        weaponry: ['Heavy Lances']
      },
      'Inozemskii':{
        cost: 0,
        stats: {
          discipline: 4
        },
        rules: ['Mercenaries'],
        not_with:['Siculi', 'Hussar Boyars']
      },
      'Siculi':{
        cost: 15,
        stats: {
          discipline: 4,
          speed: 7
        },
        not_with:['Inozemskii', 'Hussar Boyars']
      },
      'Hussar Boyars':{
        cost: 10,
        stats: {
          speed: 7
        },
        rules: ['Mobility'],
        rules_loss: ['Heavy Cavalry'],
        not_with:['Inozemskii', 'Siculi']
      },
    }
  },
  reitar: {
    default_options: ['Large unit','+Arquebus'],
    options: {
      'Large unit':{
        cost: 25,
        stats: {
          stamina: 4,
          melee: 4
        }
      },
      '+Arquebus':{
        cost: 5,
        weaponry:['Arquebus']
      }
    }
  },
  super_heavy_art: {
    default_options: <string[]>[],
    options: {
    }
  },


  janissary: {
    default_options: ['Modernized','+Halberds','+Pikes','+Grenades','Cemaat','Beuluks','Sekban','Acemi'],
    options: {
      'Modernized': {
        cost: 15,
        weaponry: ['Musket'],
        weaponry_loss: ['Arquebus']
      },
      '+Halberds': {
        cost:5,
        weaponry:['Halberds']
      },
      '+Pikes': {
        cost:5,
        weaponry:['Pikes']
      },
      '+Grenades': {
        cost:5,
        weaponry:['Grenades']
      },
      'Cemaat': {
        cost: 15,
        stats: {
          courage: 4
        },
        rules: ['Vanguard'],
        not_with:['Beuluks','Sekban','Acemi']
      },
      'Beuluks': {
        cost: 20,
        stats: {
          discipline: 4,
          melee: 4
        },
        not_with:['Cemaat','Sekban','Acemi']
      },
      'Sekban': {
        cost: 10,
        stats: {
          shoot: [4,4]
        },
        rules: ['Large','Mercenaries'],
        not_with:['Beuluks','Cemaat','Acemi']
      },
      'Acemi': {
        cost: -10,
        stats: {
          shoot: [2,2],
          discipline: 2
        },
        not_with:['Beuluks','Cemaat','Sekban']
      },
    }
  },
  bashi:{
    default_options: ['Modernized','Delibas','+Pistols','+Grenades',],
    options: {
      'Modernized': {
        cost: 10,
        weaponry: ['Musket'],
        weaponry_loss:['Arquebus']
      },
      'Delibas': {
        cost: 5,
        stats: {
          melee: 3
        },
        rules: ['Frenzied']
      },
      '+Pistols': {
        cost:5,
        weaponry:['Pistols']
      },
      '+Grenades': {
        cost:5,
        weaponry:['Grenades']
      },
    }
  },
  azapes: {
    default_options: ['Modernized','Scattered'],
    options: {
      'Modernized': {
        cost: 0,
        weaponry: ['Arquebus'],
        weaponry_loss: ['Bow']
      },
      'Scattered': {
        cost: 5,
        rules: ['Skirnishers','Open Order']
      }
    }
  },
  armantoles: {
    default_options: ['Klephtopolemos','Scarce','+Pistols'],
    options: {
      'Klephtopolemos': {
        cost: 5,
        rules: ['Vanguard','Ambush']
      },
      'Scarce': {
        cost: -10,
        stats: {
          melee: 2,
          stamina: 2
        }
      },
      '+Pistols': {
        cost:5,
        weaponry:['Pistols']
      },
    }
  },
  sipahi: {
    default_options: ['Modernized','Large unit','Javelineers','Timariot','Kipikulu Sipahi','Silahtar','Garip'],
    options: {
      'Modernized':{
        cost: 10,
        stats: {
          shoot: [3,3]
        },
        weaponry: ['Arquebus'],
        weaponry_loss: ['Bow']
      },
      'Large unit': {
        cost: 10,
        stats: {
          stamina: 4
        },
        not_with:['Garip']
      },
      'Javileneers':{
        cost: 5,
        weaponry:['Javelin'],
        rules:['Extended Arc of Fire']
      },
      'Timariot':{
        cost: 5,
        stats: {
          discipline: 4
        },
        rules: ['Heavy Cavalry'],
        rules_loss: ['Mobility'],
        not_with: ['Kipikulu Sipahi','Silahtar','Garip']
      },
      'Kipikulu Sipahi':{
        cost: 20,
        stats: {
          discipline: 4,
          melee: 4
        },
        not_with: ['Timariot','Silahtar','Garip']
      },
      'Silahtar':{
        cost: 10,
        stats: {
          courage: 4,
          speed: 7
        },
        rules: ['Heavy Cavalry'],
        rules_loss: ['Mobility'],
        not_with: ['Timariot','Kipikulu Sipahi','Garip']
      },
      'Garip':{
        cost: -10,
        stats: {
          stamina: 2,
          speed: 9
        },
        rules: ['Heavy Cavalry'],
        rules_loss: ['Mobility'],
        not_with: ['Timariot','Kipikulu Sipahi','Silahtar','Large unit']
      }
    }
  },
  akinci: {
    default_options: ['Modernized','Deliler','+Lances'],
    options: {
      'Modernized':{
        cost: 0,
        weaponry: ['Arquebus'],
        weaponry_loss: ['Bow']
      },
      '+Lances': {
        cost: 5,
        weaponry: ['Lances']
      },
      'Deliler': {
        cost: 5,
        stats: {
          speed: 9
        },
        rules: ['Open Order','Impetuous']
      }
    }
  },
  light_hussar: {
    default_options: ['Archers','Shooters','+Lances','Explorers'],
    options: {
      'Regulars':{
        cost: 10,
        stats: {
          discipline: 3
        },
        rules_loss:['Mercenaries']
      },
      'Fierces':{
        cost: 5,
        rules:['Impetuous','Frenzied'],
        rules_loss:['Mercenaries']
      },
      'Archers': {
        cost: 5,
        weaponry: ['Bow'],
        not_with: ['Shooters']
      },
      'Shooters': {
        cost: 15,
        weaponry: ['Arquebus'],
        rules: ['Caracole'],
        stats: {
          shoot: [3,3]
        }
      },
      '+Lances': {
        cost: 5,
        weaponry: ['Lances']
      },
      'Explorers': {
        cost: 10,
        rules: ['Vanguard','Skirmishers'],
        not_with:['Large Unit','Elusives']
      },
      'Large Unit': {
        cost: 15,
        stats: {
          stamina: 3,
          melee: 4
        },
        rules_loss: ['Light'],
        not_with:['Explorers','Elusives']
      },
      'Elusives': {
        cost: 10,
        rules: ['Harasser','Open Order'],
        not_with:['Explorers','Large Unit']
      }
    }
  },

  plastun: {
    default_options: ['Large Plastun','Veterans','Tabor','Well Equiped','+Pistols'],
    options: {
      'Large Plastun':{
        cost: 10,
        stats: {
          shoot: [3,3],
          stamina: 3
        },
        rules_loss:['Ambush']
      },
      'Veterans': {
        cost: 10,
        stats: {
          discipline: 10
        }
      },
      'Tabor': {
        cost: 10,
        rules: ['Mobile Fortress']
      },
      'Well Equiped': {
        cost: 10,
        weaponry: ['Musket'],
        weaponry_loss: ['Arquebus']
      },
      '+Pistols': {
        cost: 5,
        weaponry: ['Pistols']
      }
    }
  },
  cossack: {
    default_options: ['Veterans','Armoured','Large Unit','Mercenaries','Archers','+Arquebus','+Lances'],
    options: {
      'Veterans': {
        cost: 10,
        stats: {
          discipline: 3,
        }
      },
      'Armoured': {
        cost: 15,
        stats: {
          courage: 4
        },
        rules_loss: ['Light']
      },
      'Large Unit': {
        cost: 10,
        stats: {
          shoot: [3,3],
          stamina: 3
        },
        rules_loss: ['Open Order']
      },
      'Mercenaries': {
        cost: -5,
        rules: ['Mercenaries']
      },
      'Archers': {
        cost: 5,
        weaponry: ['Bows'],
        rules: ['Extended Arc of Fire'],
        weaponry_loss:['Pistols']
      },
      '+Arquebus': {
        cost: 5,
        weaponry: ['Arquebus']
      },
      '+Lances': {
        cost: 5,
        weaponry: ['Lances']
      },
      'Zaporozhian Host':{
        cost: 15,
        stats: {
          melee: 4
        }
      },
      'Don Host': {
        cost: 10,
        stats: {
          speed: 9
        },
        rules: ['Harasser']
      }
    }
  },
  tartar: {
    default_options: ['Raiders','Veterans','+Pistols','+Arquebus','+Lances'],
    options: {
      'Raiders': {
        cost: 10,
        stats: {
          speed: 9,
          shoot: [3,3]
        }
      },
      'Veterans': {
        cost: 5,
        stats: {
          discipline: 3
        },
        rules: ['Mercenaries']
      },
      '+Pistols': {
        cost: 5,
        weaponry: ['Pistols']
      },
      '+Arquebus': {
        cost: 5,
        weaponry: ['Arquebus']
      },
      '+Lances': {
        cost: 5,
        weaponry: ['Lances']
      },
    }
  }
};
