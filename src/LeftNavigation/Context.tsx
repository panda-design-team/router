import {createContext, useContext} from 'react';

interface Context {
    // 开启后，二级菜单会有缩进，缩进的大小油 number 指定
    enableSecondaryMenuIndent?: number;
    collapsed: boolean;
}

const OptionsContext = createContext<Context>({} as Context);

export const OptionsContextProvider = OptionsContext.Provider;

export const useOptionsContext = () => useContext(OptionsContext);
