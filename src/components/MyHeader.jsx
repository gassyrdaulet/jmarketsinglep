import cl from "./MyHeader.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaPhoneSquare, FaInstagramSquare } from "react-icons/fa";
import { useMemo } from "react";

function MyHeader() {
  const links = useMemo(() => {
    return [
      {
        icon: <FaInstagramSquare />,
        url: "https://instagram.com/jack_market_kz?igshid=OGQ5ZDc2ODk2ZA==",
        id: 0,
      },
      {
        icon: <FaSquareWhatsapp />,
        url: "https://wa.me/+77021963800?text=Здравствуйте! Я пишу из Вашего сайта.",
        id: 1,
      },
      { icon: <FaPhoneSquare />, url: "tel://+77073329342", id: 2 },
    ];
  }, []);

  return (
    <div className={cl.HeaderWrapper}>
      <div className={cl.Header}>
        <div className={cl.Logo}>
          <h1 className={cl.LogoText}>
            <span className={cl.LogoTextFirstWord}>JACK</span>{" "}
            <span className={cl.LogoTextSecondWord}>MARKET</span>
          </h1>
          <div className={cl.Location}>
            <IoLocationSharp />
            <p className={cl.LocationText}>Astana</p>
          </div>
        </div>
        <div className={cl.Contacts}>
          <div className={cl.SocialLinks}>
            {links.map((item) => {
              return (
                <a
                  className={cl.SocialLinksItem}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  key={item.id}
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
          <p className={cl.Cellphone}>+7 (707) 332 93 42</p>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
