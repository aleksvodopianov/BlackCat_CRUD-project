import { Component } from 'react';
import Header from '../header/header';
import List from '../list/list';
import SideNav from '../side-nav/side-nav';
import BootstrapComponent from '../bootstrap-component/bootstrap-component';
import CarouselComponent from '../carousel/carousel';

import blackCat from '../../img/blackCat.svg';

import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    title: 'Buy Dog',
                    content:
                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatem minus expedita voluptate voluptates illo dolorum accusantium alias in sint, vitae tempore, optio corporis vel inventore doloribus veniam, necessitatibus consequuntur!',
                    salary: 300
                },
                {
                    id: 2,
                    title: 'Buy Pony',
                    content:
                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatem minus expedita voluptate voluptates illo dolorum accusantium alias in sint, vitae tempore, optio corporis vel inventore doloribus veniam, necessitatibus consequuntur!',
                    salary: 200
                },
                {
                    id: 3,
                    title: 'Buy Snake',
                    content:
                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatem minus expedita voluptate voluptates illo dolorum accusantium alias in sint, vitae tempore, optio corporis vel inventore doloribus veniam, necessitatibus consequuntur!',
                    salary: 450
                },
                {
                    id: 4,
                    title: 'Buy Cat',
                    content:
                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatem minus expedita voluptate voluptates illo dolorum accusantium alias in sint, vitae tempore, optio corporis vel inventore doloribus veniam, necessitatibus consequuntur!',
                    salary: 280
                },
            ],
            term: '',
            filter: 'all',
        };
        this.maxId = 5;
    }

    onDeletePost = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter((item) => item.id !== id )
            };
        });
    }

    onAddPost = (title, content, salary) => {
        if (title && content && salary) {
            const newPost = {
                id: this.maxId++,
                title,
                content,
                salary
            };
            this.setState(({data}) => {
                return {
                    data: [...data, newPost]
                };
            });
        }
    }

    arrSalary = (val) => {
        const { data } = this.state;
        let newArr = [];
        data.forEach(item => {
            newArr.push(item.salary);
        })
        if(val === 'min' && data.length) {
            return Math.min.apply(null, newArr);
        } else if(val === 'max' && data.length) {
            return Math.max.apply(null, newArr);
        }
        return '0';
    }

    searchPosts = (arr, term) => {
        if (term.length === 0) {
            return arr;
        }
        return arr.filter(item => {
            return item.title.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'up':
                return items.sort(function(a, b) {
                    return a.salary - b.salary;
                  });
            case 'down':
                return items.sort(function(a, b) {
                    return b.salary - a.salary;
                  });
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const { data, term, filter } = this.state;
        const posts = data.length;
        const minSalary = this.arrSalary('min');
        const maxSalary = this.arrSalary('max');
        const visibleData = this.filterPost(this.searchPosts(data, term), filter);

        this.arrSalary();
        return (
            <div className="App">
                <Header logo={blackCat} />
                <main>
                    <SideNav
                        onAddPost={this.onAddPost}
                        posts={posts}
                        minSalary={minSalary}
                        maxSalary={maxSalary}
                        onUpdateSearch={this.onUpdateSearch}
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                    <List
                        data={visibleData}
                        onDeletePost={this.onDeletePost}/>
                    <BootstrapComponent/>
                </main>
                <CarouselComponent/>
            </div>
        );
    }
}

export default App;
