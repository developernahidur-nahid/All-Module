interface User<T, N = null> {
  org: "Web Deploper";
  name: {
    firstname: string;
    midname: string;
    lastname: string;
  };
  age: number;
  cetaguri: T;
  bick: N ;
}

type poor = {
  cata: string;
  quantity: number;
};

type houda = {
    brand: string;
    cc: number;
}

const user1: User<poor, houda> = {
  org: "Web Deploper",
  name: {
    firstname: "Nahidur",
    midname: "Rohman",
    lastname: "Nahid",
  },
  age: 17,

  bick:{
    brand: "Suzuki",
    cc: 350
  },

  cetaguri: {
    cata: "Good",
    quantity: 3,
  },
};

const user2: User<{
  cata: string;
  quantity: number;
  isGood: boolean;
}, null> = {
    org: "Web Deploper",
    name: {
        firstname: "Nahidur",
        midname: "Rohman",
        lastname: "Nahid",
    },
    age: 17,

    cetaguri: {
        cata: "Good",
        quantity: 3,
        isGood: true,
    },
    bick: null
};
