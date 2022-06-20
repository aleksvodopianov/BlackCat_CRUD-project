
import './contents.scss';

const Contents = ({posts, minSalary, maxSalary}) => {

    return (
        <section className="contents">
                <h2>Contents</h2>
                <ul>
                    <li>Posts: <span>{posts}</span></li>
                    <li>Min salary: <span>{minSalary}$</span></li>
                    <li>Max salary: <span>{maxSalary}$</span></li>
                </ul>
        </section>
    )
}

export default Contents;