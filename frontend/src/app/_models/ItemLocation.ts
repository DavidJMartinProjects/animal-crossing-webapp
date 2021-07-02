import { Keyword } from "./Keyword";

export class ItemLocation {

    constructor(imageUrl: string, description: string) {
        this.imageUrl = imageUrl;
        this.description = description;
    }
    
    id!: number;

    imageUrl : string = '';
    description : string = '';
    location : string = '';

    // locationKeywords: Keyword[];

}
