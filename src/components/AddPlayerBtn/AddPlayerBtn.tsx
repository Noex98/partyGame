import React from 'react';
import styles from './style.module.scss';
import { IoMdAddCircle } from 'react-icons/io'
import { AiOutlineArrowRight } from 'react-icons/ai'

export const AddPlayerBtn = () => {
  return (
    <>
        <div className={styles.inputWrapper}>
            <input className={styles.input} placeholder='Add player' type="text" />
            <span className={styles.iconsContainer}>
                <IoMdAddCircle />
                <AiOutlineArrowRight />
            </span>
        </div>
    </>
  )
}
