import styles from './Center.module.css'
import { HTMLAttributes } from 'react';

export default function Center({ children, style }: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div className={styles.center} style={style}>
    {children}
  </div>
}
