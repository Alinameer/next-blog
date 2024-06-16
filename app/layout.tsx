import './globals.css'
import NavBar from './componets/NavBar'
import MyProfilePic from './componets/MyProfilePic'

export const metadata = {
  title: 'Ali Nameer',
  description: 'Created by me :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <NavBar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
