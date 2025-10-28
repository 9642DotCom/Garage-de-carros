export interface Car {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  category: string;
  image: string;
  mileage: string;
}

export const carsData: Car[] = [
  {
    id: 1,
    name: "BMW X5 M Sport",
    brand: "BMW",
    model: "X5",
    year: 2023,
    price: 485000,
    category: "SUV",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    mileage: "15.000",
  },
  {
    id: 2,
    name: "Mercedes-Benz C300",
    brand: "Mercedes",
    model: "C300",
    year: 2022,
    price: 320000,
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    mileage: "22.000",
  },
  {
    id: 3,
    name: "Audi Q5 Sportback",
    brand: "Audi",
    model: "Q5",
    year: 2023,
    price: 395000,
    category: "SUV",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    mileage: "8.500",
  },
  {
    id: 4,
    name: "Porsche 911 Carrera",
    brand: "Porsche",
    model: "911",
    year: 2022,
    price: 890000,
    category: "Esportivo",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    mileage: "12.000",
  },
  {
    id: 5,
    name: "Volkswagen T-Cross",
    brand: "Volkswagen",
    model: "T-Cross",
    year: 2023,
    price: 135000,
    category: "SUV",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    mileage: "18.000",
  },
  {
    id: 6,
    name: "Chevrolet Onix Plus",
    brand: "Chevrolet",
    model: "Onix",
    year: 2023,
    price: 89000,
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    mileage: "25.000",
  },
  {
    id: 7,
    name: "Fiat Toro Ranch",
    brand: "Fiat",
    model: "Toro",
    year: 2022,
    price: 142000,
    category: "Pickup",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
    mileage: "32.000",
  },
  {
    id: 8,
    name: "BMW 320i M Sport",
    brand: "BMW",
    model: "320i",
    year: 2023,
    price: 295000,
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80",
    mileage: "9.000",
  },
];
