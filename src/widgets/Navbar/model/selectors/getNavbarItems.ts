import {getRouteAbout, getRouteGeneral} from '@/shared/const/router'
import {NavbarItemType} from '../types/navbar.ts'

export const useNavbarItems = () => {
    // const userData = useSelector(getUserAuthData)

    const navbarItemsList: NavbarItemType[] = [
        {
            path: getRouteAbout(),
            text: 'О нас'
        },
        {
            path: getRouteGeneral(),
            text: 'Моделирование'
        },
        {
            path: getRouteAbout(),
            text: 'Материалы'
        },
        {
            path: getRouteAbout(),
            text: 'Рендеры'
        },
        {
            path: getRouteGeneral(),
            text: 'Модели'
        }
    ]
    // if (userData) {
    //     navbarItemsList.push(
    //         {
    //             path: getRouteProfile(userData.id),
    //             text: 'Профиль',
    //             authOnly: true
    //         },
    //         {
    //             path: getRouteArticles(),
    //             text: 'Статьи',
    //             authOnly: true
    //         }
    //     )
    // }
    return navbarItemsList
}
