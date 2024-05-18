import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH } from '@/constants/routerLinks';
import { Button } from '@/ui-components/Button';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate(PATH.START_PAGE);
  };

  return (
    <div>
      <h1>Page not found</h1>
      <Button onClick={handleReturnHome}>Return to Home</Button>
    </div>
  );
};
