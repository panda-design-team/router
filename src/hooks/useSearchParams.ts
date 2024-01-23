import {useCallback} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import queryString from 'query-string';

export {queryString};

const queryParse = queryString.parse;
const queryStringify = queryString.stringify;

export const useSearchParams = () => {
    const location = useLocation();
    return queryParse(location.search) as Record<string, string>;
};

const omitByUndefined = (object: Record<string, unknown>) => {
    // 总是返回新对象
    const result: Record<string, unknown> = {...object};
    Object.keys(result).forEach(key => {
        if (result[key] === undefined) {
            delete result[key];
        }
    });
    return result;
};

export const useSearchReplace = (strategy: 'merge' | 'reset' = 'merge') => {
    const navigate = useNavigate();

    const handleSearchReplace = useCallback(
        (params: Record<string, unknown>) => {
            const prevParams = queryParse(window.location.search);
            const nextParams = strategy === 'reset'
                ? omitByUndefined(params)
                : omitByUndefined({...prevParams, ...params});
            navigate({search: queryStringify(nextParams)}, {replace: true});
        },
        [navigate, strategy]
    );

    return handleSearchReplace;
};
