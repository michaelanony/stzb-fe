import React,{useState,useEffect} from 'react'
import {UserInfo} from "../../Types/Types"
import {apiGetMembers} from "../../Api/services"
import { Table } from 'antd';
import './TableInfo.scss'
const TableInfo: React.FC<{}> = () => {
    const [userList,setUserList] = useState<UserInfo[]>([])
    useEffect(() => {
        apiGetMembers().then(res => {
            console.log(res)
            setUserList(res.data)
        })
    }, [])
    const columns=[
        {
            title: '成员姓名',
            width: 100,
            dataIndex: 'name',
            key: 'name',
   
          },
        {
            title: '所在团名',
            width: 100,
            dataIndex: 'group',
            key: 'group',
        },
        {
            title: '目前积分',
            width: 100,
            dataIndex: 'score',
            key: 'score',
        },

    ]
    return (
        <div>
          <Table columns={columns} dataSource={userList} scroll={{ x: 250, y: 300 }} />,
        </div >
    )
}

export default TableInfo;