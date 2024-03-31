// import { Loader } from '@/shared/ui/deprecated/Loader/Loader'
import cls from './PageLoader.module.scss'
import {Loader} from "@/shared/ui/Loader"

export const PageLoader = () => {
    return (
        <div className={cls.PageLoader}>
            <Loader/>
        </div>
    )
}
