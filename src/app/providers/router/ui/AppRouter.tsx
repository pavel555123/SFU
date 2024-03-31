import {Suspense, useCallback} from 'react'
import {routeConfig} from '../config/routeConfig.tsx'
import {Route, Routes} from 'react-router-dom'
import {AppRoutesProps} from "@/shared/types/router.ts"
import {RequireAuth} from "@/app/providers/router/ui/RequireAuth.tsx"
import {PageLoader} from "@/widgets/PageLoader"

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader/>}>
                {route.element}
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        )
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}
