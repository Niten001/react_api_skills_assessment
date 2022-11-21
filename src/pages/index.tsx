import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head'
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Container
} from 'shards-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import Page from '../components/page';
import { AppConfig } from '../data/config';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (<Page
    description={AppConfig.description}
    title={AppConfig.title}
  >
    <Container className={styles.container} style={{ maxWidth: 1000 }}>
      <ButtonToolbar className={styles.buttonToolbar}>
        <h3 style={{ marginBottom: 0 }}>{AppConfig.title}</h3>
        <ButtonGroup size="md" className={styles.buttonGroup}>
          <Button className={styles.button} onClick={() => console.log("LOAD")}>
            <FontAwesomeIcon icon={faSpinner} className={styles.icon}></FontAwesomeIcon>
            <>LOAD</>
          </Button>
          <Button className={styles.button} onClick={() => console.log("ADD")}>
            <FontAwesomeIcon icon={faPlus} className={styles.icon}></FontAwesomeIcon>
            <>ADD</>
          </Button>
          <Button theme="danger" className={styles.button} onClick={() => console.log("DELETE")}>
            <FontAwesomeIcon icon={faTrash} className={styles.icon}></FontAwesomeIcon>
            <>DELETE</>
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Container>
  </Page>);
}
