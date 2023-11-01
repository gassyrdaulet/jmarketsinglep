import cl from "./Footer.module.css";
import { IoLocationSharp } from "react-icons/io5";

function Footer() {
  return (
    <div className={cl.FooterWrapper}>
      <div className={cl.Footer}>
        <div className={cl.Logo}>
          <p>JACK MARKET</p>
          <div className={cl.Location}>
            <IoLocationSharp />
            <p>Astana</p>
          </div>
        </div>
        <div className={cl.Innotec}>
          <p>Brought to you by</p>
          <p>INNO</p>
          <p>technologies</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
