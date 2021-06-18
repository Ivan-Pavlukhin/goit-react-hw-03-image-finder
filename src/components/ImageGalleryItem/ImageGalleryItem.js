import {Component} from 'react'
import { Modal } from '../Modal'

export class ImageGalleryItem extends Component {
    state = {
        modalOpen: false
    }

    modalToggle = () => {
        this.setState(({modalOpen}) => ({modalOpen: !modalOpen}))
    }

    render() {
        return(
            <li className="ImageGalleryItem" >
                <img src={this.props.image.webformatURL} alt="" className="ImageGalleryItem-image" onClick={this.modalToggle}/>
                {this.state.modalOpen && <Modal src={ this.props.image.largeImageURL} onClose={this.modalToggle} />}
            </li>
        )
    }
}