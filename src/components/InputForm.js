import React, { useState } from 'react';
import ApiService from '../service/apiService/ApiService.js';

const InputForm = () => {
    const initialMaemulState = {
        name: '',
        brand: '',
        price: '',
        isUsed: '',
        details: '',
        usedDesc: '',
        inPerson: '',
        canPost: ''
    }

    const [maemul, setMaemul] = useState(initialMaemulState);
    const [notice, setNotice] = useState('');

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setMaemul({
            ...maemul,
            [name]: value
        });
    }

    const createNotice = () => {
        var data = {
            name: maemul.name,
            brand: maemul.brand,
            price: maemul.price,
            isUsed: maemul.isUsed,
            details: maemul.details,
            usedDesc: maemul.usedDesc,
            inPerson: maemul.inPerson,
            canPost: maemul.canPost
        }

        ApiService.createNotice(data)
        .then(res => {
            console.log(res);
            setNotice(res.data);
        })
    }

    return(
        <div>
            <div className='inputForm'>
                <input value={maemul.name} 
                        name="name" 
                        placeholder="제품명" 
                        onChange={handleInputChange} />
                <input value={maemul.brand}
                        name="brand" 
                        placeholder="브랜드" 
                        onChange ={handleInputChange} />
                <input value={maemul.price}
                        name="price"
                        placeholder="가격"
                        onChange={handleInputChange} />
                <input value={maemul.isUsed}
                        name="isUsed"
                        placeholder="중고 여부"
                        onChange={handleInputChange} />
                <input value={maemul.details}
                        name="details"
                        placeholder="제품 상세"
                        onChange={handleInputChange} />     
                <input value={maemul.usedDesc}
                        name="usedDesc"
                        placeholder="하자 여부"
                        onChange={handleInputChange} />  
                <input value={maemul.inPerson}
                        name="inPerson"
                        placeholder="직거래 여부"
                        onChange={handleInputChange} />  
                <input value={maemul.canPost}
                        name="canPost"
                        placeholder="택배 거래 여부"
                        onChange={handleInputChange} />                                          
            </div>
            <div className='submitBtn'>
                <button onClick={createNotice}>
                    제출
                </button>
            </div>
            <div>
                {notice.split("\n").map((value,key) => {
                    return <div key={key}>{value}</div>;
                })}
            </div>
        </div>
    )
}

export default InputForm;
