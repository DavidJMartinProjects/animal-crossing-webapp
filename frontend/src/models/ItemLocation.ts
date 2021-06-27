import { Keyword } from "./Keyword";

export interface ItemLocation {

    id: number;

    imageUrl: string;
    description: string;
    location: string;

    locationKeywords: Keyword[];

}
