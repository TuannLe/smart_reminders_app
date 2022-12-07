export interface ICategory {
    name: string;
    theme: string;
}

export interface IResCategory extends ICategory {
    _id: string;
    email: string;
    idCategory: string;
}
export interface ICreateCategory extends ICategory {
    token: string
}

export interface IUpdateCategory extends ICategory {
    idCategory: string;
    token: string;
}

export interface IDeleteCategory {
    idCategory: string;
    token: string;
}