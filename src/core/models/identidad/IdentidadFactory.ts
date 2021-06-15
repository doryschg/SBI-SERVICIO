import { ValidationException } from './../../../shared-domain/ValidationException';
import { Identidad } from './identidad.models';
import { IdentidadValidator } from './IdentidadValidator';

export class IdentidadFactory {
  //private identidad: IdentidadValidator;
  
  public static create(data: any): Identidad {
    const { idNum,nombres} = data;
    const identidadValidator = new IdentidadValidator();
    const identidad = new Identidad(idNum, nombres);

    if (!identidadValidator.validate(identidad)) {
      const errors = identidadValidator.getErrors();
      throw new ValidationException(errors);
    }

    return identidad;
  }
}
