import path from 'path'
import { promises as fs } from 'fs'

/**
 * @description get posts from 'db/posts'
 * @returns {Promise}
 */
export default async function getPosts() {
  try {
    const postsDir = path.join(process.cwd(), '/db/posts')

    let fileNames = await fs.readdir(postsDir)
    fileNames = fileNames.filter(fileName => fileName !== 'schema.json')

    return Promise.all(
      fileNames.map(async fileName => {
        const filePath = path.join(postsDir, fileName)

        let content = await fs.readFile(filePath)
        content = JSON.parse(content)

        return content
      })
    )

  } catch(err) {
    throw new Error(err)
  }
}