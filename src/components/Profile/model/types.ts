interface IOneStats {
    value: number;
    desc: string;
    ru: string;
}
export interface IStatistics {
    'intelligence': IOneStats;
    'dexterity': IOneStats;
    'strength': IOneStats;
    'charisma': IOneStats;
    'unknownStat': IOneStats;
}

export type TTips = {
    name: string;
    value: number;
}
export interface ITips {
    '50x50': TTips;
    '75x25': TTips;
    'dimaHelp' : TTips;
}
export type TNameTips = keyof ITips
export type IStatisticsKeys = keyof IStatistics;
export interface IProfile {
    firstName: string;
    lastName: string;
    stats: IStatistics;
    tips: ITips;
    life: number;
    unused: number;
}
export interface IProfileShema {
    isLoading: boolean,
    error?: string,
    data?: IProfile
}