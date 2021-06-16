import { ValidationException } from './../../../shared-domain/ValidationException';
import { IdentidadDto } from './IdentidadDto';
import { IdentidadValidator } from './IdentidadValidator';

export class IdentidadFactory {
  //private identidad: IdentidadValidator;
  
  public static create(data: any): IdentidadDto {
    const { idNum,nombres, url } = data;
    const identidadValidator = new IdentidadValidator();
    const identidad = new IdentidadDto(idNum, nombres, url);

    if (!identidadValidator.validate(identidad)) {
      const errors = identidadValidator.getErrors();
      throw new ValidationException(errors);
    }

    return identidad;
  }
}
