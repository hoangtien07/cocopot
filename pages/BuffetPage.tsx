import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Since we merged Buffet logic into MenuPage as "Combos", 
// this page will redirect to the menu page.
export const BuffetPage: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/thuc-don');
  }, [navigate]);

  return null;
};