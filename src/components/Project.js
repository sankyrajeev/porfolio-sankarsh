import { renderIntoDocument } from "react-dom/test-utils";

function Project({ data }) {
    return (


        <div className="card mb-5 bg-transparent border border-white">
            <img src={data.imgUrl} className="card-img-top border border-dark" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.description}</p>
                <a href={data.deployedLink} className="btn btn-primary" target="_blank">Link</a>
            </div>
        </div>



    );
}

export default Project;