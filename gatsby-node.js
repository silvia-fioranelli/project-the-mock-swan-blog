/**
 * require.resolve() will give the path only
 * require() will load the module
 */

const getArticles = async () => {
  return require("./src/data/articles.json")
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  // `getArticles` is a function to fetch the data
  const articles = await getArticles()

  articles.sort((a, b) => {
    // newest first
    return new Date(b).getTime() - new Date(a).getTime()
  })

  // Provide articles to index page.
  createPage({
    path: "/",
    component: require.resolve("./src/templates/index.js"),
    context: { articles },
  })

  // Create a page for each article.
  articles.forEach(article => {
    createPage({
      path: `/article-${article.id}`,
      component: require.resolve("./src/templates/article.js"),
      context: { article },
    })
  })
}
