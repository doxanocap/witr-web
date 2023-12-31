import type { AppProps } from 'next/app'
// import { AuthProvider } from '../providers/authProvider'
import SEO from '../components/Seo'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <AuthProvider>
    <div>
      <SEO />
      <Component {...pageProps} />
    </div>
    // </AuthProvider>
  )
}
