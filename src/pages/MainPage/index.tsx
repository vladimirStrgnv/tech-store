import './index.css';

const MainPage = () => {
  return (
    <section className="advantages">
      <div className="advantages__info">
        <div className="advantages__service-info">
          <ul className="advantages__tags-list">
            <li className="advantages__tag">Телефоны</li>
            <li className="advantages__tag">Ростов-на-Дону</li>
          </ul>
          <h2 className="advantages__service-info-title">
            Установка и продажа систем видеонаблюдения
          </h2>
          <p className="advantages__service-info-description">
            Понятным языком объясняем технические термины
          </p>
        </div>
        <div className="advantages__catalog_info">
          <h2 className="advantages__catalog-info-title">ARSHIN TECH</h2>
          <p className="advantages__catalog-info-description">
            Объединение профессионалов, с большим опытом работы в сфере систем
            видеонаблюдения, контроля доступа и видеодомофонии.
          </p>
          <button className="advantages__catalog-info-btn">
            Оставить заявку
          </button>
        </div>

      </div>
      <div className="advantages__img"></div>
    </section>
  );
};

export const Component = MainPage;
