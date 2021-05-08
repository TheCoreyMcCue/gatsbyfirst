import React from 'react'
import Layout from '../components/Layout'

const contact = () => {
    return (
        <Layout>
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Want to get ahold of us?</h3>
                        <p>Letterpress disrupt sartorial lumbersexual gluten-free farm-to-table tilde. Hell of selvage intelligentsia artisan kale chips 90's. Hoodie VHS cray iPhone pug art party. Williamsburg umami dreamcatcher venmo kale chips, pabst locavore bespoke offal cold-pressed poutine chambray fanny pack cloud bread. Salvia jean shorts organic iPhone gochujang yr. Church-key pabst venmo, retro distillery gentrify mustache tattooed gluten-free raw denim sriracha cronut. Man braid tofu artisan vaporware butcher pickled.</p>
                            <p>Marfa vinyl yr street art selvage tacos palo santo VHS single-origin coffee photo booth. Waistcoat offal heirloom cloud bread air plant hella. Kogi mlkshk butcher skateboard, drinking vinegar lumbersexual poutine literally roof party tumeric affogato pinterest af actually. Bicycle rights direct trade vexillologist yr.</p>
                    </article>
                    <article>
                        <form className="form contact-form">
                            <div className="form-row">
                                <label htmlFor="name">your name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">your email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">Write us a message</label>
                                <textarea type="text" name="message" id="message" />
                            </div>
                            <button type="submit" className="btn block">Submit</button>
                        </form>
                    </article>
                </section>
            </main>
        </Layout>
    )
}

export default contact



