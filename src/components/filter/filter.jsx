import './filter.scss';

const Filter = (props) => {
    const buttonsData = [
        {name: 'up', label: 'Price up'},
        {name: 'down', label: 'Price down'},
    ];
    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-dark';
        return (
            <button
                className={clazz}
                key={name} 
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="filter">
            <h2>Filter</h2>
            {buttons}
        </div>
    )

}

export default Filter;

