import {MainPage} from '@/pages/MainPage'
import {AboutPage} from '@/pages/AboutPage'
import {NotFoundPage} from '@/pages/NotFoundPage'
import {AppRoutes, getRouteAbout, getRouteGeneral, getRouteMain,} from '@/shared/const/router'
import {AppRoutesProps} from "@/shared/types/router.ts";
import {GeneralPage} from "@/pages/GeneralPage";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>
    },
    [AppRoutes.GENERAL]: {
        path: getRouteGeneral(),
        element: <GeneralPage/>
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage/>
    }
}
