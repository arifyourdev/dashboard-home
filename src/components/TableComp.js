import React from 'react'

const TableComp = () => {
    return (
        <div className='table-wrap mt20'>
            <div className='card'>
                <div className='card-body'>
                    <div className='title'>
                        <h4>Recent Orders</h4>
                    </div>
                    <div className='table-responsive'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th>Order No.</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>Wade Warren</td>
                                <td>789698698</td>
                                <td>$9090.00</td>
                                <td>
                                    <span className='text-success'>Delivered</span>
                                </td>
                            </tr>
                            <tr>
                                <td>jabe Cooper</td>
                                <td>12358565</td>
                                <td>$895.00</td>
                                <td>
                                    <span className='text-danger'>Cencelled</span>
                                </td>
                            </tr>
                            <tr>
                                <td>John Diamond</td>
                                <td>1585565</td>
                                <td>$908.80</td>
                                <td>
                                    <span className='text-success'>Delivered</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Wade Warren</td>
                                <td>789698698</td>
                                <td>$9090.00</td>
                                <td>
                                    <span className='text-success'>Delivered</span>
                                </td>
                            </tr>
                            <tr>
                                <td>jabe Cooper</td>
                                <td>12358565</td>
                                <td>$895.00</td>
                                <td>
                                    <span className='text-danger'>Cencelled</span>
                                </td>
                            </tr>
                            <tr>
                                <td>John Diamond</td>
                                <td>1585565</td>
                                <td>$908.80</td>
                                <td>
                                    <span className='text-success'>Delivered</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableComp