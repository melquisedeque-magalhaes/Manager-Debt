import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ContextModalProvider } from '../context/ContextModal'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextModalProvider>
      <Component {...pageProps} />
    </ContextModalProvider>
  )
}
export default MyApp
