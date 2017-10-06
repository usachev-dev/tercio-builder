 import * as _ from 'lodash';
const regiment = {
  min_units: 2,
  max_units: 4,
  min_companies: 0,
  max_companies: 2,
  min_commander_rank: 1,
  max_commander_rank: 4
};

const types = {
  'Tercio':{},
  'Classic Squadron':{},
  'Reformed Battalion':{},
  'Modern Squadron':{},
  'Battle Group':{
    min_companies: 2,
    max_companies: 4,
    min_units: 0,
    max_units: 0,
    min_commander_rank: 0
  },
  'Cuirassiers':{
    min_units: 1
  },
  'Mounted Arquebusier':{
    min_units: 1
  },
  'Light Horse':{
    min_units: 1
  },
  'Dragoons':{
    min_units: 1,
    max_units: 2,
    min_companies: 0,
    max_companies: 0,
    min_commander_rank: 0
  },
  'Artillery Battery':{
    min_companies: 0,
    max_companies: 1,
    min_units: 1,
    max_units: 1
  }
};
let data = {};
_.each(types, function(type: object, key: string){
  data[key] = _.extend(_.clone(regiment),_.extend({
    type: key
  }, type));
});
export const regimentData = data;
