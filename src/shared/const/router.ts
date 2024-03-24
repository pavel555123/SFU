export enum AppRoutes {
  MAIN = 'main',
  // ABOUT = 'about',
  // NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/'
// export const getRouteAbout = () => '/about'

export const AppRouteByPathPatterns: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  // [getRouteAbout()]: AppRoutes.ABOUT,
}
