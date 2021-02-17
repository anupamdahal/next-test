import { useRouter } from "next/router";
import styles from "../styles/Feeds.module.css"
import { Toolbar } from "../components/Toolbar"

export const Feeds = ({ articles, pageNumber }) => {

  const router = useRouter()

  return (
    <div
      className='page-container'
    >
      <Toolbar />
      
      <div className={styles.main}>
        {
          articles.map((article, index) => (
            <div
              key={index}
              className={styles.post}
            >
              <h1
                onClick={() => (window.location.href = article.url)}
              >
                {article.title}
              </h1>
              
              <p>
                {article.description}
              </p>
              
              {
                !!article.urlToImage &&
                <img
                  src={article.urlToImage}
                />
              }
            </div>
          ))
        }
      </div>

      <div className={styles.paginator}>
        <div
          className={pageNumber === 1 ?
            styles.disabled :
            styles.active}
          onClick={() => {
            if (pageNumber > 1) {
              router.push(`/feeds/${pageNumber - 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
        >
          Previous Page
        </div>

        <div>
          #{pageNumber}
        </div>
        
        <div
          className={pageNumber === 5 ?
            styles.disabled :
            styles.active}
          onClick={() => {
            if (pageNumber < 5) {
              router.push(`/feeds/${pageNumber + 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
        >
          Next Page
        </div>

      </div>
    </div>
  )
}