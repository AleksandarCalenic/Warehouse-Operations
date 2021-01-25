import { DocumentItem } from "./document";

export class DocumentsList{
    count: number;
    results: DocumentItem[]

    constructor(obj?: any){
        this.count = obj && obj.count || null;
        this.results = obj && obj.results.map(x => { return new DocumentItem(x) }) || []
    }
}

