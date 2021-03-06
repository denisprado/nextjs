import React, { Component } from 'react';
import { loadGetInitialProps } from 'next-server/dist/lib/utils'
import ReactGA from 'react-ga'

export default () => Composed =>
    class extends Component {
        static getInitialProps(ctx) {
            return loadGetInitialProps(Composed, ctx)
        }

        componentDidMount() {
            ReactGA.initialize('ID_analYTCS');
            ReactGA.pageview(window.location.pathname)
            console.log('Page View')
        }

        render() {
            return <Composed {...this.props} />

        }
    }