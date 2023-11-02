import cl from "./SecondBlock.module.css";
import { motion } from "framer-motion";
import scooter from "../img/scooter.png";
import baiterek from "../img/astana.jpg";
import flag from "../img/flag.jpg";

const scooterAnimation = {
  hidden: {
    x: 500,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const secondBlockAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function SecondBlock() {
  return (
    <motion.div
      id="Delivery"
      initial="hidden"
      whileInView={"visible"}
      className={cl.SecondBlockWrapper}
    >
      <motion.div variants={secondBlockAnimation} className={cl.SecondBlock}>
        <div className={cl.SecondBlockRow}>
          <div className={cl.SecondBlockImgWrapper}>
            <img
              className={cl.SecondBlockImg}
              src={baiterek}
              alt="Казахстан, г. Астана на карте."
            />
          </div>
          <div className={cl.SecondBlockDesc}>
            <h2>Быстрая доставка по Астане</h2>
            <p>
              Мы рады сообщить вам что у нас есть оперативная доставка по всему
              городу Астана, а самое главное, вы можете оплатить ваш заказ прямо
              при получении товаров. Оформите заказ, и мы доставим его к вам в
              течение всего 3-4 часов.
            </p>
          </div>
        </div>
        <div className={cl.SecondBlockRow}>
          <div className={cl.SecondBlockDesc}>
            <h2>Что делать если вы не в Астане?</h2>
            <p>
              Вы можете подать заказ в наш Kaspi магазин, либо заказать доставку
              по почте. Это позволит вам получить товар даже в самых отдаленных
              местах. Просто свяжитесь с нами, уточните детали и условия
              доставки почтой, и мы с удовольствием организуем отправку товаров
              к вам.
            </p>
          </div>
          <div className={cl.SecondBlockImgWrapper}>
            <img
              className={cl.SecondBlockImg}
              src={flag}
              alt="Флаг Казахстана."
            />
          </div>
        </div>
      </motion.div>
      <motion.div custom={1} variants={scooterAnimation} className={cl.Scooter}>
        <img src={scooter} alt="Скутер для доставок!" />
      </motion.div>
    </motion.div>
  );
}

export default SecondBlock;
