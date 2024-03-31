import {MainPage} from "@/pages/MainPage"
import {AuthPage} from '@/pages/AuthPage'
import {AboutPage} from '@/pages/AboutPage'
import {NotFoundPage} from '@/pages/NotFoundPage'
import {AppRoutes, getRouteAbout, getRouteAuth, getRouteMain,} from '@/shared/const/router'
import {AppRoutesProps} from "@/shared/types/router.ts"

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>
    },
    [AppRoutes.AUTH]: {
        path: getRouteAuth(),
        element: <AuthPage/>
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
