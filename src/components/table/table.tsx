import {
  Badge,
  Col,
  Container,
  Row,
} from 'shards-react';

import Center from '../center'
import styles from './Table.module.css';

interface TableProps {
  columns: Array<string>;
  content: Array<Object>;
}

export default function Table({ columns, content }: TableProps): JSX.Element {
  return (<Container className={styles.table} fluid={true}>
    <Row className={styles.row}>
      {columns.map((column, index) =>
        <Col key={index} className={styles.column}>{column}</Col>
      )}
    </Row>
    {(content == null || content.length <= 0)
      ? <Row className={styles.row}>
        <Col className={styles.column}><Center>No content found.</Center></Col>
      </Row>
      : content.map((row, index) =>
        <Row key={index} className={styles.row}>
          {Object.values(row).map((column, index) =>
            <Col key={index} className={styles.column}>
              <Center style={{ justifyContent: 'left' }}>
                {(Array.isArray(column))
                  ? column.map((item, index) => {
                    return <Badge key={index} theme="light" className={styles.badge}>{item}</Badge>
                  })
                  : column}
              </Center>
            </Col>
          )}
        </Row>
      )}
  </Container>);
}
