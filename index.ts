enum Country{
    Egypt = 1,
    KSA,
    USA
}
let Countries = ['Egypt', 'KSA', 'USA']

// {id, name, price, isAvialable}
// interface
interface Product<T>{
    id: number,
    name: 'p1' | 'p2' | 'p3' | 'p4',
    price: number,
    isAvialable: boolean,
    description: string | null,
    country: Country,
    DT: T
}

let p1: Product<string> = {
    id: 0,
    name: "p1",
    price: 0,
    isAvialable: false,
    description: null,
    country: Country.Egypt,
    DT: '101'
}

let p2: Product<number> = {
    id: 0,
    name: "p1",
    price: 0,
    isAvialable: false,
    description: null,
    country: Country.Egypt,
    DT: 101
}


if(p1.country === Country.USA){
    console.log("your country not supported")
}

function sum(x : number, y: number){
    console.log( x + y)
}

interface ResultModel<T> {
    statusCode: number,
    isSuccess: boolean,
    data: T
}

let result: ResultModel<Product<number>> = {}