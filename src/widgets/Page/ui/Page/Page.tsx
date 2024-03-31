import {memo, type ReactNode} from 'react'
import cls from './Page.module.scss'

interface PageProps {
    className?: string
    children: ReactNode
}

export const Page = memo((props: PageProps) => {
    const {
        className,
        children,
    } = props

    return (
        <main className={`${className} ${cls.Page}`}>{children}</main>
    )
})
