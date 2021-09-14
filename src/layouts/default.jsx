import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}