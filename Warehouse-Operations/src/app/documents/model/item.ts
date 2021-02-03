export class Item {
    _id: number;
    price: number;
    quantity: number;
    article: string;
    documents: number;

  
    constructor(obj?: any) {
      this._id = obj && obj._id || null;
      this.price = obj && obj.price || 0;
      this.quantity = obj && obj.quantity || 0;
      this.article = obj && obj.article || "";
      this.documents = obj && obj.documents || 0;
    }
  }