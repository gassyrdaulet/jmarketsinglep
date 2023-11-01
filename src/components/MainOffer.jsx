import { useEffect, useState } from "react";
import cl from "./MainOffer.module.css";
import { MButton } from "./MyButton";
import { useMemo } from "react";
import config from "../config/config.json";
import { motion } from "framer-motion";
const { SERVER_IMAGES_URL } = config;

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const advantagesAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

function MainOffer() {
  const [actualGood, setActualGood] = useState(0);

  const goods = useMemo(
    () => [
      {
        url: "wln.png",
        alt: "Рация WLN",
        price: "4 950 ₸",
        oldPrice: "5 500 ₸",
        background: "#FFD600",
        id: 0,
      },
      {
        url: "kronsh.png",
        alt: "Кронштейн P4",
        price: "от 1 500 ₸",
        background: "#4094E1",
        id: 1,
      },
      {
        url: "matress.png",
        alt: "Матрас надувной",
        price: "от 7 000 ₸",
        background: "#7be886",
        id: 2,
      },
      {
        url: "roundtable.png",
        alt: "Стол круглый",
        price: "от 23 000 ₸",
        background: "#5d58ed",
        id: 3,
      },
      {
        url: "ironingboard.png",
        alt: "Гладилка",
        price: "от 4 950 ₸",
        background: "#f2ac61",
        id: 4,
      },
      {
        url: "kettle.png",
        alt: "Чайник",
        price: "2 700 ₸",
        background: "#e64c84",
        id: 5,
      },
      {
        url: "scales.png",
        alt: "Весы",
        price: "от 10 500 ₸",
        background: "#4ff0d5",
        id: 6,
      },
      {
        url: "prescooker.png",
        alt: "Мантоварки",
        price: "от 4 000 ₸",
        background: "#f05a4f",
        id: 7,
      },
      {
        url: "windblower.png",
        alt: "Обогреватели",
        price: "от 6 500 ₸",
        background: "#4133ff",
        id: 8,
      },
      {
        url: "cookplate.png",
        alt: "Плитки",
        price: "3100 ₸",
        background: "#5b7887",
        id: 9,
      },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActualGood((prev) => {
        if (!goods[prev + 1]) {
          return 0;
        }
        return prev + 1;
      });
    }, 2300);
    return () => clearInterval(interval);
  }, [goods]);

  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      className={cl.MainOfferWrapper}
    >
      <p className={cl.MainOfferBackgroundText}>
        РАЦИИ МАТРАСЫ КРОНШТЕЙНЫ СУШИЛКИ ВЕСЫ СТОЛЫ ЧАЙНИКИ ГЛАДИЛКИ УТЮГИ
        ПРИСТАВКИ АНТЕННЫ ПЛИТКИ ПУЛЬТЫ ФРИТЮРНИЦЫ ОБОГРЕВАТЕЛИ ПЕЧИ
      </p>
      <div className={cl.MainOffer}>
        <div className={cl.MainOfferFirstHalf}>
          <motion.h1
            custom={1}
            variants={textAnimation}
            className={cl.MainOfferTitle}
          >
            Более <span className={cl.MainOfferTitleHighlight}>1000</span>{" "}
            товаров по самым низким ценам
          </motion.h1>
          <MButton
            custom={2}
            variants={textAnimation}
            className={cl.MainOfferButton}
            text="КУПИТЬ СЕЙЧАС"
            href="#Contacts"
          />
          <motion.div
            custom={1}
            variants={advantagesAnimation}
            className={cl.Advantages}
          >
            <div className={cl.AdvantagesItemFirst}>
              <p className={cl.AdvantagesItemTitle}>30K+</p>
              <p className={cl.AdvantagesItemDesc}>
                На рынке более 4-х лет и за это время успели сделать больше 30
                тысяч удачных продаж.
              </p>
            </div>
            <div className={cl.AdvantagesItemSecond}>
              <p className={cl.AdvantagesItemTitle}>365</p>
              <p className={cl.AdvantagesItemDesc}>
                Дней в году, без выходных. Звоните нам в любой день недели,
                всегда готовы помочь!
              </p>
            </div>
          </motion.div>
        </div>
        <div className={cl.MainOfferSecondHalf}>
          <div className={cl.Slider}>
            {goods.map((good) => {
              if (good.id === actualGood) {
                return (
                  <div key={good.id} className={cl.SliderItem}>
                    <div
                      className={cl.SliderItemBackground}
                      style={{ backgroundColor: good.background }}
                    ></div>
                    <img
                      className={cl.SliderItemImage}
                      src={SERVER_IMAGES_URL + good.url}
                      alt={good.alt}
                    />
                    <div className={cl.SliderItemPrice}>
                      {good.oldPrice ? (
                        <p className={cl.SliderItemOldPrice}>{good.oldPrice}</p>
                      ) : (
                        ""
                      )}
                      <p className={cl.SliderItemNewPrice}>{good.price}</p>
                    </div>
                  </div>
                );
              }
              return "";
            })}
          </div>
          <div className={cl.SliderPages}>
            {goods.map((good) => {
              return (
                <div
                  key={good.id}
                  className={
                    cl.SliderPagesItem +
                    " " +
                    (good.id === actualGood ? cl.SliderPagesItemActive : "")
                  }
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default MainOffer;
