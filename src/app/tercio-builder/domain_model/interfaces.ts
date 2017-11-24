
export interface armyTypeData {
  commander: commanderData;
  regiments: regimentData[];
  id: string;
  title: string;
  special: string;
}

export interface regimentData {
  color: string;
  commander: commanderData;
  companies_available: string[];
  id: string;
  max_companies: number;
  max_units: number;
  min_companies: number;
  min_units: number;
  title: string;
  units_available: string[];
  same_unit?: boolean;
  companies_limit?: string;
}

export interface commanderData {
  cost: any; // {0: 5, 1: 10, 2: 25, 3: 50, 4: 100}
  max_rank: number;
  min_rank: number;
  virtues?: string[];
  traits?: string[];
}

export interface traitData {
  id: string;
  description: string;
}

export interface unitAvailableData {
  id: string;
  title: string;
}

export interface option {
  cost: number;
  id: string;
  not_with?: string[];
  rules?: string[];
  rules_loss?: string[];
  stats?: stats;
  weaponry?: string[];
  weaponry_loss?: string[];
  with_option?: string[];
}

export interface stats {
  speed?: number;
  melee?: number;
  shoot?: number[];
  discipline?: number;
  courage?: number;
  stamina?: number;
  infantry?: number;
  cavalry?: number;
  salvo?: number;
  artillery?: number;
}

export interface unitData {
  base_cost: number;
  id: string;
  options: option[];
  rules: string[];
  stats: stats;
  title: string;
  weaponry: string[];
}
