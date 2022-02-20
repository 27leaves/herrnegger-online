export const get = async () => {
  const allPostFiles = import.meta.glob('../projects/*/index.md')
  const iterableProjectFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterableProjectFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(2, -8) // remove .. and .md

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )
  
  function getTime (post) {
      return new Date(post.meta.started_date).getTime()
  }

  const sortedPosts = allPosts.sort((a, b) => {
    return getTime(b) - getTime(a)
  })

  return {
    body: sortedPosts
  }
}