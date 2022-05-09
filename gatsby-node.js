const path = require("path")
const { paginate } = require(`gatsby-awesome-pagination`);
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
  query {    
      Pages : allPrismicPage {
        edges {
          node {
            id
            uid
          }
        }
      }
      Blogs: allPrismicPost {
        edges {
          node {
            uid
            id
          }
        }
      }
      CityPages: allPrismicCityLandingPages {
        edges {
          node {
            uid
          }
        }
      }
  }
`)
const DEFAULT_BLOG_BASE_PATH = '/blog';
const DEFAULT_BLOG_POSTS_PER_PAGE = 60;

const basePath = DEFAULT_BLOG_BASE_PATH;
const blogs = data.Blogs.edges;

const templatesDir = path.resolve(__dirname, './src/templates');
const postsPerPage = DEFAULT_BLOG_POSTS_PER_PAGE; 
    paginate({
      createPage,
      items: blogs,
      itemsPerPage: postsPerPage,
      itemsPerFirstPage: postsPerPage + 2,
      pathPrefix: basePath,
      component: path.resolve(templatesDir, 'BlogListTemplate.js'),
      context: {
        basePath,
        paginationPath: basePath
      },
    });

    blogs.forEach(({ node }) => {     
      let blogURL = `${basePath}/${node.uid}`;
  
      createPage({
        path: blogURL,
        component: path.resolve(templatesDir, 'BlogTemplate.js'),
        context: {
          uid: node.uid,
          basePath,
        },
      });
    })

  data.Pages.edges.forEach(({ node }) => {  
    createPage({
      path: `${node.uid}/`,
      component: path.resolve("./src/templates/page-template.js"),
      context: {
        id:node.uid
      },
    })
  })

  data.CityPages.edges.forEach(({ node }) => {    
    createPage({
      path: `${node.uid}/`,
      component: path.resolve("./src/templates/CityPageTemplate.js"),
      context: {
        id:node.uid
      },
    })
  })
}