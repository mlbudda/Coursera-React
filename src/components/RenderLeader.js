import React from 'react';
import { Media } from 'reactstrap';

function RenderLeader(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <Media className="m-3">
                <Media left top href="#">
                    <Media object src={leader.image} alt="" />
                </Media>
                <Media body className="m-3">
                    <Media heading>
                        {leader.name}
                    </Media>
                    <h6>{leader.designation}</h6>
                    {leader.description}
                </Media>
            </Media> 
        );
    });

    return(
        <div className="row row-content">
        <div className="col-12">
            <h2>Corporate Leadership</h2>
        </div>
        
        <div className="col-12">
                    <Media list >
                        {leaders}
                    </Media>
        </div>
        </div>
    );
}

export default RenderLeader;    