class Account{
    protected aid:number;
    protected aname:string;
    protected balance:number;
    constructor(aid:number,aname:string,balance:number){
            console.log('Account class Constructyor call');
            this.aid=aid;
            this.aname=aname;
            this.balance=balance;           
    }

    print():void{
        console.log(`Id ${this.aid} Name ${this.aname} Balance ${this.balance}`);
    }
}

class SavingAccount extends Account{
    limit: number;
    roi:number;
    constructor(aid:number,aname:string,balance:number,limit:number,roi:number){
        super(aid,aname,balance);
        console.log('SavingAccountclass Constructyor call');
        this.limit=this.balance/2;
        this.roi=roi;
    }

    print():void{
      //  super.print(); //if weuse this line then parent class print will work
        console.log(`Limit ${this.limit} ROI ${this.roi}`)
    }
}

var savingAccount:SavingAccount = new SavingAccount(1001,'Ram',99999,40000,4);
savingAccount.print();
savingAccount.print();
