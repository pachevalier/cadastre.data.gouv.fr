import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'next/router'

import piwik from '../lib/piwik'

import Meta from '../components/meta'
import Header from '../components/header'
import Footer from '../components/footer'

import theme from '../styles/theme'

class Layout extends React.Component {
  componentDidMount() {
    const {router} = this.props

    setTimeout(() => {
      piwik.track(router)
    }, 400)
  }

  render() {
    const {children} = this.props

    return (
      <div>
        <Meta />
        <Header />
        <main>
          { children }
        </main>
        <Footer />
        <style jsx>{`
          div {
             display: flex;
             flex-direction: column;
             min-height: 100vh;
             background-color: ${theme.colors.white};
           }

           main {
             flex: 1;
           }
        `}</style>
      </div>
    )
  }
}

Layout.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.node
}

Layout.defaultProps = {
  children: null
}

export default withRouter(Layout)
