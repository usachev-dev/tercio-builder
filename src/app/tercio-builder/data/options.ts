const shot_company = {
  default_options: ['Veteran', 'Large Company', 'Mercenaries','Musketeers','Skirmishers'],
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
      not_with:['Archers, large','Archers','Crossbowmen']
    },
    'Archers':{
      cost: 0,
      weaponry:['Longbow'],
      weaponry_loss:['Arquebus'],
      stats:{
        shoot: [2,2]
      },
      not_with: ['Large Company','Archers, large','Musketeers']
    },
    'Archers, large':{
      cost: 0,
      weaponry:['Longbow'],
      weaponry_loss:['Arquebus'],
      stats:{
        shoot: [3,3]
      },
      not_with: ['Archers','Musketeers'],
      with_option:['Large Company']
    },
    'Crossbowmen':{
      cost: 5,
      weaponry:['Crossbow'],
      weaponry_loss:['Arquebus'],
      not_with:['Archers, large','Archers','Musketeers']
    },
    'Brigade':{
      cost: 0,
      rules: ['Brigade']
    },
    'Skirmishers':{
      cost: -10,
      stats:{
        courage:2
      },
      rules:['Skirmishers']
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
        not_with:['Musket only'],
        with_option: ['Modernised']
      },
      'Musket only':{
        cost: 5,
        stats: {
          shoot: [3,3]
        },
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
        }
      },
      'Reinforced':{
        cost:20,
        stats: {
          shoot: 5
        }
      },
      'Raw':{
        cost:-10,
        stats: {
          discipline: 3,
        }
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
        weaponry:['Greatswords'],
        not_with:['+Halberds','+Greatswords']
      },
      '+Halberds':{
        cost:5,
        weaponry:['Halberds'],
        not_with:['+Swordsmen','+Greatswords']
      },
      '+Greatswords':{
        cost:5,
        weaponry:['Halberds'],
        not_with:['+Halberds','+Swordsmen']
      },
      'Lancers':{
        weaponry_loss:['Pikes']
      }
    }
  },

  melee_company:{
    default_options: ['Veteran', 'Brave', 'Mob', 'Mercenaries','Light','+Halberds','+Greatswords'],
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
        }
      },
      'Mob':{
        cost: 15,
        stats:{
          stamina: 4
        },
        rules: ['Large'],
        not_with:['Light']
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
        not_with:['+Greatswords']
      },
      '+Greatswords':{
        cost:5,
        weaponry:['Halberds'],
        not_with:['+Halberds']
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
    default_options: ['Veteran','Small Unit'],
    options: {
      'Veteran':{
        cost:10,
        stats: {
          discipline: 3,
        }
      },
      'Small Unit':{
        cost: -15,
        stats:{
          melee: 2,
          stamina: 2
        }
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
    default_options: ['Veteran Crew','Large Battery','Regimental Gun','Leather Gun','Carthorses'],
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
        rules:'Carthorses'
      }
    }
  },

  med_art:{
    default_options: ['Veteran Crew','Large Battery','Mortar','Carthorses','Fortified'],
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
      'Mortar':{
        cost:5,
        rules:['Mortar'],
      },
      'Carthorses':{
        cost:5,
        rules:'Carthorses'
      },
      'Fortified':{
        cost: 10,
        rules:['Fortified']
      }
    }
  },

  heavy_art:{
    default_options: ['Veteran Crew','Large Battery','Mortar','Carthorses','Fortified'],
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
      'Mortar':{
        cost:5,
        rules:['Mortar'],
      },
      'Carthorses':{
        cost:5,
        rules:'Carthorses'
      },
      'Fortified':{
        cost: 10,
        rules:['Fortified']
      }
    }
  }
};
