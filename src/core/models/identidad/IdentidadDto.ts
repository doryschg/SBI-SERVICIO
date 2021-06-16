

export class IdentidadDto {
	idNum: number;
	nombres: string;
	url:string|null;

	constructor(idNum:number, nombres:string, url:string){
		this.nombres=nombres;
		this.idNum=idNum;
		this.url=url;

	}
}


