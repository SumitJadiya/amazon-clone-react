import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            {/* Image Banner */}
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Post_AugArt/GW_Echo_PC_2x_V2._CB405879256_.jpg"
                alt="" />
            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                {/* Product */}
                <Product
                    id="12321"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
                <Product
                    id="12321"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
            </div>
            <div className="home__row">
                {/* Product */}
                <Product
                    id="12321"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
                <Product
                    id="12321"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
                <Product
                    id="12321"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
            </div>
            <div className="home__row">
                {/* Product */}
                <Product
                    id="12321"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
            </div>
            <div className="home__row">
                {/* Product */}
                <Product
                    id="12321"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
                <Product
                    id="12321"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
                <Product
                    id="12321"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
                <Product
                    id="12321"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
