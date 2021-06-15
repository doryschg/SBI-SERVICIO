import { ValidationError } from './../../../shared-domain/ValidationError';
import { DomainModelValidator } from './../../../shared-domain/DomainModelValidator';
import { Identidad } from './identidad.models';

export class IdentidadValidator implements DomainModelValidator<Identidad> {

  private errors: Array<ValidationError> = [];

  // validar
  public validate(identidad: Identidad): boolean {
    if (identidad) {
      this.errors.push({
        field: 'retroId',
        message: 'Unknown identidad'
      });
    }

    return this.errors.length === 0;
  }

  public getErrors(): Array<ValidationError> {
    return this.errors;
  }


}
