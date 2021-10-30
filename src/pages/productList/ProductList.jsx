import './productList.scss'
import { DataGrid } from '@material-ui/data-grid';
import { productRows } from '../../DummyData';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@material-ui/icons';

export default function ProductList() {
    const [data, setData] = useState(productRows)
    const deleteProduct = (id)=>{
        setData(data.filter(item=>item.id!==id));
      }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200,renderCell:(params)=>{
            return (
                <div className="productListItem">
                    <img src={params.row.image} alt="" className="productListImg" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          type: 'number',
          width: 160,
        },
        {
          field:"action",
          headerName:"Action",
          width:150,
          renderCell:(params)=>(
            <>
              <Link to={`/product/${params.row.id}`}>
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline className="productListDelete" onClick={()=>deleteProduct(params.row.id)} />
            </>
          )
        },
      ];
      
    return (
        <div className="productList">
            <DataGrid
            rows={data}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            />
        </div>
    )
}
