import React from 'react'
import { motion } from 'framer-motion'
import styles from './BenefitsSection.module.scss'

export default function BenefitsSection() {
  const stats = [
    {
      number: '75%',
      label: 'Faster Troubleshooting',
      description: 'Resolve issues 3x faster with unified visibility',
    },
    {
      number: '60%',
      label: 'Reduced Downtime',
      description: 'Detect and prevent issues before they escalate',
    },
    {
      number: '90%',
      label: 'Better Visibility',
      description: 'See everything about your applications in one place',
    },
    {
      number: '80%',
      label: 'Improved Productivity',
      description: 'Developers spend less time debugging',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  return (
    <section className={`section ${styles.benefits}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Measurable Value</h2>
          <p>Engineering teams using AppInsight experience significant improvements in efficiency</p>
        </motion.div>

        <motion.div
          className={styles.statsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} className={styles.statCard} variants={itemVariants}>
              <motion.div
                className={styles.statNumber}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <h3>{stat.label}</h3>
              <p>{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            Join engineering teams that have transformed their operational visibility with AppInsight
          </p>
        </motion.div>
      </div>
    </section>
  )
}
