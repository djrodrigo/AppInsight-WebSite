import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import styles from './PricingSection.module.scss'

export default function PricingSection() {
  const features = [
    'Unlimited Applications',
    'Real-time Monitoring',
    'All Spring Boot Actuator Endpoints',
    'HikariCP Analytics',
    'Logger Management',
    'Multi-Platform Support',
    'Regular Updates',
    'Community Support',
    'Secure Local Connection',
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
    <section className={`section ${styles.pricing}`} id="pricing">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Simple, Transparent Pricing</h2>
          <p>One professional plan. Everything you need to master your Spring Boot infrastructure.</p>
        </motion.div>

        <motion.div
          className={styles.pricingCard}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className={styles.cardContent}>
            <div className={styles.planHeader}>
              <h3>AppInsight Professional</h3>
              <div className={styles.badge}>Most Popular</div>
            </div>

            <div className={styles.pricing_}>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>49</span>
                <span className={styles.period}>/month</span>
              </div>
              <p className={styles.priceDesc}>per seat annual billing available</p>
            </div>

            <button className="btn btn--primary btn--lg" style={{ width: '100%' }}>
              Download Now
            </button>

            <div className={styles.features}>
              <h4>Includes Everything</h4>
              <motion.ul
                className={styles.featuresList}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {features.map((feature, idx) => (
                  <motion.li key={idx} className={styles.feature} variants={itemVariants}>
                    <Check size={20} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          <div className={styles.highlight}></div>
        </motion.div>

        <motion.div
          className={styles.faq_}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4>Flexible Options Available</h4>
          <p>
            Need a different plan? We offer site licenses, team packages, and enterprise contracts.
            <br />
            <a href="mailto:sales@appinsight.fyi">Contact us for custom pricing</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
