
interface RecursoRepository {
  obtenerRecurso(url: string): Promise<string|null>;
}
export default RecursoRepository;
