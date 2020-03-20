import React from 'react';
import styles from './logo.less';
import logo from './logo.jpg';
export default function Logo() {
	return (
		<div className={styles.logoContainer}>
			<img src={logo} alt="logo" className={styles.logoImg} />
		</div>
	);
}
