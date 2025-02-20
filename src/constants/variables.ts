const colors = {
    borderColor: '#e8e8e8', // token.colorBorder
    color: '#181818', // token.colorText
    activeColor: '#0080ff', // token.colorPrimary
    listBg: 'transparent', // token.colorBgLayout
    listBgDeep: '#f5f5f5', // token.colorBgLayout
    itemBgActive: '#e5f2ff80', // token.colorInfoBgHover
    itemBgActiveDeep: '#e5f2ffb2', // token.colorInfoBgHover
    itemBgHover: '#f7f7f7',
    itemBgHoverDeep: '#e8e8e8',
};

export const variables = {
    top: 'var(--panda-left-navigation-top, 48px)',
    bg: 'var(--panda-left-navigation-bg, transparent)',
    borderColor: `var(--panda-left-navigation-border-color, ${colors.borderColor})`,
    widthCollapsed: 'var(--panda-left-navigation-width-collapsed, 57px)',
    paddingCollapsed: 'var(--panda-left-navigation-padding-collapsed, 2px)',
    widthExpanded: 'var(--panda-left-navigation-width-expanded, 170px)',
    paddingExpanded: 'var(--panda-left-navigation-padding-expanded, 4px)',
    color: `var(--panda-left-navigation-color, ${colors.color})`,
    activeColor: `var(--panda-left-navigation-active-color, ${colors.activeColor})`,
    listBg: `var(--panda-left-navigation-list-bg, ${colors.listBg})`,
    listBgDeep: `var(--panda-left-navigation-list-bg-deep, ${colors.listBgDeep})`,
    itemBgActive: `var(--panda-left-navigation-item-bg-active, ${colors.itemBgActive})`,
    itemBgActiveDeep: `var(--panda-left-navigation-item-bg-active-deep, ${colors.itemBgActiveDeep})`,
    itemBgHover: `var(--panda-left-navigation-item-bg-hover, ${colors.itemBgHover})`,
    itemBgHoverDeep: `var(--panda-left-navigation-item-bg-hover-deep, ${colors.itemBgHoverDeep})`,
    iconSize: 'var(--panda-left-navigation-icon-size, 16px)',
    logoIconSize: 'var(--panda-left-navigation-logo-icon-size, 20px)',
    iconTop: 'var(--panda-left-navigation-icon-top, 7px)',
    gapVerticalCollapsed: 'var(--panda-left-navigation-gap-vertical-collapsed, 4px)',
    gapVerticalExpanded: 'var(--panda-left-navigation-gap-vertical-expanded, 4px)',
};

export const calculated = {
    innerWidthCollapsed: `calc(${variables.widthCollapsed} - 5px)`,
    innerWidthExpanded: `calc(${variables.widthExpanded} - 9px)`,
};
