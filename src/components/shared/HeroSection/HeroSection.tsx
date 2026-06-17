import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import AppMockup from '../../AppMockup/AppMockup'
import styles from './HeroSection.module.scss'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className={`section ${styles.hero}`} id="hero">
      <div className="container">
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className={styles.textContent}>
            <h1>See Everything. Miss Nothing.</h1>
            <p>
              AppInsight transforms Spring Boot Actuator data into actionable operational intelligence
              through a powerful desktop application. Real-time metrics, health monitoring, and deep
              visibility into your applications—all in one elegant dashboard.
            </p>
            <div className={styles.ctas}>
              <button className="btn btn--primary btn--lg">
                Download AppInsight
              </button>
              <button className={`btn btn--ghost btn--lg ${styles.demoBtn}`}>
                <Play size={20} />
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.mockup}>
            <AppMockup />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className={styles.bgElements}>
        <motion.div
          className={styles.orb + ' ' + styles.orb1}
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className={styles.orb + ' ' + styles.orb2}
          animate={{
            y: [30, 0, 30],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
    </section>
  )
}
