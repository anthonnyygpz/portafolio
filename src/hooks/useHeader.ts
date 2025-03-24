import { useState } from "react";

const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [tooltipText, setTooltipText] = useState<string>("Copiar correo");
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const email = "anthonyygpz@gmail.com";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const gmailCopyButton = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setTooltipText("!Se ha copiado!");
        setTimeout(() => {
          setTooltipText("Copiar Correo");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error al copiar: ", error);
      });
  };

  return {
    toggleMenu,
    isMenuOpen,
    setIsMenuOpen,
    scrollSection,
    gmailCopyButton,
    tooltipText,
    showTooltip,
    setShowTooltip,
  };
};

export default useHeader;
