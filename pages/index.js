import Link from "next/link"

const user = {
  firstName: 'John',
  lastName: 'Doe'
}

const Home = () => {
  return (
    <div className="Home" >
      <h1>
        Portfolio
      </h1>
      <Link href="/about">Hi</Link>
    </div>
  )
}

export default Home;