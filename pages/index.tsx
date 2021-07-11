import React from 'react'
import Head from 'next/head'
import AttendantForm from '../components/AttendantForm'

const Home = () => {
  const name = 'Example'
  return (
    <>
      <Head>
        <title>Website điểm danh môn tin học - Trường THPT Nguyễn Công Trứ</title>
      </Head>

      <AttendantForm
        name={name}
      />
    </>
  )
}

export default Home
