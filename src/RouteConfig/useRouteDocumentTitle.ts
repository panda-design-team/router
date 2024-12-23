import {matchRoutes, useLocation} from 'react-router-dom';
import {useMemo} from 'react';
import {DocumentTitleContext, RouteObject, PartialRouteMatch} from './interface';

// eslint-disable-next-line max-len
const getDocumentTitleFromRoute = (routeMatches: PartialRouteMatch[] | null, context?: DocumentTitleContext): string[] => {
    if (!routeMatches) {
        return [];
    }

    const items: string[] = [];

    for (const match of routeMatches) {
        const route = match.route as RouteObject;
        let documentTitle = route.documentTitle;

        if (route.documentTitleKey) {
            const nextDocumentTitle = context?.[route.documentTitleKey];
            if (nextDocumentTitle) {
                documentTitle = nextDocumentTitle;
            }
        }
        if (documentTitle) {
            items.push(documentTitle);
        }
    }
    return items;
};

export const useRouteDocumentTitle = (routes: RouteObject[], context?: DocumentTitleContext) => {
    const location = useLocation();
    return useMemo(
        () => {
            const routeMatches = matchRoutes(routes, location);
            const items = getDocumentTitleFromRoute(routeMatches, context);
            return items.join('-');
        },
        [context, location, routes]
    );
};
