import Link from 'next/link'

function NavLink({ href, title }) {
    return (
        <div className='hover:bg-slate-300'>
            <Link href={href} className="block py-2 pl-3 pr-4 sm:text-xl rounded">{title}</Link>
        </div>
    )
}


export default NavLink
