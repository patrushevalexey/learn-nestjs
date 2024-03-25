export class CarsCreateDto implements Omit<CarsCreateDto, 'id'> {
  brand: string;
  model: string;
  price: number;
  maxSpeed: number;
  color: string;
  year: number;
}
