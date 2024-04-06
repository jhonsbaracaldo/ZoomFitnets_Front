

export interface Register {
    id: number;
    name: string;
    lastname:string;
    email: string;
   blood_type:string;
   date_initial:Date;
   date_end:Date;
   number:BigInteger;
    status: 'ACTIVO' | 'INACTIVO'|'CONGELADO'; 
 }
 