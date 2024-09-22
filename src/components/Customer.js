import React from "react";
import { useTranslation } from 'react-i18next';



function Customer(){
  const { t } = useTranslation();

    return(
        <div>
            <h1>{t('World')}</h1>
        </div>
    )
}

export default Customer;