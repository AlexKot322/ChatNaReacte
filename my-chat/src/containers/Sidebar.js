import { connect } from 'react-redux'
import Sidebar from '../components/SideBar/SideBar'

export const SidebarContainer = connect(state => ({
	users: state.users
}), {})(Sidebar)