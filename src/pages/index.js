import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/chop.jpeg"
            alt="chopping cilantro"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth" />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Home Cookin</h1>
              <h4>For those who care about what they eat</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}
