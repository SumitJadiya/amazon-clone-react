import React from 'react'
import "../css/Home.css"
import Product from './Product'
import { useEffect } from 'react'

const Home = () => {

    useEffect(() => (
        slider(0)
    ), [])

    return (
        <div className="home">
            <div className="home__container">
                {/* Image Banner */}
                <div className="home__slider-container">
                    <div className="home__slide">
                        <img
                            className="home__image "
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Post_AugArt/GW_Echo_PC_2x_V2._CB405879256_.jpg"
                            alt="image 1" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg"
                            alt="image 2" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg"
                            alt="image 3" />
                    </div>
                </div>
                {/* Product id, title, price, rating, image */}
                <div className="home__row">
                    {/* Product */}
                    <Product
                        id="12320"
                        title="The Lean Startup"
                        price={10}
                        rating={4.5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
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
                        id="12322"
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={20}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                    />
                    <Product
                        id="12323"
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={20}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                    />
                    <Product
                        id="12324"
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={20}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                    />
                </div>
                <div className="home__row">
                    {/* Product */}
                    <Product
                        id="12325"
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={20}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                    />
                </div>
                <div className="home__row">
                    {/* Product */}
                    <Product
                        id="12326"
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={20}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                    />
                    <Product
                        id="12327"
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={20}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                    />
                    <Product
                        id="12328"
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={20}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                    />
                    <Product
                        id="12329"
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={20}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

function slider(counter) {
    const slides = document.querySelectorAll(".home__image");

    slides.forEach((slide, index) => {
        if (index != counter) {
            slide.style.visibility = `hidden`
            slide.classList.add(`image-${index}`)
        }
    })
    moveCorousal(counter, slides, slides.length)
}

function moveCorousal(counter, slides, len) {

    if (slides) {
        console.log(slides, " -> ", `image-${counter}`)

        if (counter >= len - 1)
            counter = 0
        else
            counter += 1

        slides.forEach((slide, index) => {
            if (index === counter) {
                slide.style.visibility = `visible`
            }
            else {
                slide.style.visibility = `hidden`
            }
        })

    }
    setTimeout(() => {
        moveCorousal(counter, slides, len);
    }, 5000)
}

export default Home
