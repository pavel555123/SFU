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

    const isMain = location.pathname === '/'
    console.log(isMain)

    return (
        <div className={`${isMain ? cls.SecLayout : cls.MainLayout} ${className}`}>
            {!isMain ? header : null}
            {content}
        </div>
    );
};
