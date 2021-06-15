export default interface CommonRepository<E, T> {
  add(item: T): Promise<T>;
  findById(id: E): Promise<T>;
  getAll(): Promise<Array<T>>;
  edit(item: T): Promise<T>;
  delete(id: E): Promise<Boolean>; 
}