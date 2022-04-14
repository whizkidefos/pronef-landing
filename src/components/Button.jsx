import React from 'react';
import styles from '../styles/Global';

const Button = ({ assetUrl, link, subText, mainText }) => {
  return (
    <div className={styles.btnBlack} onClick={() => window.open(link, '_blank')}>
        <img src={assetUrl} alt="expo-icon"
            className={styles.btnIcon}
        />
        <div className='flex flex-col justify-start ml-4'>
            <small className={`${styles.btnText} font-normal text-xs`}>{subText}</small>
            <p className={`${styles.btnText} font-bold text-sm`}>{mainText}</p>
        </div>
    </div>
  )
}

export default Button;