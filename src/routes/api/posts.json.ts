import {get as getCategories} from './categories.json';

export const get = async () => {
  const categories = await getCategories();
  const allPostFiles = import.meta.glob('../blog/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(2, -3) // remove .. and .md
      const category = categories.body[metadata.category];

      return {
        meta: metadata,
        path: postPath,
        category,
      }
    })
  )
  
  function getTime (post) {
      return new Date(post.meta.date).getTime()
  }

  const sortedPosts = allPosts.sort((a, b) => {
    return getTime(b) - getTime(a)
  })

  return {
    body: sortedPosts
  }
}