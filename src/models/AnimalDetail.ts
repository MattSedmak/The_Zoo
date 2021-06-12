import { IAnimal } from './Animal';

export interface IAnimalDetail extends IAnimal {
  latinName: string;
  longDescription: string;
  imageUrl: string;
  medicine: string;
  isFed: boolean;
  lastFed: Date;
}
