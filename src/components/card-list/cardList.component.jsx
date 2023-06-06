import {Component} from 'react'
import Card from '../card/card.component';
import './card-list.component.css'

class CardList extends Component {

    render() {
        const { filteredMonsters } = this.props;
        return (
            <div className='container'>
                <h1 className="main-text">Monsters Rolodex</h1>
                <div className="cards-container">
                    {filteredMonsters.map((monster) =>
                        <Card monster={ monster } />
                )}
                </div>
            </div>

        )
    }
}

export default CardList;