import cls from './MainLayout.module.scss'
import {LoginForm} from "@/features/authByUsername";
import {LangSwitcher} from "@/features/langSwither";
import {Logo} from "@/shared/ui/Logo";
export const MainLayout = () => {
    return (
        <div className={cls.MainLayout}>
            <LangSwitcher classname={cls.langSwitcher}/>
            <Logo classname={cls.logo}/>
            <h1 className={cls.logoText}>HardSmode</h1>
            <LoginForm/>
        </div>
    );
};
