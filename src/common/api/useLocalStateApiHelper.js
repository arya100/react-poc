import { useEffect, useReducer } from 'react';
import axios from 'axios';

const useLocalStateApiHelper = (url, reducer) => {
    const [state, dispatch] = useReducer(reducer, {});
    useEffect(() => {
        axios.get(url)
            .then(data => dispatch({ type: 'success', url, data }))
            .catch(err => dispatch({ type: 'fail', url, err }));
    }, [url]);

    return state;
};

export default useLocalStateApiHelper;
