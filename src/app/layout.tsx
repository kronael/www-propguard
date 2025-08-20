import type { Metadata } from 'next'
import localFont from 'next/font/local'
import GridShineEffect from '@/components/GridShineEffect'
import './globals.css'

const allianceNo1 = localFont({
  src: [
    {
      path: '../../public/fonts/AllianceNo1-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AllianceNo1-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AllianceNo1-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AllianceNo1-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AllianceNo1-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-alliance',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'propGuard_ — Outsourced Risk Management for Prop Firms',
  description: 'Detect arbitragers, cross-firm hedging, and abusive patterns. Best-in-class dashboards and data-driven decisions to protect payouts and profit.',
  keywords: 'prop trading, risk management, arbitrage detection, trading analytics',
  authors: [{ name: 'propGuard_' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={allianceNo1.variable}>
      <body className={allianceNo1.className}>
        <GridShineEffect />
        {children}
      </body>
    </html>
  )
}
