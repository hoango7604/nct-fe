import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import Icon from '../components/base/Icon'
import {
  BigTitle01,
  Body01,
  Heading01,
} from '../components/base/Typo'
import AttendantForm from '../components/AttendantForm'

const Container = styled.div`
  width: 980px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 96px;
  margin-left: auto;
  margin-right: auto;

  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 64px;
  }

  .title-icon {
    margin-right: 16px;
  }

  .description {
    margin-bottom: 48px;
  }

  .note {
    margin-bottom: 8px;
  }

  .note-item:not(:last-child) {
    margin-bottom: 4px;
  }

  .attended-title {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }

  .attended-content {
    display: flex;
    justify-content: center;
  }
`

const Home = () => {
  const attendantClassName = 'Example class name'
  const studentName = 'Example student name'
  const isAttended = true

  return (
    <>
      <Head>
        <title>Website điểm danh môn tin học - Trường THPT Nguyễn Công Trứ</title>
      </Head>

      <Container className="attendant-form-container">
        <div className="title-container">
          <Icon
            className="title-icon"
            iconName="fact_check"
            iconType="rounded"
            iconClass="color--positive"
            size="xxl"
          />

          <BigTitle01
            as="h1"
            className="title color--positive"
          >
            {`Điểm danh lớp ${attendantClassName}`}
          </BigTitle01>
        </div>

        {isAttended
          ? (
            <>
              <Heading01 className="attended-title">
                {`Bạn đã điểm danh cho ca này với tên ${studentName}`}
              </Heading01>

              <Body01 className="attended-content">
                Nếu có sai sót, vui lòng liên hệ giáo viên đứng lớp để được hỗ trợ.
              </Body01>
            </>
          )
          : (
            <AttendantForm />
          )
        }
      </Container>
    </>
  )
}

export default Home
