"use client";
import { useEffect, useState } from "react";
import { AiOutlineUp } from "react-icons/ai";
import { IconContext } from "react-icons";

const ReturnTopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 100; //ボタンを表示させたい位置
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const normalStyle = {
    opacity: 0,
    transition: "0.5s",
    pointerEvents: "none",
  };
  const activeStyle = {
    opacity: 1,
    transition: "0.5s",
  };
  const style = isButtonActive ? activeStyle : normalStyle;

  return (
    <button onClick={returnTop} className=" bottom-6 right-6 fixed bg-bg-black rounded-full p-1 " style={style}>
      <IconContext.Provider value={{ color: "white", size: "32px" }}>
      <AiOutlineUp className=""/>
      </IconContext.Provider>
    </button>
  );
};

export default ReturnTopButton;