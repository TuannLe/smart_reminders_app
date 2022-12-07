import AXIOS from './index'
import { ICreateNote, IUpdateNote } from '../redux/note/interfaces'

const subdirectory = '/notes'

export const create = async (data: ICreateNote) => {
    try {
        const res = await AXIOS.post(`${subdirectory}/add`, {
            "idCategory": data.idCategory,
            "note": data.note,
            "necessity": data.necessity,
            "date": new Date(data.date),
            "status": data.status
        }, {
            headers: {
                Authorization: `Bearer ${data.token}`,
            },
        });
        return res
    } catch (error) {
        return error;
    }
};

export const getAll = async (token: string) => {
    console.log('token', token)
    try {
        return await AXIOS.get(`${subdirectory}/list-all`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error;
    }
};

export const getById = async (data: any) => {
    try {
        return await AXIOS.get(`${subdirectory}/list/${data.id}`, {
            headers: {
                Authorization: `Bearer ${data.token}`,
            },
        });
    } catch (error) {
        return error;
    }
};


export const update = async (data: any) => {
    try {
        const res = await AXIOS.post(`${subdirectory}/update`, data, {
            headers: {
                Authorization: `Bearer ${data.token}`,
            },
        });
        return res
    } catch (error) {
        return error;
    }
};

export const updateNecessity = async (data: any) => {
    try {
        const res = await AXIOS.post(`${subdirectory}/update-necessity`, data, {
            headers: {
                Authorization: `Bearer ${data.token}`,
            },
        });
        return res
    } catch (error) {
        return error;
    }
};

export const remove = async ({ id, token }: { id: string; token: string }) => {
    try {
        return await AXIOS.delete(`${subdirectory}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error;
    }
};

export const createQuickNote = async (data: ICreateNote) => {
    try {
        const res = await AXIOS.post(`${subdirectory}/quick/add`, {
            "idCategory": data.idCategory,
            "note": data.note,
            "necessity": data.necessity,
            "date": new Date(data.date),
            "status": data.status
        }, {
            headers: {
                Authorization: `Bearer ${data.token}`,
            },
        });
        return res
    } catch (error) {
        return error;
    }
};

export const getAllQuickNote = async (token: string) => {
    try {
        return await AXIOS.get(`${subdirectory}/quick/list`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error;
    }
};

export const updateCategoryNote = async (data: any) => {
    try {
        const res = await AXIOS.post(`${subdirectory}/update-category`, data, {
            headers: {
                Authorization: `Bearer ${data.token}`,
            },
        });
        return res
    } catch (error) {
        return error;
    }
};
