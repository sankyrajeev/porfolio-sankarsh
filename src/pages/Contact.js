

function Contact() {
    return (
        <section>
            <h1>Contact</h1>

            <form>
                <div className="mb-3 col-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your information with anyone else.</div>
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </section>
    );
}

export default Contact;