import { Main } from '@/components/Pages/Main'
import SEO from '@/components/SEO'

export default function Home({ data }) {
  return (
    <>
      <SEO />
      <Main />
    </>
  )
}

// export async function getServerSideProps(context) {
//   const urls = ['/posts']
//   const data = await fetchMultipleUrls(urls)

//   return {
//     props: {
//       data
//     }
//   }
// }
