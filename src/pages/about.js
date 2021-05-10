import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'


const About = () => {
    return (
        <Layout>
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>Our story is one of passion for food</h2>
                        <p>I'm baby tousled pug meh try-hard occupy readymade affogato mlkshk swag truffaut thundercats schlitz blog keytar jean shorts. Knausgaard pug cray unicorn, semiotics biodiesel vexillologist poutine everyday carry next level vegan.</p>
                        <p>Brooklyn vape actually, cornhole umami blue bottle meggings waistcoat lo-fi keytar jianbing swag banjo godard. Wayfarers waistcoat you probably haven't heard of them swag stumptown slow-carb authentic messenger bag cardigan knausgaard asymmetrical raw denim pork belly.</p>
                        {/* <Link to="/contact" className="btn">
                            contact
                        </Link> */}
                    </article>
                    <StaticImage
                        src="../assets/images/chef.jpeg"
                        alt="fire chef cooking"
                        className="about-img"
                        placeholder="blurred"/>
                </section>
            </main>
        </Layout>
    )
}

export default About
