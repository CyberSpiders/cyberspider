import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bottom-0 w-full bg-slate-800">
      <div className="flex justify-center px-3 py-6">
        <div>
          <h1>
            Copyrights @{' '}
            <Link href="https://github.com/CyberSpiders">
              <a className="underline underline-offset-4">CyberSpiders</a>
            </Link>{' '}
            2022
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
