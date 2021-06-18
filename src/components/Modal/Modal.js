import {Component} from 'react'

export class Modal extends Component {    
    componentDidMount() {
        window.addEventListener('keydown', this.handelKeyPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handelKeyPress)
    }
  
    handelClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
    }

    handelKeyPress = (e) => {
        
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }

    render() {
        return (
            <div className="Overlay" onClick={this.handelClick} >
                <div className="Modal">
                    <img src={this.props.src} alt="" />
                </div>
            </div>
        )
    }
} 