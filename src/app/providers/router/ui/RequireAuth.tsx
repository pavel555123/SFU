import {Navigate, useLocation} from 'react-router-dom'
import {getUserAuthData} from '@/entities/User'
import {getRouteMain} from '@/shared/const/router'
import {useAppSelector} from "@/shared/hooks/useAppSelector/useAppSelector.ts";

interface RequireAuthProps {
    children: JSX.Element
}

export function RequireAuth ({ children }: RequireAuthProps) {
    const auth = useAppSelector(getUserAuthData)
    const location = useLocation()
    console.log(auth, 'auth')

    if (!auth) {
        return <Navigate to={getRouteMain()} state={{ from: location }} replace/>
    }

    // if (!hasRequiredRoles) {
    //     return <Navigate to={getRouteForbidden()} state={{ from: location }} replace/>
    // }

    return children
}
