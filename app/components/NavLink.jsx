import Link from 'next/link'

function NavLink({ href, title }) {
    return (
        <Link href={href} className="block py-2 pl-3 pr-4 sm:text-xl rounded">{title}</Link>
    )
}


export default NavLink
