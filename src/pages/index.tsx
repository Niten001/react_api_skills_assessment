import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Container
} from 'shards-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import Page from '../components/page';
import Table from '../components/table';
import { AppConfig } from '../data/config';
import {
  addItemToData,
  deleteItemFromData,
  getApiData,
  loadApiData
} from '../data/store/apiDataSlice';
import { useAppSelector, useAppDispatch } from '../data/store/hooks';

import styles from '../styles/Home.module.css';

export default function Home() {
  const apiData = useAppSelector(getApiData);
  const dispatch = useAppDispatch();
  return (<Page
    description={AppConfig.description}
    title={AppConfig.title}
  >
    <Container className={styles.container} style={{ maxWidth: 1000 }}>
      <ButtonToolbar className={styles.buttonToolbar}>
        <h3 style={{ marginBottom: 0 }}>{AppConfig.title}</h3>
        <ButtonGroup size="md" className={styles.buttonGroup}>
          <Button className={styles.button} onClick={() => dispatch(loadApiData())}>
            <FontAwesomeIcon icon={faSpinner} className={styles.icon}></FontAwesomeIcon>
            <>LOAD</>
          </Button>
          <Button className={styles.button} onClick={() => dispatch(addItemToData())}>
            <FontAwesomeIcon icon={faPlus} className={styles.icon}></FontAwesomeIcon>
            <>ADD</>
          </Button>
          <Button theme="danger" className={styles.button} onClick={() => dispatch(deleteItemFromData())}>
            <FontAwesomeIcon icon={faTrash} className={styles.icon}></FontAwesomeIcon>
            <>DELETE</>
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      <Table columns={["Name", "Webpages", "Domains", "Country"]} content={apiData}></Table>
    </Container>
  </Page>);
}
