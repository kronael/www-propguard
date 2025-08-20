interface NavigationLinkProps {
  href: string
  children: React.ReactNode
}

const NavigationLink = ({ href, children }: NavigationLinkProps) => {
  return (
    <a
      href={href}
      className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-200 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
    </a>
  )
}

export default NavigationLink