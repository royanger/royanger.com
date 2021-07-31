import * as React from 'react'
import Title from '../Title'

const BlogIndexHeader = () => {
   return (
      <div className="index-header">
         <Title type="h1">Articles</Title>
         <p className="text-xlarge">
            My articles are a mix of things I've thought about, solutions to
            problems I've dealt with and explanations of code I've worked on.
         </p>
      </div>
   )
}

export default BlogIndexHeader
