import { GetServerSideProps } from 'next'
import React from 'react'
import Newscomp from '../components/Newscomp'

interface Data {
  _id: string
  title: string
  desc: string
  __v: number
}

const Newspage = ({ data }) => {
  return (
    <div>
      <div>
        <div>
          {data.map((val) => (
            <div key={val._id}>
              <Newscomp id={val._id} title={val.title} desc={val.desc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('http://hcdbapi.herokuapp.com/s1/all')
  const data: Data = await res.json()

  return {
    props: { data },
  }
}

export default Newspage
