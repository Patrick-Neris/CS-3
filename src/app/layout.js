import { Toaster } from 'react-hot-toast'
import './global.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contas SANOFI',
  description: 'Contas cadastradas na SANOFI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <Toaster position='bottom-right' />
      </body>
    </html>
  )
}
