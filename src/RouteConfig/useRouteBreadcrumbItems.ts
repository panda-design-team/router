import {matchRoutes, useLocation} from 'react-router-dom';
import {BreadcrumbItemType} from 'antd/es/breadcrumb/Breadcrumb';
import {useMemo} from 'react';
import {RouteObject, PartialRouteMatch} from './interface';

// eslint-disable-next-line max-len
const getBreadcrumbItemsFromRoute = (routeMatches: PartialRouteMatch[] | null): BreadcrumbItemType[] => {
    if (!routeMatches) {
        return [];
    }
    const items: BreadcrumbItemType[] = [];

    for (const match of routeMatches) {
        const route = match.route as RouteObject;

        if (route.breadcrumbProps) {
            items.push(route.breadcrumbProps);
        }
        else if (route.breadcrumb) {
            items.push({title: route.breadcrumb});
        }
    }
    return items;
};

export const useRouteBreadcrumbItems = (routes: RouteObject[]) => {
    const location = useLocation();
    return useMemo(
        () => {
            const routeMatches = matchRoutes(routes, location);
            return getBreadcrumbItemsFromRoute(routeMatches);
        },
        [location, routes],
    );
};
