import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui-components/Button';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Page not found</h1>
      <Button onClick={handleReturnHome}>Return to Home</Button>
    </div>
  );
};
