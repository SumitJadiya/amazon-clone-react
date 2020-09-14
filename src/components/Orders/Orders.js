import React from 'react'
import './Orders.css'
import { useEffect } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { useStateValue } from '../../context/StateProvider';
import { useState } from 'react';
import Order from '../Order/Order';

function Orders() {
    const [{ cart, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        }
        else {
            setOrders([])
        }

    }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders?.map((order, index) => (
                    <Order order={order} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Orders
