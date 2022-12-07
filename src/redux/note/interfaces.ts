
export interface INote {
    note: string;
    date: Date;
    necessity: number;
    status: number;
}

export interface IQuickNote extends INote { }

export interface ICreateNote extends INote {
    idCategory: string;
    token: string;
}

export interface IUpdateNote extends INote {
    idNote: string;
}

export interface IUpdateCategoryNote {
    idNote: string;
    idCategory: string;
}

export interface IUpdateNecessityNote {
    idNote: string;
    necessity: number;
}

export interface IDeleteNote {
    idNode: string;
}