type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color: string;
};

type pickType = Pick<Product, "id" | "name">;

type OmitType = Omit<Product, "stock" | "color">;

type requer = Required<Product>;
  
type parshil = Partial<Product>; 

type readonlyType = Readonly<Product>;

const user1: pickType = {
    id: 11,
    name: "Nahid"
};