import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerSection}>
      <Container>
        <Row>
          <Col lg={7} md={8} xs={12}>
            <h1 className={styles.headerTitle}>Get cast in your next role today.</h1>
            <p className={styles.headerSubtitle}>
              Backstage has the most jobs, the best tools, and expert advice to help you get cast.
            </p>
            <Button variant="primary" size="lg">Join Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
