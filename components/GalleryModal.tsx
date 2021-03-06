import * as React from 'react'
import ReactDOM from 'react-dom'
import Image from 'next/image'
import { CloseIcon, NextIcon, PrevIcon } from './icons'

type Modal = {
   show: Function
   onClose: React.MouseEventHandler<HTMLAnchorElement>
   image: string
   alt: string
   handleImageChange: Function
}

const GalleryModal = React.forwardRef<HTMLDivElement, Modal>(
   ({ show, onClose, image, alt, handleImageChange }: Modal, ref) => {
      const [isBrowser, setIsBrowser] = React.useState(false)

      React.useEffect(() => {
         setIsBrowser(true)
      }, [show])

      const modalContent = show ? (
         <div
            className={`fixed top-0 left-0 right-0 bg-white bg-opacity-50 h-screen flex justify-center items-center w-screen`}
         >
            <div
               ref={ref}
               className=" bg-white m-2 p-2 md:p-6 relative shadow shadow-grey-600 "
            >
               <a
                  className="absolute top-0 right-0 bg-white text-black py-1 px-2 rounded-bl-lg z-30"
                  href="#"
                  onClick={onClose}
               >
                  <CloseIcon className="w-5 h-auto" />
               </a>
               <div className=" max-w-7xl relative">
                  <div className="absolute left-0 top-1/2 bg-white dark:text-black bg-opacity-80  rounded-r-xl translate-y-[-50%] z-20">
                     <a
                        className="block py-16 md:px-2"
                        href="#"
                        onClick={e => handleImageChange(e, 'prev')}
                     >
                        <PrevIcon className="w-6" />
                     </a>
                  </div>
                  <Image
                     className=""
                     alt={`Screenshot of ${alt}`}
                     src={`/images/portfolio/${image.split('|')[0]}`}
                     width={image.split('|')[1]}
                     height={image.split('|')[2]}
                  />
                  <div className="absolute right-0 top-1/2 bg-white dark:text-black bg-opacity-80  rounded-l-xl  translate-y-[-50%] z-20">
                     <a
                        className="block py-16 md:px-2 "
                        href="#"
                        onClick={e => handleImageChange(e, 'next')}
                     >
                        <NextIcon className="w-6" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      ) : null

      if (isBrowser && modalContent) {
         const modalEl = document.getElementById('#modal-root') as HTMLElement
         return ReactDOM.createPortal(modalContent, modalEl)
      }
      return null
   }
)

GalleryModal.displayName = 'GalleryModal'

export default GalleryModal
