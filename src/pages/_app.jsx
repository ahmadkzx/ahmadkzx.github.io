import '@/assets/sass/app.scss'
import DefaultLayout from '../layouts/default'

export default function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}