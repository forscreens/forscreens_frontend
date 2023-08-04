import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => {
  try {
    console.log('Rendering Header.js');
    return (
      <div className={styles.headerSection}>
        <Container>
          <Row>
            <Col lg={7} md={8} xs={12}>
              <h1 className={styles.headerTitle}>Get cast in your next role today.</h1>
              <p className={styles.headerSubtitle}>
                Backstage has the most jobs, the best tools, and expert advice to help you get cast.
              </p>
              <Link to="/register">
                <Button variant="primary" size="lg">Join Now</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } catch (error) {
    console.error('Error in Header component:', error);
    return <div>Error in Home component</div>;
  }
};

export default Header;
