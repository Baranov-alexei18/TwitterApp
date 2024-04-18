import React from 'react';

import { Button } from '@/components/ui-components/Button';

const HomePage = () => (
  <div>
    HomePage
    <Button handleClick={() => console.log('WORK')}>Click</Button>
  </div>
);

export default HomePage;
