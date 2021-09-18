const fs = require('fs')
const path = require('path')

async function getFiles(dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true })

  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name)
      return dirent.isDirectory() ? getFiles(res) : res
    })
  )

  return Array.prototype.concat(...files)
}

async function fixAssetsPaths() {
  const dir = path.join(process.cwd(), '/docs')
  
  let filePaths = await getFiles(dir)
  filePaths = filePaths.filter(filename => /^.+\.(html|js|css)$/.test(filename))

  filePaths.map(filepath => {
    let fileContent = fs.readFileSync(filepath, 'utf-8')

    fileContent = fileContent.replace(/\/_next\/static\/media\//g, '../media/')

    fileContent = fileContent.replace(/\/_next\//g, './_next/')

    fs.writeFileSync(filepath, fileContent, { encoding: 'utf-8' })
  })

  console.log('✅ Paths Fixed')
}

fixAssetsPaths()