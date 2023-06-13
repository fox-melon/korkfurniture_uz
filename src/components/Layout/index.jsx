import Footer from '@/components/UI/Footer'
import Navbar from '@/components/UI/Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
