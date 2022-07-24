import React, { Component } from 'react'

export default class Databinding extends Component {
    product = {
        id: 1,
        name: 'produce 1',
        price: 1000,
        img: 'http://picsum.photos/id/2/200/200'
    }

    renderCardProduct = () => {

        // Nội dung render phải là: string, boolean, number hoặc jsx (có thể bao phủ)
        return (
            <div className='card'>
                <img src={this.product.img} alt="..." />
                <div className='card-body bg-dark text-white'>
                    <p>{this.product.name}</p>
                    <p>{this.product.price}</p>
                </div>
            </div>
        )
    }


    render() {
        const title = 'Cybersoft';
        const person = {
            name: 'mr.Đàm',
            age: 25,
        }
        const renderText = (tenLop) => {
            return `hello ${tenLop}`;
        }


        return (


            <div className='container'>
                <p id='pText'>{title}</p>
                <hr />
                <div className='card w-25 mt-2'>
                    <img src="http://i.pravatar.cc?u=1" alt="" />
                    <div className='card-body'>
                        <p>name: {person.name}</p>
                        <p>age: {person.age}</p>
                    </div>
                </div>
                <hr />
                <h3>Binding gọi hàm: chỗ gọi hàm sẽ hiển thị những gì mà hàm đó return. Cú pháp: {`{goiHam()}`}</h3>
                {renderText('Bootcamp28')}
                <hr />
                <h3>Binding thuộc tính tương tự</h3>
                <div className='alert alert-primary'>
                    product info:
                    <p>id: {this.product.id}</p>
                    <p>name: {this.product.name}</p>
                    <img src={this.product.img} alt="..." width={200} />
                    <p>price: {this.product.price}</p>
                </div>
                <hr />
                <h3>Card product</h3>
                <div className='w-25'>
                    {this.renderCardProduct()}

                </div>
            </div>
        )
    }
}
