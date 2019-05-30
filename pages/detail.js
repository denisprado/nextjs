import React, { Component } from 'react';
import axios from 'axios'
import withAnalytcs from '~/hocs/withAnalytics'


// import { Container } from './styles';

const Detail = ({ user }) => (
    <div>
        <h1>{user.login}</h1>
        <img src={user.avatar_url} width="200px" />
    </div>
)

Detail.getInitialProps = async ({ user }) => {
    const response = await axios.get(
        `https://api.github.com/users/${query.user}`
    )

    return { user: response.data }
}

export default withAnalytcs()(Detail)