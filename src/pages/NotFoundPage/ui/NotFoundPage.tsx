import cls from './NotFoundPage.module.scss'
import {Page} from "@/widgets/Page"

export const NotFoundPage = () => {

    return (
        <Page className={cls.NotFoundPage}>
            <p style={{fontSize: 100}}>NotFoundPage</p>
        </Page>
    );
};
