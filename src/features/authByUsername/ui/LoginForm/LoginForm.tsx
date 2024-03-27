import {useTranslation} from "react-i18next";
import cls from './LoginForm.module.scss'
import {useAppDispatch} from "@/shared/hooks/useAppDispatch/useAppDispatch.ts";
import {memo, useCallback} from "react";
import {loginActions} from "@/features/authByUsername/model/slice/loginSlice.ts";
import {getLoginState} from "@/features/authByUsername";
import {useAppSelector} from "@/shared/hooks/useAppSelector/useAppSelector.ts";
import {loginByUsername} from "@/features/authByUsername/model/services/loginByUsername/loginByUsername.ts";
import {registerUser} from "@/features/authByUsername/model/services/registerUser/registerUser.ts";
import {registerActions} from "@/features/authByUsername/model/slice/registerSlice.ts";
import {getRegState} from "@/features/authByUsername/model/selectors/getRegState/getRegState.ts";

export const LoginForm = memo(() => {
    const {t} = useTranslation()

    const dispatch = useAppDispatch()
    const {username, password, error: logError, isLoading: logLoading} = useAppSelector(getLoginState)
    const {error: regError, isLoading: regLoading} = useAppSelector(getRegState)
    //error, isLoading

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
        dispatch(registerActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
        dispatch(registerActions.setPassword(value))
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

    const onRegClick = useCallback(() => {
        dispatch(registerUser({username, password}))
        console.log(regError?.message)
        if(regError === undefined) {
            dispatch(loginByUsername({username, password}))
        } else {
            console.log('error')
        }
    }, [dispatch, password, username, regError])

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
            {regLoading && <span className={cls.loader}></span>}
            {logLoading && <span className={cls.loader}></span>}
            {regError && <p className={cls.error}>{t('Ошибка регистрации')}</p>}
            {logError && <p className={cls.error}>{t('Ошибка входа')}</p>}
            <div className={cls.btnGroup}>
                <button
                    className={cls.btn}
                    onClick={onRegClick}
                >
                    {t('Регистрация')}
                </button>
                <button
                    className={cls.btn}
                    onClick={onLoginClick}
                >
                    {t('Войти')}
                </button>
            </div>
        </div>
    )
})
