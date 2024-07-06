"use client";
import { useState } from "react";
import HeaderCSS from "./header.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";

const Header = () => {
  const [language, setLanguage] = useState("English");
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setDropdown(false);
  };

  return (
    <div className={HeaderCSS.headerWrapper}>
      <div className={HeaderCSS.headerContainer}>
        <div className={HeaderCSS.logoText}>FroiFlix</div>
        <div className={HeaderCSS.options}>
          <div className={HeaderCSS.dropdownMenu}>
            <div
              className={HeaderCSS.languageDropdown}
              onClick={toggleDropdown}
            >
              <IoLanguage />
              {language} <IoMdArrowDropdown />
            </div>
            {dropdown && (
              <ul className={HeaderCSS.dropdownList}>
                <li onClick={() => handleLanguageChange("English")}>English</li>
                <li onClick={() => handleLanguageChange("Spanish")}>Spanish</li>
              </ul>
            )}
          </div>
          <div className={HeaderCSS.signIn}>Sign In</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
