import { ItemLocation } from "./ItemLocation";
import { Player } from "./Player";
import { StartTime } from "./StartTime";

export class Game {

    id!: number;
    
    startDate : string = '';
    description : string = '';
    active: boolean = false;

    players: {} = Player;

    itemLocations!: ItemLocation[];

    startTime: string = '';
    
}
