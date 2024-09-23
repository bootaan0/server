import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "../../constant"


const Navbar = () => {
  return (
    <nav className="flex justify-between max-container padding-container relative z-20 py-5">
      <Link href='/'>
      <Image 
      src="/hilink-logo.svg"
      width={74}
      height={29}
      alt="logo"
      />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key}>
        {link.label}        
        </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
