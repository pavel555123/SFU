import cls from "./AboutPage.module.scss";
import { Page } from "@/widgets/Page";

export const AboutPage = () => {
  return (
    <Page className={cls.AboutPage}>
      <div className={cls.item}>
        <div className="doc-item__head l-col">
          <h3>
            <strong>Рендер</strong>
          </h3>
        </div>
        <div className="doc-item__lock l-col"></div>
        <div className="doc-item__more l-col">
          <a
            className={cls.buttonLink}
            href="src/shared/docs/airplane.jpg"
            download
          >
            <span className={cls.buttonInner}>
              <span className="button__text">
                <h4>Скачать рендер</h4>
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
