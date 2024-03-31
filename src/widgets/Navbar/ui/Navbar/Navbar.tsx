import cls from './Navbar.module.scss'
import {Logo} from "@/shared/ui/Logo"
import {useNavbarItems} from "@/widgets/Navbar/model/selectors/getNavbarItems.ts"
import {useCallback, useMemo, useState} from "react"
import {NavbarItemType} from "@/widgets/Navbar/model/types/navbar.ts"
import {NavbarItem} from "@/widgets/Navbar/ui/NavbarItem/NavbarItem.tsx"
import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"
import {useAppSelector} from "@/shared/hooks/useAppSelector/useAppSelector.ts"
import {getUserAuthData, userActions} from "@/entities/User"
import {useAppDispatch} from "@/shared/hooks/useAppDispatch/useAppDispatch.ts"

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()
    const navbarItemsList = useNavbarItems()
    const auth = useAppSelector(getUserAuthData)
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('');

    const itemsList = useMemo(
        () =>
            navbarItemsList.map((item: NavbarItemType) => (
                <NavbarItem
                    key={item.path}
                    item={item}
                    activeClassname={cls.active}
                />
            )),
        [navbarItemsList]
    )

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    return (
        <header className={`${cls.Navbar} ${className}`}>
            <Logo classname={cls.logo}/>
            <div className={cls.centralContainer}>
                <div className={cls.items}>{itemsList}</div>
                <input
                    className={cls.input}
                    type='search'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            {auth ?
                <button className={cls.exitBtn} onClick={onLogout}>{t('Выход')}</button>
                :
                <Link to='/auth'>
                    <button className={cls.loginBtn}>{t('Авторизация')}</button>
                </Link>
            }
        </header>
    )
}
