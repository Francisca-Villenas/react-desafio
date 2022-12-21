const Card = ({ url, cardTitle}) => {
    return (
        <div className="container-card">
        <div className="card">
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
          </div>
        </div>
    </div> 
    ); 
};

export { Card };

