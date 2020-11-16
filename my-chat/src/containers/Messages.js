import { connect } from 'react-redux'
import Messages from '../components/Messages/Messages'

export const MessagesList = connect(state => ({
	messages: state.messages
}), {})(Messages)