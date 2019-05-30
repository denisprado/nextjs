import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'
import Head from 'next/head'
import withAnalytcs from '~/hocs/withAnalytics'

const Title = styled.h1`
    color:#069;
    font-size:40px;
`

const Home = () => (
    <div>
        <Head><title>Home</title></Head>
        <Title>Hello Word</Title>
        <img src="/static/panda.jpg" width="250px" />
        <Link href="/users">
            <a>Usuários</a>
        </Link>
    </div>
)


export default withAnalytcs()(Home)