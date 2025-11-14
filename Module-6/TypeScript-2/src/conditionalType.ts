
type createType ={
    name: string;
    id: number;
    age: number
}

type Condishon<T> = T extends keyof createType ? true: false;

type Hero = Condishon<"name">

