import cls from './MainPage.module.scss'
import {SecondLayout} from "@/widgets/SecondLayout/SecondLayout.tsx"
import {LangSwitcher} from "@/features/langSwither"
import {Logo} from "@/shared/ui/Logo"
import {LoginForm} from "@/features/authByUsername"
import {Page} from "@/widgets/Page"

export const MainPage = () => {

    return (
        <Page className={cls.MainPage}>
            <div className={cls.MainHalf}>
                <LangSwitcher classname={cls.langSwitcher}/>
                <Logo classname={cls.logo}/>
                <LoginForm/>
            </div>
            <SecondLayout/>
        </Page>
    );
};
