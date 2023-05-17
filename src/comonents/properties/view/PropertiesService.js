import { get } from '../../../services/httpService';

const getProperties = async () => get('/properties');

export {
    getProperties
}