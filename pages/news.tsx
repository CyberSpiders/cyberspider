import { GetServerSideProps } from 'next'
import React from 'react'
import Header from '../components/Header'
import Newscomp from '../components/Newscomp'

interface Data {
  id: number
  title: string
  author: string
  points: number
  comments: number
  link: string
}

interface input {
  data: any
}

const Newspage: React.FC<input> = ({ data }) => {
  return (
    <div>
      <Header
        name="CyberSpider | News"
        description="CyberSpider page for HackerNews"
        url="https://cyberspider.vercel.app/news"
      />
      <div>
        <div>
          {data.map((val: any) => (
            <div key={val.id}>
              <Newscomp
                title={val.title}
                author={val.author}
                comments={val.comments}
                link={val.link}
                points={val.points}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://hnapi-production.up.railway.app/api/v1/news')
  const data: Data = await res.json()

  return {
    props: { data },
  }
}

export default Newspage
