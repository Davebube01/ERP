import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Custom hook to scroll to top on route change
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

// ScrollToTopWrapper component
const ScrollToTopWrapper = ({ children }) => {
  useScrollToTop();
  return <>{children}</>;
};

// Enhanced Link component
const ScrollToTopLink = ({ to, children, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.location.href = to;
    }, 100);
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink