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
    "https://api.quickweb.uz/fc8bf8ec-e396-4f61-8639-54028ced2255"
  );

  const projects = res.data?.data;

  console.log(projects)

  return {
    props: {
      projects,
    },
  };

}
