import "./index.css";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <motion.section
      className="advantages"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="advantages__info">
        <div className="advantages__service-info">
          <ul className="advantages__tags-list">
            <li className="advantages__tag">Телефоны</li>
            <li className="advantages__tag">Ростов-на-Дону</li>
          </ul>
          <h2 className="advantages__service-info-title">
          NPS – интернет магазин цифровой и бытовой техники
          </h2>
          <p className="advantages__service-info-description">
            Понятным языком ответим на ваши вопросы
          </p>
        </div>
        <div className="advantages__catalog_info">
          <h2 className="advantages__catalog-info-title">NPS TECH</h2>
          <p className="advantages__catalog-info-description">
          Большой ассортимент электроники, цифровой и бытовой техники, а так же товаров для дома, известных брендов в интернет-магазине NPS по отличным ценам.
          </p>
          <button className="advantages__catalog-info-btn">
            Связаться
          </button>
        </div>
      </div>
      <div className="advantages__img"></div>
    </motion.section>
  );
};

export const Component = MainPage;
