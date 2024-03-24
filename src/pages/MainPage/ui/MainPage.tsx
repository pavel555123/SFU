import {MainLayout} from "@/widgets/MainLayout/MainLayout.tsx";
import cls from './MainPage.module.scss'
import {SecondLayout} from "@/widgets/SecondLayout/SecondLayout.tsx";

export const MainPage = () => {

    return (
        <div className={cls.MainPage}>
            <MainLayout/>
            <SecondLayout/>
        </div>
    );
};
