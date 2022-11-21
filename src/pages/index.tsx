import Page from '../components/page';
import { AppConfig } from '../data/config';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (<Page
    description={AppConfig.description}
    title={AppConfig.title}
  >
    Hello World
  </Page>);
}
