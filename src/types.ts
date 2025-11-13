export type YesNo = 'yes' | 'no';
export type CosyLevel = 'cosy' | 'buzzy';
export type GuinnessQuality = 'Top Crême' | 'Good Crême';

export interface PubSelection {
  cosy: CosyLevel;
  food: YesNo;
  outdoors: YesNo;
  fireplace: YesNo;
  guinness: GuinnessQuality;
  pub: string;
}

export interface AppState {
  // Placeholder for future state shared across modules
}


