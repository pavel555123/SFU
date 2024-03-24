import {useTranslation} from "react-i18next";
import cls from './LoginForm.module.scss'
import {useAppDispatch} from "@/shared/hooks/useAppDispatch/useAppDispatch.ts";
import {memo, useCallback} from "react";
import {loginActions} from "@/features/authByUsername/model/slice/loginSlice.ts";
import {getLoginState} from "@/features/authByUsername";
import {useAppSelector} from "@/shared/hooks/useAppSelector/useAppSelector.ts";
import {loginByUsername} from "@/features/authByUsername/model/services/loginByUsername/loginByUsername.ts";

export const LoginForm = memo(() => {
    const {t} = useTranslation()

    const dispatch = useAppDispatch()
    const {username, password} = useAppSelector(getLoginState)
    //error, isLoading

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onChangeHandler1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeUsername?.(e.target.value)
    }

    const onChangeHandler2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangePassword?.(e.target.value)
    }

    const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({username, password}))
    }, [dispatch, password, username])

    return (
        <div className={cls.LoginForm}>
            <input
                className={cls.input}
                type='email'
                placeholder={t('Почта')}
                onChange={onChangeHandler1}
                value={username}
            />
            <input
                className={cls.input}
                type='password'
                placeholder={t('Пароль')}
                onChange={onChangeHandler2}
                value={password}
            />
            <div className={cls.flex}>
                <div className={cls.rememberMe}>
                    <input type="checkbox" id="remember" className={cls.checkbox}/>
                    <label>{t('Запомнить меня')}</label>
                </div>
                <a href="#" className={cls.forgotPassword}>{t('Забыли пароль?')}</a>
            </div>
            <button
                className={cls.loginBtn}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </button>
        </div>
    )
})
