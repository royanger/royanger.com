import * as React from 'react'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import Title from '../components/Title'
import { allPages } from '../.contentlayer/generated'

// load just one page from contentlayer
export async function getStaticProps() {
   const page = allPages.find(
      post => post._raw.flattenedPath === 'pages/skills'
   )
   return {
      props: {
         page,
      },
   }
}

const Skills = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
   return (
      <>
         <Head>
            <title>{page.pageTitle}</title>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <meta name="keywords" content={page.pageKeywords} />
         </Head>

         <div className="flex flex-row justify-center">
            <div className="w-full max-w-7xl">
               <article>
                  <Title type="h1">{page.title}</Title>
                  <Title type="h2">{page.subTitle}</Title>
                  <div
                     className="page-content"
                     dangerouslySetInnerHTML={{ __html: page.body.html }}
                  />
               </article>
            </div>

            <div></div>
         </div>
      </>
   )
}

export default Skills