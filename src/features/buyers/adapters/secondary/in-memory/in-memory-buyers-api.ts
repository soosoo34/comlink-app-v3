/*
export class InMemoryBuyersApi implements ContactApiPort {
  buyers!: BuyerInterface[];

  constructor() {
    this.buyers = [];
  }

  public feedBuyers(buyers: BuyerInterface[]): void {
    this.buyers = buyers;
  }

  public clearBuyers(): void {
    this.buyers = [];
  }

  getBuyers(): Observable<any> {
    return new Observable(subscriber => {
      subscriber.next(this.buyers);
      subscriber.complete();
    });
  }

  getArchivedBuyers(): Observable<any> {
    return new Observable(subscriber => {
      subscriber.next(this.buyers);
      subscriber.complete();
    });
  }
}*/
