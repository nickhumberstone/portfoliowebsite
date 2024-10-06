import Link from 'next/link'

function NavLink({ href, title }) {
    return (
        <div className='hover:text-red-400'>
            <Link href={href} className="block py-2 pl-3 pr-3 sm:text-xl">{title}</Link>
        </div>
    )
}


export default NavLink
