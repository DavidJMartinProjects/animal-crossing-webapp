import { Keyword } from "./Keyword";

export class ItemLocation {

    constructor(uuid: string, imageUrl: any, description: any) {        
        this.uuid = uuid;
        this.imageUrl = imageUrl;
        this.description = description;
    }
    
    id!: number;
    uuid!:string;

    imageUrl : string = '';
    description : string = '';
    location : string = '';

    // locationKeywords: Keyword[];

}
