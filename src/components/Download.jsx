import React from 'react';
import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const Download = () => {
  return (
    <section className={`${styles.section} ${styles.bgWhite}`}>
       <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Source Code</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Get the full source code on GitHub</p>
        </div>
        <Button
          subText='Source code on'
          mainText='Github'
          assetUrl={assets.github}
          link="https://github.com/whizkidefos/pronef-landing"
        />
        <Button 
          subText='View it on'
          mainText='Expo Store'
          assetUrl={assets.expo}
          link="https://expo.dev/@whizkidefos/pronef?serviceType=classic&distribution=expo-go"
        />
        <div className={styles.flexCenter}>
          <img 
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </section>
  )
}

export default Download;