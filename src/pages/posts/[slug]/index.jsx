import path from 'path'
import dayjs from 'dayjs'
import Head from 'next/head'
import Link from 'next/link'
import { promises as fs } from 'fs'
import ClipboardJS from 'clipboard'
import styles from './index.module.scss'
import ReactMarkdown from 'react-markdown'
import getPosts from '@/assets/utils/getPosts'
import PostItem from '@/components/Global/PostItem'

export default function PostPage({ post, recentPosts }) {
  
  if (!post) return <span>Loading...</span>

  const postLink = `${process.env.BASE_URL}/posts/${post.slug}`
  const postDate = dayjs(post.created_at).format('MMM D')
  const shareLinks = {
    facebook: `http://www.facebook.com/sharer/sharer.php?u=${postLink}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${postLink}`
  }

  if (process.browser) new ClipboardJS('#copy-btn')

  return (
    <>
      <Head>
        <title>Ahmad Karimzade - {post.title}</title>
        <meta name="description" content={post.summary}></meta>
      </Head>

      <div className={styles['post-page']}>
        <div className="container">

          <div className={styles['post-page-body']}>
            <div className={styles['post-page-body-header']}>
              <span className={styles['post-page-body-header__publish-date']}><i className="ti-calendar"></i> {postDate}</span>
              <span className={styles['post-page-body-header__read-duration']}><i className="ti-time"></i> {post.read_duration} min</span>
            </div>

            <h2 className={styles['post-page-body__title']}>{post.title}</h2>

            <img src={post.photo} className={styles['post-page-body__photo']} />

            <div className={styles['post-page-body__content']}>
              <ReactMarkdown>
                {post.content}
              </ReactMarkdown>
            </div>

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
                    <PostItem post={recentPost} />
                  </div>
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  try {
    const posts = await getPosts()

    const paths = posts.map(post => ({
      params: {
        slug: post.slug
      }
    }))

    return {
      paths,
      fallback: false
    }

  } catch(err) {
    console.error('[GET POSTS STATIC PATHS]:', err)
  }
}

export async function getStaticProps({ params }) {
  try {

    // GET THIS POST
    const postSlug = params.slug

    const postsDir = path.join(process.cwd(), '/db/posts')
    const postFilePath = path.join(postsDir, `${postSlug}.json`)

    let post = await fs.readFile(postFilePath, 'utf-8')
    post = JSON.parse(post)

    // GET THIS POST CONTENT
    const contentPath = path.join(process.cwd(), `/db/contents/${postSlug}.md`)
    post.content = await fs.readFile(contentPath, 'utf-8')


    // GET OTHER POSTS
    const posts = await getPosts()
    const recentPosts = [posts[posts.length - 1], posts[posts.length - 2]].filter(Boolean) // get last and last - 1 post

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