import cls from "./MainPage.module.scss";
import { Page } from "@/widgets/Page";

export const MainPage = () => {
  return (
    <Page className={cls.MainPage}>
      <div className={cls.item}>
        <div className="doc-item__head l-col">
          <h3>
            <strong>Космическая станция</strong>
          </h3>
        </div>
        <div className="doc-item__lock l-col"></div>
        <div className="doc-item__more l-col">
          <a href="src/shared/docs/KSU2I.blend" className={cls.buttonLink}>
            <span className={cls.buttonInner}>
              <span className="button__text">
                <h4>Скачать модель</h4>
              </span>
              <span className="button__icon">
                <i className="icon icon--download"></i>
              </span>
            </span>
          </a>
        </div>
      </div>
    </Page>
  );
};
