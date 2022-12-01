import AXIOS from './index'
import { ICreateCategory, IUpdateCategory } from '../redux/category/interfaces'

const subdirectory = '/category'

export const create = async ({
    data,
    token,
}: {
    data: ICreateCategory;
    token: string;
}) => {
    try {
        const res = await AXIOS.post(`${subdirectory}/add`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
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

export const update = async ({
    data,
    token,
}: {
    data: IUpdateCategory;
    token: string;
}) => {
    try {
        const res = await AXIOS.post(`${subdirectory}/update`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
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