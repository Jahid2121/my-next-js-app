import React from 'react';

const DynamicPage = ({params, searchParams}) => {
    console.log(searchParams);
    return (
        <div>
            <h1>This is dynamic Page: {params.id} </h1>
            <h2>Search by: {searchParams.category}</h2>
        </div>
    );
};

export default DynamicPage;