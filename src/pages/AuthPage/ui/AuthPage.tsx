import cls from './AuthPage.module.scss'
import {LangSwitcher} from "@/features/langSwither"
import {Logo} from "@/shared/ui/Logo"
import {LoginForm} from "@/features/authByUsername"
import {Page} from "@/widgets/Page"
import {useTranslation} from "react-i18next";

export const AuthPage = () => {
    const {t} = useTranslation()

    return (
        <Page className={cls.AuthPage}>
            <div className={cls.MainHalf}>
                <LangSwitcher classname={cls.langSwitcher}/>
                <Logo classname={cls.mainLogo}/>
                <LoginForm/>
            </div>
            <div className={cls.SecondHalf}>
                <Logo classname={cls.secLogo}/>
                <p className={cls.text}>{t('Лучший сервис о 3D разработке.')}<br/>{t('Освайвайте новое прямо сейчас.')}
                </p>
            </div>
        </Page>
    );
};
