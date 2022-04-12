import type { SVGProps } from 'react'

export default function CloseIcon(props: SVGProps<SVGSVGElement>) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 448 512"
         fill="currentColor"
         {...props}
      >
         <path d="M0 304v-96c0-13.3 10.7-24 24-24h200V80.2c0-21.4 25.8-32.1 41-17L441 239c9.4 9.4 9.4 24.6 0 34L265 448.7c-15.1 15.1-41 4.4-41-17V328H24c-13.3 0-24-10.7-24-24z" />
      </svg>
   )
}
