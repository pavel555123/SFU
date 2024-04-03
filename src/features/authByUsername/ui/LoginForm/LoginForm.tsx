import {useTranslation} from "react-i18next"
import cls from './LoginForm.module.scss'
import {useAppDispatch} from "@/shared/hooks/useAppDispatch/useAppDispatch.ts"
import {memo, useCallback, useState} from "react"
import {loginActions} from "@/features/authByUsername/model/slice/loginSlice.ts"
import {getLoginState} from "@/features/authByUsername"
import {useAppSelector} from "@/shared/hooks/useAppSelector/useAppSelector.ts"
import {registerActions} from "@/features/authByUsername/model/slice/registerSlice.ts"
import {getRegState} from "@/features/authByUsername/model/selectors/getRegState/getRegState.ts"
import {SubmitHandler, useForm} from "react-hook-form"
import {registerUser} from "@/features/authByUsername/model/services/registerUser/registerUser.ts";
import {loginByUsername} from "@/features/authByUsername/model/services/loginByUsername/loginByUsername.ts";

type IFormInput = {
    email: string
    password: string
}

export const LoginForm = memo(() => {
    const {t} = useTranslation()
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>();

    const dispatch = useAppDispatch()
    const {username, password} = useAppSelector(getLoginState)
    const {error: regError} = useAppSelector(getRegState)

    const [hasAccount, setHasAccount] = useState(false)

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

    const onLoginClick: SubmitHandler<IFormInput> = useCallback(() => {
        console.log('log')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch(loginByUsername({username, password}))

    }, [dispatch, password, username])

    const onRegClick = useCallback(() => {
        console.log('reg')
        dispatch(registerUser({username, password}))
        if (regError === undefined) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            dispatch(loginByUsername({username, password}))
        } else {
            console.log('regError', regError)
        }
    }, [dispatch, password, username, regError])

    const [checked, setChecked] = useState(false)
    const handleChecked = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setChecked(e.target.checked)
    }

    const onChangeForm = useCallback(() => {
        setHasAccount(!hasAccount)
    }, [hasAccount])

    return (
        <form
            className={cls.LoginForm}
            onSubmit={hasAccount ? handleSubmit(onLoginClick) : handleSubmit(onRegClick)}
        >
            <input
                className={cls.input}
                type='email'
                placeholder={t('Почта')}
                {...register("email", {
                    required: 'Email is required'
                })}
                onChange={onChangeHandler1}
                value={username}
            />
            {errors.email?.type === "required" && (
                <div className={cls.error}>You must enter your email</div>
            )}
            <input
                className={cls.input}
                type='password'
                placeholder={t('Пароль')}
                {...register("password", {
                    required: 'Password in required',
                    minLength: 8, maxLength: 12
                })}
                onChange={onChangeHandler2}
                value={password}
            />
            {errors.password?.type === "required" && (
                <div className={cls.error}>You must enter your password</div>
            )}
            {errors.password?.type === "minLength" && (
                <div className={cls.error}>Your name must be at least 8 characters</div>
            )}
            <div className={cls.flex}>
                <div className={cls.rememberMe}>
                    <input
                        id="remember"
                        className={cls.checkbox}
                        type="checkbox"
                        checked={checked}
                        onChange={handleChecked}
                    />
                    <label>{t('Запомнить меня')}</label>
                </div>
                {hasAccount ?
                    <a href="#" className={cls.forgotPassword}>{t('Забыли пароль?')}</a>
                    :
                    <a href="#" className={cls.forgotPassword} onClick={onChangeForm}>{t('Уже есть аккаунт')}</a>
                }
            </div>
            {/*{regLoading && <span className={cls.loader}></span>}*/}
            {/*{logLoading && <span className={cls.loader}></span>}*/}
            {/*{regError && <p className={cls.error}>{t('Ошибка регистрации')}</p>}*/}
            {/*{logError && <p className={cls.error}>{t('Ошибка входа')}</p>}*/}
            <input
                className={cls.btn}
                type='submit'
                value={t(hasAccount ? 'Войти' : 'Регистрация')}
            />
        </form>
    )
})
