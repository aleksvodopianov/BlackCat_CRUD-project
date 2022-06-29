import './filter.scss';

const Filter = (props) => {

    return (
        <div className="filter">
            <h2>Filter</h2>
            <button className='btn-light'>By relevance</button>
            <button className='btn-dark' >Price up</button>
            <button className='btn-dark' >Price down</button>
        </div>
    )

}

export default Filter;

