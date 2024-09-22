import React from 'react';
import { useTranslation } from 'react-i18next';
import Main from './components/Main';
import Navbar from './components/Navbar';


function App() {
  const { t } = useTranslation();
  return (
    <div >
      <Navbar/>
      <h1>{t('Welcome')}</h1>
      <Main/>
    </div>
  );
}

export default App;
