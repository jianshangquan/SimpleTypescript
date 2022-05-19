type Person = {
    name: string,
    age: number,
    location: string,
    phoneNumber: any[]
}


const john: Person = {
    name: 'John',
    age: 25,
    location: '',
    phoneNumber: []
}





interface Starship{
    name: string;
    enableHyperjump: boolean;
    fuel: number;
}


const updateStarship = (id: number, starship: Partial<Starship>): void => {
    
}


type starshipRecord = Record<string, Starship>;
type starshipPartial = Partial<Starship>;
type starshipPick = Pick<Starship, 'enableHyperjump' | 'fuel'>;
type starshopOmit = Omit<Starship, 'enableHyperjump'>;
type starshopExclude = Exclude<Starship, 'name' | 'enableHyperjump'>;




// Exclude<> and Extract<>
type AvailableDrinks = 'Coffee' | 'Tea' | 'Orange' | 'Lemonade';
type MyDoesntLinkDrinks = 'Orange' | 'Lemonade';
type MyLikeDrinks = 'Coca cola' | 'Tea' | 'Milk' | 'Orange';

type MyLinksDrinks = Exclude<AvailableDrinks, MyDoesntLinkDrinks>;
type MyAvailableDrinks = Extract<AvailableDrinks, MyLikeDrinks>;





// NonNullable<> and ReturnType<>
interface StarshipProperties{
    color?: 'blue' | 'red' | 'green'
}

function paintStarship(id: number, color: NonNullable<StarshipProperties['color']>){
    return {
        id,
        color
    }
}


// paintStarship(5, undefined);
paintStarship(6, 'blue');


type PaintStarshipReturn = ReturnType<typeof paintStarship>;



// InstanceType<typeof something>

type Constructable<ClassInstance> = new (...args:any[]) => ClassInstance;

function Deleteable<BaseClass extends Constructable<{}>>(Base : BaseClass) {
    return class extends Base{
        deleted: boolean;
        delete(){
    
        }
    }
}


class Car{
    constructor (public name: string){

    }
}


class User{
    constructor(public name: string){

    }
}


const DeleteableCar = Deleteable(Car);
const DeleteableUser = Deleteable(User);

type DeleteableCarInstance = InstanceType<typeof DeleteableCar>;
type DeleteableUserInstance = InstanceType<typeof DeleteableUser>;


class Profile{
    user: DeleteableUserInstance;
    car: DeleteableCarInstance;
}


const profile = new Profile();
profile.user = new DeleteableUser("John");
profile.car = new DeleteableCar("Toyota");

profile.car.delete();




// ThisType<>

interface MyObject{
    sayHello():string;
}

interface MyObjectThis{
    helloWorld():string;
}

let myObject: MyObject & ThisType<MyObjectThis> = {
    sayHello(){
        return this.helloWorld();
    }
};

myObject.sayHello = myObject.sayHello.bind({
    helloWorld(){
        return "Hello World";
    }
});


console.log(myObject.sayHello());