export interface SignUP{
    name:string,
    password:string,
    email:string
};
export interface Login{
    email:string,
    password:string
};
export interface product{
    reset(): unknown
    name:string,
    price:number,
    category:string
    color:string,
    description:string,
    image:string,
    id:number
}