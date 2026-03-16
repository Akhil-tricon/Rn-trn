type Product = {
  name: string;
  price: number;
  stock: number;
};

export  const products: Record<string, Product> = {
  "8901234567890": {
    name: "Colgate Toothpaste",
    price: 120,
    stock: 30
  },
  "8909876543210": {
    name: "Dove Shampoo",
    price: 320,
    stock: 15
  }
};