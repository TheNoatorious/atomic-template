import React, { FC } from 'react';
import styles from './navigation.module.scss';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => (
  <div className={styles.Navigation}>
    Navigation Component
  </div>
);

export default Navigation;
