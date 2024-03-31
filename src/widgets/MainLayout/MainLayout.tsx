import cls from './MainLayout.module.scss'
import {ReactElement} from "react"
import { useLocation } from 'react-router-dom'

interface MainLayoutProps {
    className?: string
    header: ReactElement
    content: ReactElement
}
export const MainLayout = (props: MainLayoutProps) => {
    const {
        className,
        header,
        content,
    } = props

    const location = useLocation()

    const isAuthPage = location.pathname === '/auth'

    return (
        <div className={`${isAuthPage ? cls.SecLayout : cls.MainLayout} ${className}`}>
            {!isAuthPage ? header : null}
            {content}
        </div>
    );
};
