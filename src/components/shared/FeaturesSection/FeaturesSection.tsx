import React from 'react'
import { motion } from 'framer-motion'
import {
  Activity,
  Zap,
  Database,
  Terminal,
  BarChart3,
  Grid,
  Settings,
  Cpu,
} from 'lucide-react'
import styles from './FeaturesSection.module.scss'

export default function FeaturesSection() {
  const features = [
    {
      icon: Activity,
      title: 'Application Health Monitoring',
      description: 'Monitor health status instantly with real-time indicators for all connected services.',
    },
    {
      icon: Zap,
      title: 'JVM Intelligence',
      description: 'Track memory, garbage collection, threads and runtime metrics in real-time.',
    },
    {
      icon: Database,
      title: 'HikariCP Analytics',
      description: 'Visualize connection pool utilization, active connections, and pool performance.',
    },
    {
      icon: Terminal,
      title: 'Logger Management',
      description: 'Manage logging levels dynamically without restarting your applications.',
    },
    {
      icon: BarChart3,
      title: 'Metrics Explorer',
      description: 'Browse all available actuator metrics and custom metrics in a beautiful interface.',
    },
    {
      icon: Grid,
      title: 'Multi-Application Monitoring',
      description: 'Monitor multiple Spring Boot applications simultaneously from one dashboard.',
    },
    {
      icon: Settings,
      title: 'Environment Explorer',
      description: 'Inspect configuration and environment variables with detailed context.',
    },
    {
      icon: Cpu,
      title: 'Cross Platform',
      description: 'Runs natively on Windows, macOS and Linux with the same powerful experience.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className={`section ${styles.features}`} id="features">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Powerful Features for Serious DevOps</h2>
          <p>Everything you need to deeply understand your Spring Boot applications</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div key={idx} className={styles.card} variants={itemVariants}>
                <div className={styles.iconWrapper}>
                  <Icon size={32} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
