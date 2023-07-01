import { Main } from '@/components/Pages/Main'
import SEO from '@/components/SEO'
import axios from 'axios';

export default function Home({ projects }) {
  return (
    <>
      <SEO />
      <Main projects={projects} />
    </>
  )
}



export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await axios.get(
    "https://api.quickweb.uz/dd51e486-bb03-430b-95f2-75429accacff"
  );

  const projects = res.data?.data;

  return {
    props: {
      projects,
    },
  };

}
