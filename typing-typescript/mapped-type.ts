type Properties = 'propA' | 'propB';
type MyMappedProperty = {
    [P in Properties] : boolean;
}
type MyMappedProperty2<Properties extends string | number | symbol> = {
    [P in Properties] : boolean;
}

type MyMappedProperty3<T> = {
    [P in keyof T] : T[P];
}



type MyNewType = MyMappedProperty2<'propA' | 'propB'>;
type MyNewType2 = MyMappedProperty3<{a: "a", b: 'b'}>;




type Pick1<T, Properties extends keyof T> = {
    [P in Properties] : T[P]
}

type MyNewType3 = Pick1<{a: 'a', b: "b", c: 'c'}, 'c'>;





type Record1<K extends keyof any, T> = {
    [P in K] : T;
}

type Record2 = { // is same as "Record1<string, number>""
    [key: string]: number // <- we use "key" keyword for getting key so called "Index signature"
}

// merge type to Mapped-type
type Record3<K extends keyof any, T> = {
    [P in K] : T;
} & {
    someProperty: string;
}

const someRecord: Record1<string, number> = {
    apple: 1
};

const someRecord2: Record2 = { 
    orange: 2
}

const someRecord3: Record3<'a' | 'b', number> = {
    a: 1,
    b: 3,
    someProperty: ""
}

