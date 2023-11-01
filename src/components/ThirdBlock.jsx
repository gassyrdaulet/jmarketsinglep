import cl from "./ThirdBlock.module.css";
import { useMemo } from "react";
import config from "../config/config.json";
import { motion } from "framer-motion";

const { SERVER_IMAGES_URL } = config;

const thirdBlockTitleAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const servicesAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.15 },
  }),
};

function ThirdBlock() {
  const services = useMemo(
    () => [
      {
        id: 0,
        img: SERVER_IMAGES_URL + "insta_logo.png",
        name: "Instagram",
        href: "https://instagram.com/jack_market_kz?igshid=OGQ5ZDc2ODk2ZA==",
        title: "Присоединяйтесь к нашей страничке",
        desc: "Следите за нами в Instagram, чтобы быть в курсе последних новостей и акций!",
      },
      {
        id: 1,
        img: SERVER_IMAGES_URL + "kaspi_logo.png",
        name: "Kaspi",
        href: "https://kaspi.kz/shop/info/merchant/1037010/address-tab/",
        title: "Удобно и выгодно в нашем магазине на Kaspi.kz",
        desc: "У нас есть все, что вам нужно - просто посетите наш магазин на Kaspi.kz и убедитесь сами.",
      },
      {
        id: 2,
        img: SERVER_IMAGES_URL + "whatsapp_logo.png",
        name: "Whatsapp",
        href: "https://wa.me/+77021963800?text=Здравствуйте! Не могли бы Вы мне, пожалуйста, помочь?",
        title: "Мы всегда рядом в WhatsApp!",
        desc: "У вас есть вопросы или нужна помощь? Напишите нам в WhatsApp - мы всегда на связи.",
      },
    ],
    []
  );

  return (
    <motion.div
      id="Services"
      initial="hidden"
      whileInView="visible"
      className={cl.ThirdBlockWrapper}
    >
      <div className={cl.ThirdBlock}>
        <motion.div
          variants={thirdBlockTitleAnimation}
          className={cl.ThirdBlockTitleWrapper}
        >
          <p>Ознакомьтесь с нашим</p>
          <p className={cl.ThirdBlockTitleHighlight}>ассортиментом</p>
          <p>через онлайн сервисы</p>
        </motion.div>
        <div className={cl.Services}>
          {services.map((item) => {
            return (
              <motion.a
                href={item.href}
                rel="noreferrer"
                target="_blank"
                custom={item.id + 1}
                variants={servicesAnimation}
                className={cl.ServicesItem}
                key={item.id}
              >
                <div className={cl.ServicesItemIcon}>
                  <img src={item.img} alt={item.name} />
                </div>
                <div className={cl.ServicesItemDesc}>
                  <p className={cl.ServicesItemDescTitle}>{item.title}</p>
                  <p className={cl.ServicesItemDescText}>{item.desc}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default ThirdBlock;
