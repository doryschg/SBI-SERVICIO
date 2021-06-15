import CommonRepository from "./CommonRepository";


export class PsqlRepository<T> implements CommonRepository<number, T>{
    add(item: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<T> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    edit(item: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
}