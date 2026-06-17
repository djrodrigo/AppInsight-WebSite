import React from 'react'
import { motion } from 'framer-motion'
import { Database, TrendingUp } from 'lucide-react'
import styles from './HikariCPSection.module.scss'

export default function HikariCPSection() {
  const metrics = [
    { label: 'Active Connections', icon: Database },
    { label: 'Idle Connections', icon: Database },
    { label: 'Pool Utilization', icon: TrendingUp },
    { label: 'Waiting Threads', icon: TrendingUp },
    { label: 'Connection Wait Times', icon: TrendingUp },
    { label: 'Connection Lifecycle', icon: Database },
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
    <section className={`section ${styles.hikari}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Deep HikariCP Monitoring</h2>
          <p>
            AppInsight provides enterprise-grade visibility into your database connection pools,
            helping you optimize performance and prevent resource exhaustion.
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.visualization}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.poolVisualization}>
              <div className={styles.connectionPool}>
                <div className={styles.poolHeader}>Connection Pool (Max: 30)</div>
                <div className={styles.poolConnections}>
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className={`${styles.connection} ${
                        i < 12 ? styles.active : i < 20 ? styles.idle : styles.empty
                      }`}
                      title={i < 12 ? 'Active' : i < 20 ? 'Idle' : 'Empty'}
                    />
                  ))}
                </div>
                <div className={styles.poolStats}>
                  <div className={styles.stat}>
                    <span className={styles.dot + ' ' + styles.active}></span>
                    <span>12 Active</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.dot + ' ' + styles.idle}></span>
                    <span>8 Idle</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.dot + ' ' + styles.empty}></span>
                    <span>10 Available</span>
                  </div>
                </div>
              </div>

              {/* Metrics chart */}
              <div className={styles.chart}>
                <div className={styles.chartTitle}>Pool Utilization Over Time</div>
                <svg width="100%" height="120" viewBox="0 0 300 120">
                  <path
                    d="M 0 80 Q 50 50 100 70 T 200 40 T 300 65"
                    stroke="#ffa500"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M 0 100 Q 50 85 100 95 T 200 80 T 300 90"
                    stroke="#00d084"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
                <div className={styles.legend}>
                  <div>
                    <span className={styles.color + ' ' + styles.colorOrange}></span>
                    Utilization
                  </div>
                  <div>
                    <span className={styles.color + ' ' + styles.colorGreen}></span>
                    Available
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.metrics}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>Monitor Every Aspect</h3>
            <ul className={styles.metricsList}>
              {metrics.map((metric, idx) => {
                const Icon = metric.icon
                return (
                  <motion.li key={idx} className={styles.metricItem} variants={itemVariants}>
                    <Icon size={20} />
                    <span>{metric.label}</span>
                  </motion.li>
                )
              })}
            </ul>

            <div className={styles.benefits}>
              <h4>Why It Matters</h4>
              <ul className={styles.benefitsList}>
                <li>Prevent connection pool exhaustion</li>
                <li>Identify connection leaks early</li>
                <li>Optimize pool configuration</li>
                <li>Reduce database-related bottlenecks</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
