import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://chef-s-place-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;