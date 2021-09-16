import styles from './index.module.scss'
import PostItem from '@/components/Global/PostItem'
import SpecialPost from '@/components/Home/SpecialPost'

export default function HomePage({ posts, specialPost }) {
  return (
    <div className={styles['home']}>
      <div className="container">
        <SpecialPost post={specialPost} />

        <span className={styles['home__section-title']}>LATEST POSTS</span>

        <div className="row">
          {
            posts.map(post => (
              <div className="col-12 col-md-6" key={'post-' + post.id}><PostItem post={post} /></div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const postsEndPoint = process.env.API_URL + '/posts'
    const postsRes = await fetch(postsEndPoint)
    const { data: posts } = await postsRes.json()

    const specialPostEndPoint = process.env.API_URL + '/special-post'
    const specialPostRes = await fetch(specialPostEndPoint)
    const { data: specialPost } = await specialPostRes.json()

    return {
      props: {
        posts,
        specialPost
      }
    }

  } catch(err) {
    console.error('[GET POSTS IN HOME PAGE]:', err)
  }
}