import { useQuery } from '@tanstack/react-query';

export type Car = {
  id: string;
  logo: string;
  image: string;
  name: string;
  model: string;
  price: string;
  rating: string;
};

const cars: Car[] = [
  {
    id: '1',
    logo: '../assets/bmw-logo.png',
    image: '../assets/bmw-logo.png',
    name: 'BMW',
    model: 'M3',
    price: "45.590",
    rating: "4.5",
  },
  {
    id: '2',
    logo: '../assets/cadillac-logo.png',
    image: '../assets/cadillac-logo.png',
    name: 'Cadillac',
    model: 'M3',
    price: "55.590",
    rating: "4.5",
  },
  {
    id: '3',
    logo: '../assets/tesla-logo.png',
    image: '../assets/tesla-logo.png',
    name: 'Tesla',
    model: 'Model 3',
    price: "65.590",
    rating: "4.5",
  },
  {
    id: '4',
    logo: '../assets/volkswagen-logo.pn',
    image: '../assets/volkswagen-logo.pn',
    name: 'Volkswagen',
    model: 'Golf',
    price: "45.590",
    rating: "4.5",
  },

];

export const useCars = () => {
  // 0. useQuery<Student[]>({}) olarak yaz
  // 1. queryKey: Cache olarak tutacağı key
  // 2. queryFn: Datayı çekeceği fonksiyon
  // 3. staleTime: Cache süresini ms cinsinden tutar

  return useQuery<Car[]>({
    queryKey: ['cars'],
    queryFn: () => Promise.resolve(cars),
    staleTime: 1000 * 60, // 1 dk
  });
};
