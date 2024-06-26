import {
  getRouteAbout,
  getRouteMain,
  getRouteMaterials,
} from "@/shared/const/router";
import { NavbarItemType } from "../types/navbar.ts";

export const useNavbarItems = () => {
  // const userData = useSelector(getUserAuthData)

  const navbarItemsList: NavbarItemType[] = [
    {
      path: getRouteMaterials(),
      text: "Моделирование",
    },
    {
      path: getRouteAbout(),
      text: "Рендеры",
    },
    {
      path: getRouteMain(),
      text: "Модели",
    },
  ];
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
  return navbarItemsList;
};
