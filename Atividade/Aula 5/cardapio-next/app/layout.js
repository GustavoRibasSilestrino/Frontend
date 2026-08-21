import './globals.css'

// Metadata: recurso do Next.js para SEO (definido no servidor)
export const metadata = {
  title: 'Café Aroma · Cardápio Digital',
  description:
    'Cardápio digital da cafeteria Café Aroma — projeto 04 da atividade de Frameworks Front-end.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
