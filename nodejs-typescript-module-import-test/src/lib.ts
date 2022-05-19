// global.ts

let value:any[] = [];

export function add(newValue: number): void{
    value.push(newValue);
}


export function get(): any[]{
    return value;
}