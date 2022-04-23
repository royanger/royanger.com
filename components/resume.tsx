import Link from 'next/link'
import { PDFIcon } from './icons'
import Title from './Title'

const Resume = () => {
   return (
      <div className="flex mt-12 max-w-4xl">
         <div className="rounded-xl bg-grey-200 dark:bg-grey-800 ">
            <div className="pt-6 pb-12 px-10 m-2 flex flex-col md:flex-row">
               <div>
                  <Title type="h2">Resume</Title>
                  <div className="text-xl flex flex-row items-center">
                     <Link href="/resume/roy-anger--resume.pdf" passHref>
                        <PDFIcon className="w-6 md:w-10 h-auto mr-2" />
                     </Link>

                     <Link href="/resume/roy-anger--resume.pdf" passHref>
                        <a>
                           Download my{' '}
                           <span className="text-blue-700 dark:text-blue-300 underline decoration-dotted font-semibold">
                              Resume
                           </span>
                        </a>
                     </Link>
                  </div>
                  <div>
                     <p className="mt-4 text-base">
                        Last updated April 15, 2022. Please{' '}
                        <Link href="/contact" passHref>
                           <a className="text-blue-700 dark:text-blue-300 underline decoration-dotted font-semibold">
                              drop me a line
                           </a>
                        </Link>{' '}
                        if you have any questions.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Resume
