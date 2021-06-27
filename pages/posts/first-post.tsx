import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;

  .hidden-button {
    padding: 0;
    border: 0;
    margin: 0;
    background-color: unset;
  }

  .text-link {
    color: blue;
    font-size: 16px;
    text-decoration: underline;
  }
`

const FirstPost = () => (
  <>
    <Head>
      <title>First Post</title>
    </Head>

    <Container>
      <h1>First Post</h1>

      <p>
        <Link href="/">
          <button type="button" className="hidden-button">
            <span className="text-link">Back to home</span>
          </button>
        </Link>
      </p>

      <Image
        src="/images/profile.jpeg"
        alt="profile-image"
        width={144}
        height={144}
      />
    </Container>
  </>
)

export default FirstPost
