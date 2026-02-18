export interface Course {
    id:number;
    title:string;
    instructor: string;
    description: string;
    level: year;
    credits:number;
}

type year = 100 | 200 | 300 | 400;
