'use client';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { useEffect } from 'react';
import { useStore } from './store/app-store';

export const App = (props) => {

  const store = useStore();

  useEffect(() => {
    store.checkAuth();
  }, []);

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  ) 
};

// Не важно зачем, просто без лишних вопросов :) 
console.log('________________________________________________')
console.log("ACCOUNT DATA = username: earth_69dd4b0a || email: earth_69dd4b0a@example.com || password: a540842182396f12fb5c");

let accountData = {
  username: 'earth_69dd4b0a',
  email: 'earth_69dd4b0a@example.com',
  password: 'a540842182396f12fb5c'
}

console.log(accountData)
console.log('________________________________________________')