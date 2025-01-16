import {css, cx} from '@emotion/css';
import {variables} from '../constants/variables';

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

interface Props {
    collapsed?: boolean;
}

export const Divider = ({collapsed}: Props) => {
    return <div className={cx(dividerCss, collapsed ? collapsedCss : expandedCss)} />;
};
