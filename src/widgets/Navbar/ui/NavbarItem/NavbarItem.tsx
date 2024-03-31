import {useTranslation} from 'react-i18next'
import {memo} from 'react'
import {useSelector} from 'react-redux'
import {getUserAuthData} from '@/entities/User'
import cls from './NavbarItem.module.scss'
import {NavbarItemType} from "@/widgets/Navbar/model/types/navbar.ts"
import {NavLink} from "react-router-dom"

interface NavbarItemProps {
    item: NavbarItemType
    activeClassname?: string
}

export const NavbarItem = memo(({item, activeClassname = ''}: NavbarItemProps) => {
    const {t} = useTranslation()
    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth) {
        return null
    }

    return (
        <NavLink className={({ isActive }) => isActive ? `${cls.NavbarItem} ${activeClassname}` : cls.NavbarItem } to={item.path}>
            <span className={cls.link}>{t(item.text)}</span>
        </NavLink>
    )
})
