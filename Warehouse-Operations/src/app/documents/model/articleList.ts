export class ArticleList{
    count: number;
    results: ArticleItem[]

    constructor(obj?: any){
        this.count = obj && obj.count || null;
        this.results = obj && obj.results.map(x => {return new ArticleItem(x)}) || []
    }
}

export class ArticleItem{
    name: string;
    boja: string;
    code: string
    _id: number

    constructor(obj?: any){
        this.name = obj && obj.name || '';
        this.boja = obj && obj.boja || '';
        this.code = obj && obj.code || null;
        this._id = obj && obj._id || null
    }
}

