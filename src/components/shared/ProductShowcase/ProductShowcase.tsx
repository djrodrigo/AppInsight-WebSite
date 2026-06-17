import React from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import styles from './ProductShowcase.module.scss'

export default function ProductShowcase() {
  const comparison = [
    { feature: 'Unified Dashboard', without: false, with: true },
    { feature: 'Real-time Metrics', without: false, with: true },
    { feature: 'Visual Analytics', without: false, with: true },
    { feature: 'Multi-App Monitoring', without: false, with: true },
    { feature: 'Beautiful UI', without: false, with: true },
    { feature: 'Fast Issue Detection', without: false, with: true },
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

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className={`section ${styles.showcase}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>A Better Way to Monitor Spring Boot Applications</h2>
          <p>
            Stop browsing JSON endpoints in multiple browser tabs. AppInsight centralizes everything
            into a single, intuitive desktop experience.
          </p>
        </motion.div>

        <motion.div
          className={styles.comparison}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className={styles.column} variants={rowVariants}>
            <div className={styles.columnHeader}>
              <h3>❌ Without AppInsight</h3>
              <p className={styles.columnDesc}>Manual Browsing</p>
            </div>
            <ul className={styles.list}>
              <li>
                <span className={styles.icon}>
                  <X size={20} />
                </span>
                Raw JSON endpoints
              </li>
              <li>
                <span className={styles.icon}>
                  <X size={20} />
                </span>
                Multiple browser tabs
              </li>
              <li>
                <span className={styles.icon}>
                  <X size={20} />
                </span>
                Difficult troubleshooting
              </li>
              <li>
                <span className={styles.icon}>
                  <X size={20} />
                </span>
                Hard to correlate data
              </li>
              <li>
                <span className={styles.icon}>
                  <X size={20} />
                </span>
                Slow issue detection
              </li>
              <li>
                <span className={styles.icon}>
                  <X size={20} />
                </span>
                Inefficient workflow
              </li>
            </ul>
          </motion.div>

          <motion.div className={styles.column + ' ' + styles.columnHighlight} variants={rowVariants}>
            <div className={styles.columnHeader}>
              <h3>✓ With AppInsight</h3>
              <p className={styles.columnDesc}>Unified Intelligence</p>
            </div>
            <ul className={styles.list}>
              <li>
                <span className={styles.icon + ' ' + styles.success}>
                  <Check size={20} />
                </span>
                Unified dashboards
              </li>
              <li>
                <span className={styles.icon + ' ' + styles.success}>
                  <Check size={20} />
                </span>
                Visual analytics
              </li>
              <li>
                <span className={styles.icon + ' ' + styles.success}>
                  <Check size={20} />
                </span>
                Instant insights
              </li>
              <li>
                <span className={styles.icon + ' ' + styles.success}>
                  <Check size={20} />
                </span>
                Centralized data
              </li>
              <li>
                <span className={styles.icon + ' ' + styles.success}>
                  <Check size={20} />
                </span>
                Fast troubleshooting
              </li>
              <li>
                <span className={styles.icon + ' ' + styles.success}>
                  <Check size={20} />
                </span>
                Enhanced productivity
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
