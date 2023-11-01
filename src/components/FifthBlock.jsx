import cl from "./FifthBlock.module.css";
import config from "../config/config.json";
import { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import MyButton from "./MyButton";

const { SERVER_IMAGES_URL } = config;

function FifthBlock() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageWidth] = useState(300);

  const feedbacks = useMemo(
    () => [
      {
        id: 0,
        author: "Saltanat Azenova",
        source: "2GIS",
        content:
          "Техниканы жақсы және жылдам қойғызған! Өз саласында мықты екен. Үлкен рақмет сізге, еңбегіңіз жана берсін, жұмысыңыз жемісті болсын!",
        date: "24.05.2023",
        stars: 5,
      },
      {
        id: 1,
        author: "Александр",
        source: "Kaspi.kz",
        content:
          "Покупал несколько раз у этого продавца, покупками и обслуживанием полностью доволен.",
        date: "16.09.2023",
        stars: 5,
      },
      {
        id: 2,
        author: "Анонимно",
        source: "WhatsApp",
        content:
          "Здравствуйте получила товар матрас. спасибо вам большое за качественный товар и быструю доставку. Будем заказывать только у вас.",
        date: "23.02.2023",
        stars: 5,
      },
      {
        id: 3,
        author: "Аймар Файзулин",
        source: "2GIS",
        content:
          "Спасибо за хорошее обслуживание! Купил казахский стол. Очень понравился. Желаю процветания!",
        date: "25.04.2023",
        stars: 5,
      },
      {
        id: 4,
        author: "Әйгерім",
        source: "Kaspi.kz",
        content: "Ночью заказала, утром уже привезли.",
        date: "10.09.2023",
        stars: 5,
      },
      {
        id: 5,
        author: "Ержан",
        source: "Kaspi.kz",
        content: "Полных 5 звезды спасибо продавцу все быстро и качественно.",
        date: "20.09.2023",
        stars: 5,
      },
      {
        id: 6,
        author: "Мурат",
        source: "Kaspi.kz",
        content: "Молодцы доставили в день заказа.",
        date: "18.10.2023",
        stars: 5,
      },
      {
        id: 7,
        author: "Куаныш Шарипов",
        source: "2GIS",
        content:
          "Купил кронштейн. Качество супер. Установка есть установили быстро и без пыли. Советую",
        date: "5.10.2023",
        stars: 5,
      },
    ],
    []
  );

  const stars = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <div id="Feedbacks" className={cl.FifthBlockWrapper}>
      <div className={cl.FifthBlock}>
        <div className={cl.FifthBlockTitleWrapper}>
          <p>Наши</p>
          <p className={cl.FifthBlockTitleHighlight}>отзывы</p>
        </div>
        <div className={cl.FeedbacksWrapper}>
          <div
            className={cl.Feedbacks}
            style={{
              transform: `translateX(-${
                currentImageIndex * imageWidth + imageWidth / 2 + 20
              }px)`,
            }}
          >
            {feedbacks.map((item) => {
              return (
                <div
                  key={item.id}
                  className={
                    cl.FeedbacksItem +
                    " " +
                    (currentImageIndex === item.id ? cl.CurrentFeedback : "")
                  }
                >
                  <img
                    src={SERVER_IMAGES_URL + "frame.png"}
                    alt="Рамка для отзыва."
                  />
                  <div className={cl.FeedbacksItemSource}>
                    <p>{item.source}</p>
                  </div>
                  <div className={cl.FeedbacksItemContent}>
                    <p>{item.content}</p>
                  </div>
                  <div className={cl.Stars}>
                    {stars.map((star) => {
                      const active = star <= item.stars;
                      return (
                        <div
                          key={star}
                          className={
                            cl.StarsItem +
                            " " +
                            (active ? cl.StarsItemActive : "")
                          }
                        >
                          <FaStar />
                        </div>
                      );
                    })}
                  </div>
                  <div className={cl.Author}>
                    <p>{item.author}</p>
                    <p>{item.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <MyButton
          className={cl.LeaveFeedbackButton}
          text="ОСТАВИТЬ СВОЙ ОТЗЫВ"
          href="https://wa.me/+77021963800?text=Здравствуйте! Я хочу оставить свой отзыв."
        />
        <div
          className={
            cl.LeftButton + " " + (currentImageIndex <= 0 ? cl.HideButton : "")
          }
          onClick={() =>
            setCurrentImageIndex((prev) => {
              if (prev <= 0) {
                return prev;
              }
              return prev - 1;
            })
          }
        >
          <AiFillLeftCircle />
        </div>
        <div
          className={
            cl.RightButton +
            " " +
            (currentImageIndex + 1 >= feedbacks.length ? cl.HideButton : "")
          }
          onClick={() =>
            setCurrentImageIndex((prev) => {
              if (prev + 1 >= feedbacks.length) {
                return prev;
              }
              return prev + 1;
            })
          }
        >
          <AiFillRightCircle />
        </div>
      </div>
    </div>
  );
}

export default FifthBlock;
