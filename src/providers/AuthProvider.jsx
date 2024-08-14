import { createContext } from "react";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const allInfos = {}
    return (
        <AuthContext.Provider value={allInfos}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;