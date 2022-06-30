import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios'
export default function Search(props) {
    const keywordRef = useRef('');
    const [arrProduct, setArrProduct] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();

    console.log('keyword', searchParams.get('keyword'));
    useEffect(() => {
        (async () => {
            let keyword = '';
            if (searchParams.get('keyword')) {
                keyword = searchParams.get('keyword');
            }
            if (keyword != '') {
                try {
                    const result = await axios({
                        url: 'http://svcy.myclass.vn/api/Product/SearchByName?name=' + keyword,
                        method: 'GET'
                    });
                    console.log(result);
                    setArrProduct(result.data);

                } catch (err) {
                    console.log(err);
                    setArrProduct([]);
                    alert(err.response?.data.content);
                }
            }
        })();

    }, [keywordRef.current])
    const handleChange = (e) => {
        keywordRef.current = e.target.value;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // let params = serializeFormQuery(event.target.value);
        setSearchParams({ keyword: keywordRef.current });
    }

    return (
        <form className='container' onSubmit={handleSubmit}>
            <h3>Search</h3>
            <div className="form-group">
                <p>Nhập từ khoá</p>
                <div className='input-group-prepend'>
                    <input className='form-control' id="keywordRef" onChange={handleChange} />
                    <button className='btn bg-dark text-white'>Search</button>
                </div>
            </div>
            <div className='mt-2'>
                <p>Kết quả tìm kiếm</p>
                <div className='row'>
                    {arrProduct.map((item, index) => {
                        return <div className='col-4' key={index}>
                            <div className='card'>
                                <img src={item.img} alt={'...'} />
                            </div>
                            <div className='card-body'>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <button className='btn btn-success'>View detail</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </form>
    )
}
