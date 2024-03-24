import {memo} from "react";
import cls from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    classname?: string
}

export const LangSwitcher = memo(({classname}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()

    const toggleEng = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'en')
    }

    const toggleRu = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'ru')
    }

    return (
        <div className={`${cls.langSwitcher} ${classname}`}>
            <p onClick={toggleEng}>{t('Англ')}</p>
            <p onClick={toggleRu}>{t('Рус')}</p>
        </div>
    )
})
