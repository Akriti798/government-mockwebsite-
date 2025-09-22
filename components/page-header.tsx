interface PageHeaderProps {
  title: string
  description?: string
  breadcrumb?: Array<{ label: string; href?: string }>
}

export function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div className="bg-muted py-8">
      <div className="container mx-auto px-4">
        {breadcrumb && (
          <nav className="text-sm text-muted-foreground mb-4">
            {breadcrumb.map((item, index) => (
              <span key={index}>
                {index > 0 && " / "}
                {item.href ? (
                  <a href={item.href} className="hover:text-foreground">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-foreground">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
        {description && <p className="text-lg text-muted-foreground">{description}</p>}
      </div>
    </div>
  )
}
