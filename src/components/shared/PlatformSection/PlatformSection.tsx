import { motion } from 'framer-motion'
import { Apple, MonitorPlay, Cpu } from 'lucide-react'
import styles from './PlatformSection.module.scss'

export default function PlatformSection() {
  const platforms = [
    {
      icon: Apple,
      name: 'macOS',
      description: 'Intel and Apple Silicon',
      minVersion: '10.13+',
    },
    {
      icon: MonitorPlay,
      name: 'Windows',
      description: 'Full desktop support',
      minVersion: 'Windows 7+',
    },
    {
      icon: Cpu,
      name: 'Linux',
      description: 'All major distributions',
      minVersion: 'Modern glibc',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className={`section ${styles.platform}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Cross-Platform Excellence</h2>
          <p>AppInsight runs natively on all major operating systems with consistent performance</p>
        </motion.div>

        <motion.div
          className={styles.platformsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {platforms.map((platform, idx) => {
            const Icon = platform.icon
            return (
              <motion.div key={idx} className={styles.platformCard} variants={itemVariants}>
                <div className={styles.iconWrapper}>
                  <Icon size={40} />
                </div>
                <h3>{platform.name}</h3>
                <p>{platform.description}</p>
                <div className={styles.version}>{platform.minVersion}</div>
                <button className="btn btn--sm btn--primary">
                  Download
                </button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
