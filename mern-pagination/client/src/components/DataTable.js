import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'antd'

const DataTable = () => {
  const [gridData, setGridData] = useState([])
  const [modifiedData, setModifiedData] = useState([])
  const [loading, setLoading] = useState(false)

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(50)

  useEffect(() => {
    loadingData()
  }, [])


  const loadingData = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`/api/v1/posts?page=${page}&limit=${limit}`)
      const { data } = res.data
      console.log('data:', data)
      setGridData(data)
      setLoading(false)

    } catch (error) {
      console.log(error)
      setLoading(false)
    }



    // const modifiedData = gridData.map(({ body, ...item }, index) => {
    //   return {
    //     ...item,
    //     key: index,
    //     comment: body
    //   }
    // })
    // setModifiedData(modifiedData)
  }
  const columns = [
    {
      title :"ID",
      dataIndex: "_id",
    },
    {
      title:"title",
      dataIndex: "title",
      align: "center",
      editable: true,
    },
    {
      title:"author",
      dataIndex: "author",
      align: "center",
      editable: true,
    },
    {
      title:"body",
      dataIndex: "body",
      align: "center",
      editable: true,
    },
    {
      title:"Actions",
      dataIndex: "actions",
      align: "center",
    }];
  return (
    <div> 
      <Table
        columns={columns}
        dataSource={gridData}
        loading={loading}
        pagination={true}
        bordered
      />
    </div>
  )
}

export default DataTable  