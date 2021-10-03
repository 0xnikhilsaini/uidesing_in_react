import React from 'react';
import Styles from './component1.module.scss';
export default function component1() {
  return (
    <>
      <div className={Styles.parent}>
        <div className={Styles.Header}>
          <p className={Styles.headertitile}>CSS is a lot fun </p>
        </div>
        <div className={Styles.content}>
          <p className={Styles.contenttitle}>Section One Title</p>

          <img
            className={Styles.contentImage}
            src={
              'https://thumbs.dreamstime.com/b/manhattan-brooklyn-bridge-black-white-new-york-skyscrapers-city-illuminations-colors-usa-65168874.jpg'
            }
            alt="content image"
          />
          <p className={Styles.content}>
            This is css conteent. this is for playing with css. This is good for
            practice. You should learn design patteren
          </p>
        </div>
      </div>
    </>
  );
}
