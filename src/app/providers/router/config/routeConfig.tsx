import { MainPage } from '@/pages/MainPage'
// import { AboutPage } from '@/pages/AboutPage'
// import { NotFoundPage } from '@/pages/NotFoundPage'
import {
    AppRoutes,
    // getRouteAbout,
    getRouteMain,
} from '@/shared/const/router'
import { RouteProps } from "react-router-dom";

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>
    },
    // [AppRoutes.ABOUT]: {
    //     path: getRouteAbout(),
    //     element: <AboutPage/>
    // },
    // [AppRoutes.NOT_FOUND]: {
    //     path: '*',
    //     element: <NotFoundPage/>
    // }
}
