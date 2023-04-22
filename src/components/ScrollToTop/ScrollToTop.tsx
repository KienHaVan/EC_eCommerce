import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  }, [navigate]);

  return null;
};

export default ScrollToTop;
