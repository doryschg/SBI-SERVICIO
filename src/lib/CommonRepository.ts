
export default interface CommonRepository<K, M> {
  add(item: M): Promise<M>;
  findById(id: K): Promise<M|null>;
  getAll(): Promise<Array<M>>;
  edit(item: M): Promise<M>;
  delete(item: M): Promise<number>; 
}