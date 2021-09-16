import dayjs from 'dayjs'
import Link from 'next/link'
import ClipboardJS from 'clipboard'
import styles from './index.module.scss'
import PostItem from '@/components/Global/PostItem'

export default function PostPage({ post, recentPosts }) {
  
  const postLink = `${process.env.BASE_URL}/posts/${post.slug}-${post.id}`
  const postDate = dayjs(post.created_at).format('MMM D')
  const shareLinks = {
    facebook: `http://www.facebook.com/sharer/sharer.php?u=${postLink}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${postLink}`
  }

  if (process.browser) new ClipboardJS('#copy-btn')

  return (
    <div className={styles['post-page']}>
      <div className="container">

        <div className={styles['post-page-body']}>
          <div className={styles['post-page-body-header']}>
            <span className={styles['post-page-body-header__publish-date']}><i className="ti-calendar"></i> {postDate}</span>
            <span className={styles['post-page-body-header__read-duration']}><i className="ti-time"></i> {post.read_duration} min</span>
          </div>

          <h2 className={styles['post-page-body__title']}>{post.title}</h2>

          <img src={post.photo} className={styles['post-page-body__photo']} />

          <div className={styles['post-page-body__content']}>{post.content}</div>

          <div className={styles['post-page-body-footer']}>
            <div className={styles['post-page-body-footer-share']}>
              <a href={shareLinks.linkedin} target="_blank" className={styles['post-page-body-footer-share__btn']}>
                <i className="ti-linkedin"></i>
              </a>
              <a href={shareLinks.facebook} target="_blank" className={styles['post-page-body-footer-share__btn']}>
                <i className="ti-facebook"></i>
              </a>
              <button id="copy-btn" className={styles['post-page-body-footer-share__btn']} data-clipboard-text={postLink}>
                <i className="ti-link"></i>
              </button>
            </div>

            <span className={styles['post-page-body-footer__views']}><i className="ti-eye"></i> {post.views}</span>
          </div>
        </div>

        <div className={styles['post-page-related']}>
          <div className={styles['post-page-related-header']}>
            <span className={styles['post-page-related-header__title']}>RECENT POSTS</span>
            <Link href="/posts"><a className={styles['post-page-related-header__seeall']}>See All</a></Link>
          </div>

          <div className="row">
            {
              recentPosts.map(recentPost => (
                <div className="col-12 col-md-6" key={'post-' + recentPost.id}>
                  <PostItem post={recentPost} isWithoutFooter={true} />
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  try {
    // GET POST
    // example: 'test-post-21' 21 is id of post
    const postId = params.slug.split('-').reverse()[0]
    const postEndPoint = process.env.API_URL + '/posts/' + postId
    const postRes = await fetch(postEndPoint)

    if (postRes.status == 404 || postRes.status == 403) return { notFound: true }

    const { data: post } = await postRes.json()

    const recentPostsEndPoint = process.env.API_URL + '/posts?limit=2'
    const recentPostsRes = await fetch(recentPostsEndPoint)
    const { data: recentPosts } = await recentPostsRes.json()

    return {
      props: {
        post,
        recentPosts
      }
    }

  } catch(err) {
    console.error('[POST PAGE]:', err)
  }
}