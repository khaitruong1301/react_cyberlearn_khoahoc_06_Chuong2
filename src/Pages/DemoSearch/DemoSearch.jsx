import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

export default function DemoSearch(props) {

    const [searchParams, setSearchParams] = useSearchParams();
    const [arrProduct, setArrProduct] = useState([]);
    const keywordRef = useRef('');
    const handleChange = (e) => {
        const { value, id } = e.target;
        keywordRef.current = value;
    }
    console.log('key', searchParams.get('keyword'));
    useEffect(() => {
        (async () => {

            let keyword = ''; //với trang /search
            if (searchParams.get('keyword') != null) { // /search?keyword=123
                keyword = searchParams.get('keyword');
            }
            if (keyword !== '') {
                try {
                    const result = await axios({
                        url: 'http://svcy.myclass.vn/api/Product/SearchByName?name=' + keyword,
                        method: 'GET'
                    });

                    //Lấy dữ liệu thành công setState
                    setArrProduct(result.data);

                } catch (err) {
                    setArrProduct([]);
                    alert('Không tìm thấy sản phẩm !');
                }

            }
        })();
    }, [keywordRef.current]);



    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ keyword: keywordRef.current });

    }


    return (
        <div className='container'>
            <form className='frm' onSubmit={handleSubmit}>
                <h3>Search</h3>
                <div className='form-group'>
                    <div className='input-group'>
                        <input className='input-group-prepend form-control' id="keyword" name="keyword" onChange={handleChange} />
                        <button className='btn btn-success' type='submit'>Search</button>
                    </div>
                </div>
            </form>
            <div className='result mt-2'>
                <p>search result !</p>
                <div className='row'>
                    {arrProduct.map((item, index) => {
                        return <div className='col-4' key={index}>
                            <div className='card'>
                                <img src={item.img} alt='...' />
                                <div className='card-body'>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <button className='btn btn-success'>View detail</button>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}
