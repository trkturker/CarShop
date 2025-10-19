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
    image: 'https://www.pngplay.com/wp-content/uploads/13/BMW-X4-Transparent-PNG.png',
    name: 'BMW',
    model: 'X4',
    price: "45.590",
    rating: "4.8",
  },
  {
    id: '2',
    logo: '../assets/fiat-logo.png',
    image: 'https://www.pngplay.com/wp-content/uploads/6/Fiat-Background-PNG-Image.png',
    name: 'FIAT',
    model: 'Viaggio',
    price: "20.590",
    rating: "4.1",
  },
  {
    id: '3',
    logo: '../assets/tesla-logo.png',
    image: 'https://www.pngplay.com/wp-content/uploads/13/Cadillac-Automobile-Background-PNG-Image.png',
    name: 'Cadillac',
    model: 'Escalade',
    price: "65.590",
    rating: "4.9",
  },
  {
    id: '4',
    logo: '../assets/volkswagen-logo.pn',
    image: 'https://www.pngplay.com/wp-content/uploads/15/Beetle-Volkswagen-Vw-No-Background.png',
    name: 'Volkswagen',
    model: 'Beetle',
    price: "35.590",
    rating: "4.8",
  },
  {
    id: '5',
    logo: '../assets/tesla-logo.png',
    image: 'https://www.pngplay.com/wp-content/uploads/13/Cadillac-Transparent-File.png',
    name: 'Cadillac',
    model: 'Eldorado',
    price: "59.999",
    rating: "4.7",
  },
];

export const useCars = () => {

  return useQuery<Car[]>({
    queryKey: ['cars'],
    queryFn: () => Promise.resolve(cars),
    staleTime: 1000 * 60, // 1 dk
  });
};
