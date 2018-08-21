import React from 'react' ;

const EditPortfolio = (props) => {
    return (
        <div>
            <h1>A Thing I've Done</h1>
            <p>Editing portfolio item with id of {props.match.params.id}</p>
        </div>
    );
};

export default EditPortfolio;