import PropTypes from 'prop-types'

import theme from '../styles/theme'

import Grid from './grid'
import Millesime from './millesime'

const Millesimes = ({millesimes, getUrl}) => (
  <Grid columns={3}>
    {millesimes.map(millesime => (
      <div key={millesime.date}>
        {millesime.latest ?
          <div className='latest line'><span>Dernier millésime</span></div> :
          <div className='latest' />
        }
        <Millesime
          date={millesime.date}
          path={millesime.path}
          formats={millesime.formats}
          getUrl={getUrl} />
      </div>
    ))}
    <style jsx>{`
      .latest {
        padding: 1.5em;
      }

      .latest.line {
        padding: 0.5em;
        text-align: center;
        color: ${theme.primary};

        border-bottom: 1px solid ${theme.primary};
        line-height:0.1em;
        margin: 10px 0 20px;
      }

      .latest span {
        background: ${theme.backgroundGrey};
        padding: 0 10px;
      }
    `}</style>
  </Grid>
)

Millesimes.propTypes = {
  millesimes: PropTypes.array.isRequired,
  getUrl: PropTypes.func.isRequired
}

export default Millesimes
