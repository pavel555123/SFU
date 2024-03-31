import cls from './SecondLayout.module.scss'
import {Logo} from "@/shared/ui/Logo";
import {useTranslation} from "react-i18next";

export const SecondLayout = () => {
    const {t} = useTranslation()

    return (
        <div className={cls.SecondLayout}>
            <Logo classname={cls.logo}/>
            <p className={cls.text}>{t('Лучший сервис о 3D разработке.')}<br/>{t('Освайвайте новое прямо сейчас.')}</p>
        </div>
    );
};