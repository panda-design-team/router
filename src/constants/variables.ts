const colors = {
    border: '#e8e8e8',
    text: '#181818',
    primary: '#0080ff',
    activeBg: '#e5f2ff80',
    hoverBg: '#f2f2f2',
    level2BgCollapsed: '#fafafa',
};

export const variables = {
    top: 'var(--panda-left-navigation-top, 48px)',
    bg: 'var(--panda-left-navigation-bg, transparent)',
    borderColor: `var(--panda-left-navigation-border-color, ${colors.border})`,
    widthCollapsed: 'var(--panda-left-navigation-width-collapsed, 57px)',
    paddingCollapsed: 'var(--panda-left-navigation-padding-collapsed, 2px)',
    widthExpanded: 'var(--panda-left-navigation-width-expanded, 170px)',
    paddingExpanded: 'var(--panda-left-navigation-padding-expanded, 4px)',
    color: `var(--panda-left-navigation-color, ${colors.text})`,
    activeColor: `var(--panda-left-navigation-active-color, ${colors.primary})`,
    activeBg: `var(--panda-left-navigation-active-bg, ${colors.activeBg})`,
    hoverBg: `var(--panda-left-navigation-hover-bg, ${colors.hoverBg})`,
    level1BgCollapsed: 'var(--panda-left-navigation-level-1-bg-collapsed, transparent)',
    level1BgExpanded: 'var(--panda-left-navigation-level-1-bg-expanded, transparent)',
    level2BgCollapsed: `var(--panda-left-navigation-level-2-bg-collapsed, ${colors.level2BgCollapsed})`,
    level2BgExpanded: 'var(--panda-left-navigation-level-2-bg-expanded, transparent)',
    iconSize: 'var(--panda-left-navigation-icon-size, 16px)',
    logoIconSize: 'var(--panda-left-navigation-icon-size, 20px)',
    iconTop: 'var(--panda-left-navigation-icon-top, 7px)',
    gapVerticalCollapsed: 'var(--panda-left-navigation-gap-vertical-collapsed, 4px)',
    gapVerticalExpanded: 'var(--panda-left-navigation-gap-vertical-expanded, 4px)',
};

export const calculated = {
    innerWidthCollapsed: `calc(${variables.widthCollapsed} - 5px)`,
    innerWidthExpanded: `calc(${variables.widthExpanded} - 9px)`,
};
