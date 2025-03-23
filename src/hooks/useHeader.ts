import { useState } from "react";

const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return { toggleMenu, isMenuOpen, setIsMenuOpen };
};

export default useHeader;
