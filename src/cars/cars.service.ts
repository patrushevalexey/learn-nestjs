import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CarsInterface } from '../interfaces/cars-interface';
import { CarsCreateDto } from '../dto/cars-create-dto';

@Injectable()
export class CarsService {
  cars: CarsInterface[] = [];

  createCar(dto: CarsCreateDto): CarsInterface {
    const newCar: CarsInterface = {
      id: uuidv4(),
      ...dto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  getAllCars(): CarsInterface[] {
    return this.cars;
  }

  getCarByParams(params: Partial<CarsCreateDto>): CarsInterface {
    return this.cars.find((car: CarsInterface) => {
      return (
        (typeof params.brand == 'string' ? params.brand === car.brand : true) &&
        (typeof params.model == 'string' ? params.model === car.model : true) &&
        (typeof params.price == 'number' ? params.price === car.price : true) &&
        (typeof params.maxSpeed == 'number'
          ? params.maxSpeed === car.maxSpeed
          : true) &&
        (typeof params.color == 'string' ? params.color === car.color : true) &&
        (typeof params.year == 'number' ? params.year === car.year : true)
      );
    });
  }

  getCarById(id: string): CarsInterface {
    return this.cars.find((car: CarsInterface) => {
      return car.id === id;
    });
  }

  updateCarById(id: string, dto: Partial<CarsCreateDto>): CarsInterface {
    const car: CarsInterface = this.getCarById(id);
    const index: number = this.cars.indexOf(car);
    this.cars[index] = {
      ...car,
      ...dto,
    };
    return this.cars[index];
  }

  deleteCarById(id: string): void {
    const car: CarsInterface = this.getCarById(id);
    const index: number = this.cars.indexOf(car);
    this.cars.splice(index, 1);
  }
}
