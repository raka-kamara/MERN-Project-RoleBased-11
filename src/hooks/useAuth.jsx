import { useContext } from 'react';
import { AuthContext } from '../Providres/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default useAuth;