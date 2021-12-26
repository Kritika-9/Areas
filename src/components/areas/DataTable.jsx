import React, { useState, useEffect} from "react";
import axios from 'axios';
import MaterialTable from 'material-table'
import "./areas.css"

const DataTable=()=>{
  const[tableData, setTableData] = useState([])

  useEffect(() => {

    axios.get('https://api.milkvilla.in/api/areas/openact/all')
    .then((res) => setTableData(res.data.data))

  })
  const columns = [
    {
      title:'City',field:'city'
    },

    {
      title:'Active',field:'active'
    },

    {
      title:'_ID',field:'_id'
    },

    {
      title:'Name',field:'name'
    },

    {
      title:'Detail',field:'detail'
    }
  ]
  return(
    <div className="area">
      <h2 className="title">Areas</h2>
      <MaterialTable title="Material Table"
       data={tableData}
       columns={columns}
       options={{
         search:true,
         paging:false,
         exportButton:true
       }}
      />
    </div>
  )
}

export default DataTable;