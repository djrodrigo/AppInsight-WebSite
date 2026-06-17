import React from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import styles from './FinalCTASection.module.scss'

export default function FinalCTASection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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
    <section className={`section ${styles.finalCTA}`}>
      <div className="container">
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 variants={itemVariants}>
            Start Seeing What Your Applications Are Really Doing
          </motion.h2>

          <motion.p variants={itemVariants}>
            Join engineering teams who have transformed their operational visibility and
            troubleshooting efficiency with AppInsight.
          </motion.p>

          <motion.div className={styles.ctas} variants={itemVariants}>
            <button className="btn btn--primary btn--lg">
              <Download size={20} />
              Download AppInsight
            </button>
            <button className="btn btn--secondary btn--lg">
              Request a Demo
              <ArrowRight size={20} />
            </button>
          </motion.div>

          <motion.p className={styles.subtext} variants={itemVariants}>
            30-day free trial. No credit card required. Works offline.
          </motion.p>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className={styles.bgElements}>
        <motion.div
          className={styles.orb + ' ' + styles.orb1}
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className={styles.orb + ' ' + styles.orb2}
          animate={{
            y: [30, 0, 30],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
    </section>
  )
}
