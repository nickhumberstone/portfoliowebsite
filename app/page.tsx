
import MobileCard from '../app/components/MobileCard'
import MobileFooter from './components/MobileFooter'


export default function Home() {
  return (
    <main className="w-full h-screen bg-primary p-10">
      <div className='phone-screen bg-grey sm:w-32r max-w-1/3 p-1 rounded-3xl m-auto'>
      <MobileCard/>
      <MobileFooter/>
      </div>
    </main>
  )
}
