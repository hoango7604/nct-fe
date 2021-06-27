import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
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

const Home = () => (
  <>
    <Head>
      <title>SSR styled-components with Next.js Starter</title>
    </Head>

    <Container>
      <h1>Hello, world!</h1>

      <p>
        {'Read '}

        <Link href="/posts/first-post">
          <button type="button" className="hidden-button">
            <span className="text-link">this page!</span>
          </button>
        </Link>
      </p>
    </Container>
  </>
)

export default Home
