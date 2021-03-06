import * as React from 'react'
import Image from 'next/image'
import Title from '../../components/Title'
import { allPortfolios, allPages } from '../../.contentlayer/generated'
import type { Portfolio, Page } from '../../.contentlayer/generated'
import ExternalLinkButton from '../../components/Buttons/ExternalLinkButton'
import Modal from '../../components/GalleryModal'
import useVisible from '../../lib/hooks/useVisible'
import Tag from '../../components/Tag'
import { useMDXComponent } from 'next-contentlayer/hooks'
import components from '../../components/MDXComponents'
import HTMLHead from '../../components/HTMLHead'
import { SITENAME } from '../../lib/constants/env'

export async function getStaticPaths() {
   // get slugs from contentlayer
   return {
      paths: allPortfolios.map(p => ({ params: { slug: p.slug } })),
      fallback: false,
   }
}

export async function getStaticProps({ params }) {
   // load post specific information from contentlayer
   const portfolio = allPortfolios.find(project => project.slug === params.slug)

   // load titles and meta info from contentlayer
   const page = allPages.find(
      post => post._raw.flattenedPath === 'pages/portfolio'
   )

   return { props: { page, portfolio } }
}

export default function Project({
   portfolio,
   page,
}: {
   portfolio: Portfolio
   page: Page
}) {
   if (!portfolio.image) {
      throw new Error('An image must be provided for Portfolio content posts')
   }

   const Component = useMDXComponent(portfolio.body.code)
   const [currentGalleryImage, setCurrentGalleryImage] = React.useState(
      portfolio.image
   )
   const { ref, isVisible, setIsVisible } = useVisible(false)

   const meta = {
      title: `${SITENAME} - ${portfolio.project}`,
      keywords: page.pageKeywords,
      image: portfolio.image.split('|').slice(0, 1).join(''),
   }

   const handleImageChange = (e, type) => {
      e.preventDefault()

      const index = portfolio.gallery.indexOf(currentGalleryImage)
      if (type === 'next' && index === portfolio.gallery.length - 1) {
         setCurrentGalleryImage(portfolio.gallery[0])
         return
      }
      if (type === 'next') {
         setCurrentGalleryImage(portfolio.gallery[index + 1])
         return
      }
      if (type === 'prev' && index === 0) {
         setCurrentGalleryImage(portfolio.gallery[portfolio.gallery.length - 1])
         return
      }
      if (type === 'prev') {
         setCurrentGalleryImage(portfolio.gallery[index - 1])
         return
      }
   }

   const openModal = () => {
      setIsVisible(true)
   }
   const closeModal = () => {
      setIsVisible(false)
   }

   return (
      <>
         <HTMLHead pageMeta={meta} />

         <div className="flex flex-row justify-center">
            <div className="w-full max-w-7xl px-4 xl:p-0">
               <section>
                  <Title type="h1">{portfolio.project}</Title>
                  <Modal
                     onClose={closeModal}
                     show={isVisible}
                     alt={portfolio.project}
                     image={currentGalleryImage}
                     handleImageChange={handleImageChange}
                     ref={ref}
                  />
                  <Image
                     className=""
                     alt={`Screenshot of ${portfolio.project} landing page`}
                     src={`/images/portfolio/${portfolio.image.split('|')[0]}`}
                     width={portfolio.image.split('|')[1]}
                     height={portfolio.image.split('|')[2]}
                  />
                  {portfolio.gallery ? (
                     <div className="grid grid-cols-6 mt-6">
                        {portfolio.gallery?.map((image, index) => {
                           return (
                              <div
                                 key={index}
                                 className="flex justify-center items-start m-1 shadow shadow-grey-600 dark:bg-white dark:shadow-grey-900 max-h-52 overflow-hidden"
                              >
                                 <button
                                    type="button"
                                    onClick={() => {
                                       openModal()
                                       setCurrentGalleryImage(image)
                                    }}
                                 >
                                    <Image
                                       className=""
                                       alt={`Screenshot of ${portfolio.project} landing page`}
                                       src={`/images/portfolio/${
                                          image.split('|')[0]
                                       }`}
                                       width={image.split('|')[1]}
                                       height={image.split('|')[2]}
                                    />
                                 </button>
                              </div>
                           )
                        })}
                     </div>
                  ) : (
                     ''
                  )}
                  <div className="flex flex-col max-w-4xl mdx-content">
                     <Component components={{ ...components }} as any />
                  </div>
                  <div className="mt-10 mb-4 flex flex-row flex-wrap">
                     {portfolio.techstack.map((item, index) => {
                        return <Tag key={index} item={item} />
                     })}
                  </div>
                  <div className="inline-flex flex-row relative border-[1px] rounded border-grey-500 p-3 pr-0 mt-5 mb-3">
                     <span className="absolute top-0 bg-white dark:bg-black text-grey-700 dark:text-grey-100 text-sm translate-y-[-50%] px-2">
                        View the Project
                     </span>
                     <ExternalLinkButton
                        label={`${portfolio.project} on GitHub`}
                        link={portfolio.github}
                        name="GitHub"
                     />
                     <ExternalLinkButton
                        label={`${portfolio.project} preview`}
                        link={portfolio.preview}
                        name="Preview"
                     />
                  </div>
               </section>
            </div>
         </div>
      </>
   )
}
