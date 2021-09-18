import { toast } from 'react-toastify';
import Axios from 'axios';

import logger from './logService';

Axios.interceptors.response.use(null, (error) => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response &&
        error.response.status < 500;

    if (!expectedError) {
        logger.log(error);
        toast.error(error.message);
    }

    return Promise.reject(error);
});

const http = {
    get: Axios.get,
    post: Axios.post,
    patch: Axios.patch,
    delete: Axios.delete,
};

export default http;
