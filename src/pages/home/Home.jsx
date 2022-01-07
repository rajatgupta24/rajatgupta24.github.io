import { ParallaxBanner, ParallaxBannerProps } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

import "./home.css"

const Home = () => {
    return (
        <ParallaxProvider>
            <ParallaxBanner
                className="parallaxbg"
                layers={[
                    {
                        image: 'images/bg1.jpg',
                        amount: 0.5,
                    },
                ]}
            >
                <div className="parallaxChildren">
                    <h1>Headline Text</h1>
                </div>
            </ParallaxBanner>
        </ParallaxProvider>
    )
}

export default Home
