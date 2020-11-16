import { connect } from 'react-redux'
import Input from '../components/Input/Input'
import { addMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author))
  }
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(Input)