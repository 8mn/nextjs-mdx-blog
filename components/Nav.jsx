import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="">
      <Link href="/" passHref>
        <h2 className="pointer">Ebenezer Don</h2>
      </Link>

      <Link href="/bio" passHref>
        <p className="">Bio</p>
      </Link>
    </nav>
  )
}

export default Nav
