export interface ICategory {
    name: string;
    theme: string;
}

export interface ICreateCategory extends ICategory {
}

export interface IUpdateCategory extends ICategory {
    idCategory: string;
}

export interface IDeleteCategory extends ICategory {
    idCategory: string;
}