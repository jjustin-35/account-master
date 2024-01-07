'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('./application/daily');
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
