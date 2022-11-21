import { Col, Container, Row } from 'shards-react';

interface TableProps {
  columns: Array<string>;
  content: Array<Object>;
}

import styles from './Table.module.css';

export default function Table({ columns, content }: TableProps): JSX.Element {
  return (<Container className={styles.table} fluid={true}>
    <Row className={styles.row}>
      {columns.map((column, index) =>
        <Col key={index} className={styles.column}>{column}</Col>
      )}
    </Row>
    {(content == null || content.length <= 0)
      ? <Row className={styles.row}>
        <Col className={styles.column}>No content found.</Col>
      </Row>
      : content.map((row, index) =>
        <Row key={index} className={styles.row}>
          {row.toString()}
        </Row>
      )}
  </Container>);
}
