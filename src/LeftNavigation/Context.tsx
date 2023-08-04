import {createContext, useContext} from 'react';

interface Context {
    // 开启后，二级菜单会有缩进，缩进的大小油 number 指定
    enableSecondaryMenuIndent?: number;
    // 开启后，菜单左侧会有一个表示 active 的小条
    enableMenuActiveLeftBar?: boolean;
}

const OptionsContext = createContext<Context>({});

export const OptionsContextProvider = OptionsContext.Provider;

export const useOptionsContext = () => useContext(OptionsContext);
