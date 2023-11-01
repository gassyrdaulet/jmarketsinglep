import cl from "./MyButton.module.css";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const MyButton = forwardRef(({ className, text, href }, ref) => {
  return (
    <a ref={ref} className={cl.MyButton + " " + className} href={href}>
      {text}
    </a>
  );
});

export default MyButton;
export const MButton = motion(MyButton);
