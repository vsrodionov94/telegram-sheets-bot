export class Transaction {
  constructor(
    private _id: string,
    private _name: string,
    private _description: string,
    private _date: Date,
    private _cost: number,
  ) {}
}
