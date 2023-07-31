import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './PostJob.module.css';

function PostJob() {
  return (
    <div className={styles.inner}>
      <div className={styles.ctaBoxSection}>
        <p className={styles.fontXl}>Start finding actors, models, VO artists, creative freelancers + crew</p>
      </div>
      <Button variant="secondary" size="lg" href="/post_a_job" aria-label="Post a Job" className={styles.btnSecondary}>
        Post a Job
      </Button>
    </div>
  );
}

export default PostJob;
