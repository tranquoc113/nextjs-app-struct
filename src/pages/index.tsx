import Image from 'next/image'

function HomePage({prop}) {

    return <div>
      <main>
          <div className="demo">ok</div>

          <Image
              alt="Next.js logo"
              src="/img/an.png"
              width={1200}
              height={400}
          />


      </main>

    Welcome to Next.js !</div>
}

export default HomePage
