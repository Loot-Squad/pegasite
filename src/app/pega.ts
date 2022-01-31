export interface Pega {
    id: number;
    name: string;
    ownerAddress: string;
    renterAddress: string | null; 
    ownerPegaRewards: number | null; 
    renterPegaRewards: number | null; 
    lastRenterAddress: string | null; 
    lastRenterPrice: number | null; 
    lastRenterRentMode: string | null; 
    lastRenterRentDuration: number | null;  
    lastRenterRentAt: number | null;  
    lastRenterIsDirect: boolean | null, 
    energy: number;  
    lastReduceEnergy: number;  
    service: string;  
    gender: string; 
    bloodLine: string; 
    breedType: string;  
    breedCount: number;  
    fatherId: number;  
    motherId: number;  
    pegaTotalRaces: number;  
    totalRaces: number;  
    gold: number;  
    silver: number;  
    bronze:number;  
    win: number;  
    lose: number;  
    speed: number;  
    strength: number;  
    wind: number;  
    water: number;  
    fire: number;  
    lightning: number;  
    bornTime: number;  
    winRate: number; 
    lastBreedTime: number;  
    rentTimeEnd: number; 
    breedTimeStr?: string;
    rentTimeStr?: string;
  }

export interface breedingPair{
  male: Pega;
  female: Pega;
}