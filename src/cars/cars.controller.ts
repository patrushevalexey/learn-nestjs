import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsInterface } from '../interfaces/cars-interface';
import { CarsCreateDto } from '../dto/cars-create-dto';

@Controller()
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post('api/v1/cars/create')
  createCar(@Body() dto: CarsInterface): CarsInterface {
    return this.carsService.createCar(dto);
  }

  @Get('api/v1/cars/getAll')
  getAllCars(): CarsInterface[] {
    return this.carsService.getAllCars();
  }

  @Get('api/v1/cars/getByParams')
  getCarByParams(@Body() params: Partial<CarsCreateDto>): CarsInterface {
    return this.carsService.getCarByParams(params);
  }

  @Get('api/v1/cars/getById/:id')
  getCarById(@Param('id') id: string): CarsInterface {
    return this.carsService.getCarById(id);
  }

  @Put('api/v1/cars/update/:id')
  updateCarById(
    @Param('id') id: string,
    @Body() dto: Partial<CarsCreateDto>,
  ): CarsInterface {
    return this.carsService.updateCarById(id, dto);
  }

  @Delete('api/v1/cars/delete/:id')
  deleteCarById(@Param('id') id: string): void {
    return this.carsService.deleteCarById(id);
  }
}
