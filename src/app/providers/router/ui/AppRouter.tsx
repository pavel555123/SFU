import { useCallback } from 'react'
import { routeConfig } from '../config/routeConfig.tsx'
import { RouteProps } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.element}
            />
        )
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}
