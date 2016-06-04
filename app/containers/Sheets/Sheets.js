import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Paper from 'material-ui/lib/paper'
import Table from 'material-ui/lib/table/table'
import TableHeaderColumn from 'material-ui/lib/table/table-header-column'
import TableRow from 'material-ui/lib/table/table-row'
import TableHeader from 'material-ui/lib/table/table-header'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TableBody from 'material-ui/lib/table/table-body'
import * as Actions from '../../actions/sheets'
import './Sheets.scss'

class Sheets extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount() {
    console.log('this.props:', this.props)
    this.props.getSheets()
  }
  static propTypes = {

  }

  render () {
    const { sheets } = this.props
    const sheetsList = sheets ? sheets.map((sheet, i) => {
      return (
        <TableRow key={ `Sheet-${i}` }>
          <TableRowColumn>{sheet.user_id}</TableRowColumn>
          <TableRowColumn>{this.props.users[sheet.user_id] || 'John Smith'}</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
      )
    }) : null
    return (
      <div className='Sheets'>
        <Paper className='Sheets-Pane' zDepth={1}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              { sheetsList }
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}
//Place state of redux store into props of component
function mapStateToProps (state) {
  console.log('state:', state)
  return {
    router: state.router,
    users: state.users,
    sheets: state.sheets || []
  }
}
//Place action methods into props
function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sheets)
