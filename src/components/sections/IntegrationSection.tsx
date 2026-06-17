import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import styles from './IntegrationSection.module.scss'

export default function IntegrationSection() {
  const endpoints = [
    'health',
    'metrics',
    'info',
    'env',
    'loggers',
    'threaddump',
    'beans',
    'mappings',
    'prometheus',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className={`section ${styles.integration}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Spring Boot Actuator Integration</h2>
          <p>
            AppInsight seamlessly connects to your Spring Boot applications through the
            Actuator API, extracting and visualizing comprehensive operational data.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          className={styles.architecture}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.flow}>
            <div className={styles.block}>
              <h4>Spring Boot App</h4>
              <p className={styles.blockDesc}>Your application with Actuator enabled</p>
            </div>

            <div className={styles.arrow}>
              <ArrowRight size={24} />
            </div>

            <div className={styles.block}>
              <h4>Actuator Endpoints</h4>
              <p className={styles.blockDesc}>REST API endpoints exposing metrics</p>
            </div>

            <div className={styles.arrow}>
              <ArrowRight size={24} />
            </div>

            <div className={styles.block}>
              <h4>AppInsight</h4>
              <p className={styles.blockDesc}>Desktop application</p>
            </div>

            <div className={styles.arrow}>
              <ArrowRight size={24} />
            </div>

            <div className={styles.block + ' ' + styles.blockHighlight}>
              <h4>Insights</h4>
              <p className={styles.blockDesc}>Actionable intelligence</p>
            </div>
          </div>
        </motion.div>

        {/* Supported Endpoints */}
        <motion.div
          className={styles.endpointsSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3>Supported Endpoints</h3>
          <div className={styles.endpointsGrid}>
            {endpoints.map((endpoint, idx) => (
              <motion.div key={idx} className={styles.endpoint} variants={itemVariants}>
                <code>/actuator/{endpoint}</code>
              </motion.div>
            ))}
          </div>

          <p className={styles.note}>
            AppInsight supports all major Spring Boot Actuator endpoints. Custom metrics are
            fully supported through Micrometer integration.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
