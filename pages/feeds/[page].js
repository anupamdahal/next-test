import { Feeds } from "../../components/Feeds"

export const Feed = ({ articles, pageNumber }) => {
  // console.log(articles);
  return (
    <Feeds
      articles={articles}
      pageNumber={pageNumber}
    />
  )
}

export const getServerSideProps = async ({ params }) => {
  const pageNumber = params.page

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1
      }
    }
  }

  const newsSourceUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`
  const header = {
    headers: {
      Authorization: `Bearer ${process.env.NEWS_API_KEY}`
    }
  }

  const { articles } = await fetch(newsSourceUrl, header)
    .then(res => res.json());

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber)
    }
  }
}

export default Feed