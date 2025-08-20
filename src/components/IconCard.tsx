import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface IconCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const IconCard = ({ icon: Icon, title, description }: IconCardProps) => {
  return (
    <div className="group bg-primary border border-border rounded-xl p-8 transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:scale-[1.02] hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(0,245,255,0.15)] hover:bg-gradient-to-b hover:from-accent/[0.02] hover:to-primary">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
      
      <div className="mb-5">
        <Icon className="w-8 h-8 text-accent" />
      </div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default IconCard