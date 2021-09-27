export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6151301285d7e6cb520c10e4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-yjabqaud',
                  apiId: '8fec075e-4e92-4758-9f4f-8d62738546e1'
                },
                {
                  buildHookId: '61513012e50a5798316fe495',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5ibajpfj',
                  apiId: '3e87749b-023c-44fe-aecb-6f135da51a12'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peytonbrsmith/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5ibajpfj.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
