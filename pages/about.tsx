import * as React from 'react'
import Head from 'next/head'
// import sanityClient from '../lib/sanity/client'

// import components
import AboutSection from '../components/About/AboutSection'
import Title from '../components/Title'

const About = () => {
   return (
      <>
         <Head>
            <title>Roy Anger - About Roy</title>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
         </Head>

         <article>
            <div>
               <Title type="h1">About Me</Title>
               {/* {posts.map(post => {
                  return <AboutSection key={post._id} content={post} />
               })} */}
            </div>
         </article>
      </>
   )
}

// export const getStaticProps = async () => {
//    const posts = await sanityClient.fetch(`*[_type == "about"] | order(order){
//       _id,
//       "title": section,
//       "images": images[]{ _key, alt, "src": asset->url},
//       description
//    }`)

//    return { props: { posts } }
// }

export default About