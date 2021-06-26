import { ItemLocation } from './ItemLocation';
import { Player } from './Player';
import { StartTime } from './StartTime';

export interface Game {
    id: number;

    startDate: string;
    description: string;    

    players: Player[];
    itemLocations: ItemLocation[];
    startTimes: StartTime[];

}