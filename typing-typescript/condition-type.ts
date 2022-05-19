type SomeType = number | string;
type MyConditionalType = SomeType extends string ? string : number;

function someFunction<T>(value: T) {
    type A = T extends boolean
        ? 'Type A'
        : T extends string
        ? 'Type B'
        : T extends number
        ? 'Type C'
        : 'Type D'

    const someOtherFunction = (someArg: T extends boolean ? 'Type A' : 'Type B') => {
        const a: 'Type A' | 'Type B' = someArg;
    };
    return someOtherFunction;
}



const result = someFunction(true);








// -----------------------------------------------------------------------------------------------------
// | No. |     Date        |       Buy price       |       Sell price          |   K   |   P   |   Y   |
// -----------------------------------------------------------------------------------------------------
// |  1. |   2021-01-01    |       1,650,0000      |        1,850,000          |   10  |   0   |   0   |
// |  2. |   2021-01-01    |       1,650,0000      |        1,850,000          |   10  |   0   |   5   |
// |  3. |   2021-01-01    |       1,650,0000      |        1,850,000          |   10  |   0   |   0   |
// |  4. |   2021-01-01    |       1,650,0000      |              -            |   10  |   0   |   0   |
// -----------------------------------------------------------------------------------------------------
// |Total|       4         |    15,626,000,000     |      1,509,800,000        |   40  |   0   |   5   |
// -----------------------------------------------------------------------------------------------------









type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | number | boolean | never;



// type Exclude<T, U> = T extends U ? never : T;
type resultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
//                       |       T       |     U    |
//                       ----------------------------
// which about "Exclude<>" code work and can be think as following
// 'a' extends 'a' | 'b' ? never :  'a' => never
// 'b' extends 'a' | 'b' ? never :  'b' => never
// 'c' extends 'a' | 'b' ? never :  'c' => 'c'



// compare in distributed way
type MyType<T> = (() => T) extends () => string | number ? T : never;
type MyResult = MyType<string | number | boolean>;


// compare in non distributed way by using tuples
type MyType2<T> = [T] extends () => [string | number] ? T : never;
type MyResult2 = MyType2<string | number | boolean>;






type InferSomething<T> = T extends infer U ? U : never;
type inferred = InferSomething<'I am a string'>;

