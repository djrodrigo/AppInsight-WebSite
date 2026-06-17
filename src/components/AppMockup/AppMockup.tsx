import React from 'react'
import { Activity, TrendingUp, Zap, Database } from 'lucide-react'
import styles from './AppMockup.module.scss'

export default function AppMockup() {
  return (
    <div className={styles.mockup}>
      <div className={styles.window}>
        {/* Window header */}
        <div className={styles.header}>
          <div className={styles.titleBar}>
            <div className={styles.buttons}>
              <span className={styles.btn + ' ' + styles.red}></span>
              <span className={styles.btn + ' ' + styles.yellow}></span>
              <span className={styles.btn + ' ' + styles.green}></span>
            </div>
            <div className={styles.title}>AppInsight Dashboard</div>
            <div style={{ width: '70px' }}></div>
          </div>
        </div>

        {/* Window content */}
        <div className={styles.content}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>A</div>
              <span>AppInsight</span>
            </div>
            <nav className={styles.nav}>
              <a href="#" className={styles.navItem + ' ' + styles.active}>
                <Activity size={18} />
                Dashboard
              </a>
              <a href="#" className={styles.navItem}>
                <TrendingUp size={18} />
                Metrics
              </a>
              <a href="#" className={styles.navItem}>
                <Database size={18} />
                Datasources
              </a>
              <a href="#" className={styles.navItem}>
                <Zap size={18} />
                Health
              </a>
            </nav>
          </div>

          {/* Main content */}
          <div className={styles.main}>
            <div className={styles.header_}>
              <h2>Overview Dashboard</h2>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.statValue}>98%</div>
                  <div className={styles.statLabel}>Uptime</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statValue}>1.2s</div>
                  <div className={styles.statLabel}>Avg Response</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statValue}>256MB</div>
                  <div className={styles.statLabel}>Memory</div>
                </div>
              </div>
            </div>

            <div className={styles.cards}>
              {/* Health card */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>Application Health</h3>
                  <span className={styles.badge + ' ' + styles.badgeGreen}>HEALTHY</span>
                </div>
                <div className={styles.healthStatus}>
                  <div className={styles.healthItem}>
                    <div className={styles.healthCircle + ' ' + styles.up}></div>
                    <span>DB Connection</span>
                  </div>
                  <div className={styles.healthItem}>
                    <div className={styles.healthCircle + ' ' + styles.up}></div>
                    <span>Message Queue</span>
                  </div>
                  <div className={styles.healthItem}>
                    <div className={styles.healthCircle + ' ' + styles.up}></div>
                    <span>Cache Server</span>
                  </div>
                </div>
              </div>

              {/* JVM card */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>JVM Metrics</h3>
                </div>
                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>
                      <span>Heap Memory</span>
                      <span className={styles.value}>512MB / 1024MB</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progress} style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>
                      <span>Thread Count</span>
                      <span className={styles.value}>45</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progress} style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* HikariCP card */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>Connection Pool</h3>
                </div>
                <div className={styles.poolStatus}>
                  <div className={styles.poolItem}>
                    <span>Active</span>
                    <span className={styles.poolValue}>12</span>
                  </div>
                  <div className={styles.poolItem}>
                    <span>Idle</span>
                    <span className={styles.poolValue}>18</span>
                  </div>
                  <div className={styles.poolItem}>
                    <span>Waiting</span>
                    <span className={styles.poolValue}>0</span>
                  </div>
                </div>
              </div>

              {/* Charts area */}
              <div className={`${styles.card} ${styles.cardFull}`}>
                <div className={styles.cardHeader}>
                  <h3>Request Metrics (Last Hour)</h3>
                </div>
                <div className={styles.chart}>
                  <svg width="100%" height="100" viewBox="0 0 300 100" style={{ overflow: 'visible' }}>
                    <path
                      d="M 0 80 Q 30 60 60 70 T 120 50 T 180 60 T 240 40 T 300 55"
                      stroke="#0066ff"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 0 90 Q 30 70 60 80 T 120 65 T 180 75 T 240 55 T 300 70"
                      stroke="#4d94ff"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
