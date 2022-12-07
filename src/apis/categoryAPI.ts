import AXIOS from './index'
import { ICreateCategory, IUpdateCategory } from '../redux/category/interfaces'

const subdirectory = '/category'

export const create = async (data: ICreateCategory) => {
    try {
        const res = await AXIOS.post(`${subdirectory}/add`, {
            "name": data.name,
            "theme": data.theme
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

export const get = async (token: string) => {
    try {
        return await AXIOS.get(`${subdirectory}/list`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error;
    }
};

export const update = async (data: IUpdateCategory) => {
    try {
        const res = await AXIOS.post(`${subdirectory}/update`, {
            "idCategory": data.idCategory,
            "name": data.name,
            "theme": data.theme
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

export const remove = async ({ idCategory, token }: { idCategory: string; token: string }) => {
    try {
        return await AXIOS.delete(`${subdirectory}/${idCategory}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error;
    }
};