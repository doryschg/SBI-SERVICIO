import { ValidationError } from './../../../shared-domain/ValidationError';
import { DomainModelValidator } from './../../../shared-domain/DomainModelValidator';
import { Identidad } from './identidad.models';
import { IdentidadDto } from './IdentidadDto';

export class IdentidadValidator implements DomainModelValidator<Identidad> {

  private errors: Array<ValidationError> = [];

  // validar
  public validate(identidad: IdentidadDto): boolean {
    if (!identidad) {
      this.errors.push({
        field: 'nombres',
        message: 'Unknown identidad'
      });
    }

    return this.errors.length === 0;
  }

  public getErrors(): Array<ValidationError> {
    return this.errors;
  }


}
