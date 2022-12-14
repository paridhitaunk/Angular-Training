interface shape
{
shapename:string;
printname():string;
print(): void;
}

class cone implements shape
{
    shapename:"cone";
    r:number;
    l:number;
    printname()
    {
        return this.shapename;
    }
    print()
    {
        let a:number = (3.15*this.r*(this.r+this.l));
        console.log("area of cone is  "+ a);
    }
}

class sphere implements shape
{
    shapename:"sphere";
    r:number;
    constructor(r:number)
    {
        this.r=r;
    } printname()
    {
        return this.shapename;
    }
    print()
    {
        let a:number = (4*3.15*this.r*this.r);
        console.log("area of sphere is  "+ a);
    }
}

class rectangle implements shape
{
    shapename:"rectangle";
    b:number;
    l:number;
    constructor(b:number,l:number)
    {
        this.b=b;
        this.l=l;
    }
    printname()
    {
        return this.shapename;
    }
    print()
    {
        let a:number = (this.l*this.b);
        console.log("area of rectangle is  "+ a);
    }
}