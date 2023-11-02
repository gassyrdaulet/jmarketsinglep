import cl from "./ForthBlock.module.css";
import config from "../config/config.json";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const { SERVER_IMAGES_URL } = config;

const contactsItemAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

const contactsItemDescAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

const forthBlockTitleAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const holdingPhoneAnimation = {
  hidden: {
    rotate: -45,
    opacity: 0,
  },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: { delay: 0.7 },
  },
};

function ForthBlock() {
  const contactsFirstColumn = useMemo(
    () => [
      {
        id: 0,
        name: "Номер телефона",
        content: "+7 707 332 93 42",
        href: "tel://+77073329342",
        icon: <FaWhatsapp />,
        img: "cellphoneicon.png",
        hrefforicon:
          "https://wa.me/+77073329342?text=Здравствуйте! Я нашел пишу из Вашего сайта.",
      },
      {
        icon: <FaWhatsapp />,
        id: 1,
        name: "Номер телефона",
        href: "tel://+7 775 818 13 25",
        content: "+7 775 818 13 25",
        img: "cellphoneicon.png",
        hrefforicon:
          "https://wa.me/+77758181325?text=Здравствуйте! Я нашел пишу из Вашего сайта.",
      },
      {
        id: 2,
        icon: <FaWhatsapp />,
        name: "Номер телефона",
        content: "+7 702 196 38 00",
        href: "https://wa.me/+77021963800?text=Здравствуйте! Я нашел пишу из Вашего сайта.",
        img: "cellphoneicon.png",
        hrefforicon:
          "https://wa.me/+77021963800?text=Здравствуйте! Я нашел пишу из Вашего сайта.",
      },
    ],
    []
  );

  const contactsSecondColumn = useMemo(
    () => [
      {
        id: 0,
        name: "Эл. почта",
        content: "jackmarket@gmail.com",
        href: "mailto://jackmarket@gmail.com",
        img: "emailicon.png",
      },
      {
        id: 1,
        name: "Наш адрес",
        href: "https://2gis.kz/astana/geo/70000001050208852",
        content: "г. Астана, Сарыаркинский р-н, ул. Шаймерден Косшыгулулы, 20",
        img: "locationicon.png",
      },
      {
        id: 2,
        name: "Наш график работы",
        content: "Ежедневно с 10:00 до 20:00",
        img: "clockicon.png",
      },
    ],
    []
  );

  return (
    <motion.div
      id="Contacts"
      initial="hidden"
      whileInView="visible"
      className={cl.ForthBlockWrapper}
    >
      <div className={cl.ForthBlock}>
        <motion.div
          variants={forthBlockTitleAnimation}
          className={cl.ForthBlockTitleWrapper}
        >
          <p className={cl.ForthBlockTitleHighlight}>СВЯЖИТЕСЬ</p>
          <p>С НАМИ</p>
        </motion.div>
        <div className={cl.Contacts}>
          <div className={cl.ContactsFirstColumn}>
            {contactsFirstColumn.map((item) => {
              return (
                <div key={item.id} className={cl.ContactsItem}>
                  <div className={cl.ContactsItemLeft}>
                    <motion.a
                      href={item.href}
                      rel="noreferrer"
                      target="_blank"
                      custom={item.id + 1}
                      variants={contactsItemAnimation}
                      className={cl.ContactsItemIcon}
                    >
                      <img src={SERVER_IMAGES_URL + item.img} alt={item.name} />
                    </motion.a>
                  </div>
                  <motion.div
                    custom={item.id + 1}
                    variants={contactsItemDescAnimation}
                    className={cl.ContactsItemRight}
                  >
                    <p className={cl.ContactsItemTitle}>{item.name}</p>
                    <div className={cl.ContactsItemContentWrapper}>
                      <p className={cl.ContactsItemContent}>{item.content}</p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={item.hrefforicon}
                      >
                        {item.icon}
                      </a>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
          <div className={cl.contactsSecondColumn}>
            {contactsSecondColumn.map((item) => {
              return (
                <div
                  key={item.id}
                  className={cl.ContactsItem + " " + cl.ContactsItemReverse}
                >
                  <div className={cl.ContactsItemLeft}>
                    <motion.a
                      href={item.href}
                      rel="noreferrer"
                      target="_blank"
                      custom={item.id + 1}
                      variants={contactsItemAnimation}
                      className={cl.ContactsItemIcon}
                    >
                      <img src={SERVER_IMAGES_URL + item.img} alt={item.name} />
                    </motion.a>
                  </div>
                  <motion.div
                    custom={item.id + 1}
                    variants={contactsItemDescAnimation}
                    className={cl.ContactsItemRight}
                  >
                    <p className={cl.ContactsItemTitle}>{item.name}</p>
                    <p className={cl.ContactsItemContent}>{item.content}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <motion.div variants={holdingPhoneAnimation} className={cl.HoldingPhone}>
        <img src={SERVER_IMAGES_URL + "hand.png"} alt="Рука держит телефон." />
        <div className={cl.Screenshot}>
          <img
            src={SERVER_IMAGES_URL + "screenshot.jpg"}
            alt="Наше местоположение на телефоне в приложении 2ГИС."
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ForthBlock;
