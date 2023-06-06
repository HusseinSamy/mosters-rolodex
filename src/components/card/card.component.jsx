import { Component } from 'react'
import './card.styles.css'
class Card extends Component {

    render() {
        const { filteredMonsters } = this.props;
        const { monster } = this.props;
        return (
            <div className='card-container'>
                <img src={`https://robohash.org/${monster.id}?set_set3/?size=180x180`} alt={'Monster ' + monster.name} />
                <h1 key={monster.name}>{monster.name}</h1>
                <p>{ monster.email }</p>
            </div>
        )
    }
}

export default Card;