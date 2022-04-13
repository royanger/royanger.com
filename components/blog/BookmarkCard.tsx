import ExternalLinkButton from '../Buttons/ExternalLinkButton'
import Card from './Card'

type BookmarkCard = {
   title: string
   date: string
   type: string
   tags: string[]
   link: string
   children: React.ReactNode
}

const BookmarkCard = ({
   title,
   date,
   type,
   tags,
   link,
   children,
}: BookmarkCard) => {
   return (
      <Card type={type} tags={tags} title={title} date={date}>
         <div className="flex flex-col h-full">
            {children}
            <div className="grow flex items-end">
               <ExternalLinkButton link={link} name="Visit" />
            </div>
         </div>
      </Card>
   )
}
export default BookmarkCard
