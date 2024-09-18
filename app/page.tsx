import MobileCard from '../app/components/MobileCard'
import MobileFooter from './components/MobileFooter'

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col bg-primary">
      <div className='phone-screen bg-grey w-32r h-48r p-1 rounded-lg m-auto'>
      <MobileCard/>
      </div>
      {/* <MobileFooter/> */}
    </main>
  )
}
