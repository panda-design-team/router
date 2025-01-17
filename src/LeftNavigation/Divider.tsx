import {css, cx} from '@emotion/css';
import {variables} from '../constants/variables';
import {useOptionsContext} from './Context';

const dividerCss = css`
    background-color: ${variables.borderColor};
    height: 1px;
`;

const collapsedCss = css`
    margin: 0 4px;
`;

const expandedCss = css`
    margin: 0 6px;
`;

export const Divider = () => {
    const {collapsed} = useOptionsContext();
    return <div className={cx(dividerCss, collapsed ? collapsedCss : expandedCss)} />;
};
