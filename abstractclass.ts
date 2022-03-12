abstract class Account{ /// Abstract class is used to prevent from making obect of that class
    
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

//these abstract method are those kind of method which are declared and we are expecting child class will 
    abstract computeROI():void;//declare them  ,these have no defination
    //these methods have to be override compulsolourly
}

 class SavingAccount extends Account{
computeROI(): void {
console.log(`Saving account ROI`)
}
    limit: number;
    roi:number;
    constructor(aid:number,aname:string,balance:number,limit:number,roi:number){
        super(aid,aname,balance);
        console.log('SavingAccountclass Constructyor call');
        this.limit=this.balance/2;
        this.roi=roi;
    }

    print():void{
        console.log(`Limit ${this.limit} ROI ${this.roi}`)
    }
}

var savingAccount:SavingAccount = new SavingAccount(1001,'Ram',99999,40000,4);
savingAccount.print();
savingAccount.print();
savingAccount.computeROI();
