import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Container } from '@/assets/style/global';

const HomePage = () => {
  const [count, setCount] = useState(0);
  const user = useSelector((state) => state.user);

  console.log(user);

  return (
    <Container>
      homePage
      {' '}
      {count}
    </Container>
  );
};

export default HomePage;
