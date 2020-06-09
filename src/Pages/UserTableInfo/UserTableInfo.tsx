import React from 'react'

import { RouteComponentProps } from "react-router"
import { withRouter } from "react-router-dom"
import TableInfo from "../../Components/TableInfo/TableInfo"
import './UserTableInfo.scss'

const Index: React.FC<RouteComponentProps> = () => {
    return (
            <div><TableInfo/></div>
    )
}

export default withRouter(Index);