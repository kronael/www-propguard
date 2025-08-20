'use client'

import { motion } from 'framer-motion'

const Dashboard = () => {
  return (
    <section className="py-24 bg-primary border-b border-border">
      <div className="section-container">
        <div className="section-header">
          <div className="section-label">Dashboards & Insights</div>
          <h2 className="section-title">Best-in-class visibility into your risk</h2>
          <p className="section-subtitle">
            Latency maps, symbol heatmaps, edge decay, cohort PnL, payout exposures.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-b from-primary-surface to-primary-surface-light border border-border rounded-xl p-6 min-h-[400px] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          {/* Window controls */}
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main chart area */}
            <div className="lg:col-span-2 bg-primary border border-border rounded-lg h-[300px] flex items-center justify-center text-text-muted">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent/20 to-accent-green/20 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-green rounded opacity-50" />
                </div>
                <span>Risk Detection Graph Visualization</span>
              </div>
            </div>

            {/* Metrics sidebar */}
            <div className="space-y-4">
              <div className="bg-primary border border-border rounded-lg p-5">
                <div className="text-xs text-text-muted uppercase tracking-wider mb-2">Toxic Flow</div>
                <div className="text-3xl font-black text-accent-green">-23%</div>
              </div>

              <div className="bg-primary border border-border rounded-lg p-5">
                <div className="text-xs text-text-muted uppercase tracking-wider mb-2">False Positives</div>
                <div className="text-3xl font-black text-accent-green">-67%</div>
              </div>

              <div className="bg-primary border border-border rounded-lg p-5">
                <div className="text-xs text-text-muted uppercase tracking-wider mb-2">Avg Investigation</div>
                <div className="text-3xl font-black text-accent-green">2m</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Dashboard
