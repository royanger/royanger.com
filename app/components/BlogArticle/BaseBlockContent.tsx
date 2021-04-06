import * as React from 'react'
import client from '../../lib/sanity/client'
import BlockContent from '@sanity/block-content-to-react'
import serializers from '../../lib/serializer'
// import blockContent from '../../../sanity/schemas/blockContent'

interface BaseBlockContent {
   blocks: string
   className: string
   imageOptions?: {
      w: number
      h: number
      fit: string
   }
}

const BaseBlockContent = ({ blocks, className }: BaseBlockContent) => (
   <BlockContent
      blocks={blocks}
      className={className}
      serializers={serializers}
      renderContainerOnSingleChild="true"
      {...client}
   />
)

export default BaseBlockContent
