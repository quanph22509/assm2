import { Table, Button } from 'antd';

import React, { useEffect, useState } from 'react'
import { deleteId, getAll } from '../api/products';
import { IProduct } from '../models';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getByIdUsers } from '../api/users';

const ListPhone = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState<IProduct[]>([])
    const { id } = useParams();
    useEffect(() => {
        const fetchAll = async () => {
            const { data } = await getAll();
            setProduct(data);
        }
        fetchAll();
        const fzx = async () => {
            const { data } = await getByIdUsers(String(id));

        }
      

    }, [id]);
    const Remove = (id: any) => {
        deleteId(id)
            .then(() => alert('xóa thành công'))
            navigate('/admin')

    }
    // interface DataType {
    //     key: string;
    //     name: string;
    //     money: string;
    //     address: string;
    // }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: ""
        },
        {
            title: 'price',
            dataIndex: 'price',
            key: "price"
        },
        {
            title: 'original_price',
            dataIndex: 'original_price',
            key: "original_price"
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: "description"
        },
        {
            title: 'action',
            render: (item: any) =>
                <>
                    <a href={`/admin/${item.key}/update`}>Sửa</a>
                    <Button  onClick={() => Remove(item.key)}>Xóa</Button>
                    
                </>
                
            
        },
        

    ];

    const data = product.map(item => {
        return {
            key: item._id,
            name: item.name,
            price: item.price,
            original_price: item.original_price,
            description: item.description,
            
        }
    })
    return (
        <>
            <a href="/admin/add">Thêm SP</a>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                pagination={{ pageSize: 4, showQuickJumper: true }}
            />
        </>
        // <div className='h-auto'>
        //     <div className='px-[45px] pt-[30px]'>
        //         <div className='flex justify-between'>
        //             <h2 className='text-xl font-semibold'>Điện thoại</h2>
        //             <Link to={`add`} className='pr-[120px]' ><img src="/icon.png" alt="" /></Link>
        //         </div >
        //         <div className='flex gap-[30px]'>
        //             <div className='mt-[45px] font-bold'>Bộ lọc:</div>
        //             <div className='block'>
        //                 <p className='my-[20px]'>Danh mục sản phẩm</p>
        //                 <select className="w-[400px] h-[40px] outline-none border-2 pl-[15px]" aria-label="Default select example">
        //                     <option selected>Laptop</option>
        //                     <option value="1">One</option>
        //                     <option value="2">Two</option>
        //                     <option value="3">Three</option>
        //                 </select>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='mt-[30px] border-t-2'>
        //         <div className="overflow-x-auto">
        //             <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
        //                 <thead>
        //                     <tr>
        //                         <th
        //                             className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        //                         >
        //                             ID
        //                         </th>
        //                         <th
        //                             className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        //                         >
        //                             Name
        //                         </th>
        //                         <th
        //                             className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        //                         >
        //                             Ảnh
        //                         </th>
        //                         <th
        //                             className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        //                         >
        //                             Giá
        //                         </th>
        //                         <th
        //                             className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        //                         >
        //                             Giá khuyến mãi
        //                         </th>
        //                         <th
        //                             className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        //                         >
        //                             Thao tác
        //                         </th>
        //                     </tr>
        //                 </thead>
        //                 {product.map((product, index) => (
        //                     <tbody className="divide-y divide-gray-200">
        //                         <tr key={index}>
        //                             <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        //                                 {index + 1}
        //                             </td>
        //                             <Link to={`update/${product._id}`}>
        //                                 <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.name}</td>
        //                             </Link>
        //                             <td className="whitespace-nowrap px-4 py-2 text-gray-700"><img className='w-[250px]' src={product.images?.[0].base_url} alt="" /></td>
        //                             <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price}</td>
        //                             <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.original_price}</td>
        //                             <td className="whitespace-nowrap px-4 py-2">
        //                                 <button onClick={()=>Remove(1)}
        //                                     className="btn-xoa inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        //                                 >
        //                                     Xóa
        //                                 </button>
        //                             </td>
        //                         </tr>
        //                     </tbody>
        //                 ))}
        //             </table>
        //         </div>

        //     </div>
        // </div >
    )
}

export default ListPhone