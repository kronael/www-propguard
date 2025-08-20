interface SectionHeaderProps {
  label: string
  title: string
  subtitle: string
}

const SectionHeader = ({ label, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <div className="section-label">{label}</div>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  )
}

export default SectionHeader