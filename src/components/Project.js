import { renderIntoDocument } from "react-dom/test-utils";

function Project({ data }) {
    return (
        
            
            <div className="col">
                <div className="card">
                    <img src={data.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.description}</p>
                        <a href={data.deployedLink} className="btn btn-primary">Link</a>
                    </div>
                </div>
            </div>
            
            
        
    );
}

export default Project;