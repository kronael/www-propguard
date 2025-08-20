import { Link, Zap, Globe, AlertTriangle, BarChart3 } from 'lucide-react'
import { IconCardData } from './types'

export const PROBLEMS_DATA: IconCardData[] = [
  {
    icon: Link,
    title: 'Cross-prop-firm hedging',
    description: 'Detect coordinated hedging across multiple brands and shells that traditional monitoring misses.',
  },
  {
    icon: Zap,
    title: 'Latency/quote arbitrage',
    description: 'Identify exploiters of feed delay and toxic flow before they drain your book.',
  },
  {
    icon: Globe,
    title: 'Account farming & copy clusters',
    description: 'Graph-level clustering to catch networks, not just individual accounts.',
  },
  {
    icon: AlertTriangle,
    title: 'False positives & rigid rules',
    description: 'Replace blunt rules with adaptive scoring to avoid punishing good traders.',
  },
  {
    icon: BarChart3,
    title: 'Noisy dashboards',
    description: 'Actionable, prioritized alerts—no more spreadsheet wrangling.',
  },
]