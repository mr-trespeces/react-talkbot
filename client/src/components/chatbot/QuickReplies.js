import React, { Component } from 'react';
import QuickReply from './QuickReply';

class QuickReplies extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(event, payload, text) {
        this.props.replyClick(event, payload, text);
    }

    renderQuickReply(reply, i) {
        return <QuickReply key={i} click={this._handleClick} reply={reply} />;
    }

    renderQuickReplies(quickReplies) {
        if (quickReplies) {
            return quickReplies.map((reply, i) => {
                    return this.renderQuickReply(reply, i);
                }
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="col">
                <div className="border-0 card-panel white shadow-none px-1 py-0 my-0">
                    <div className="row m-0">
                        <img className='col-3 rounded-circle' alt="bot" src={require('../img/bot.png')} style={{ height: '35px', width: '65px' }} />
                        
                        <div id="quick-replies"  className="col-9">
                            {this.props.text && 
                            <p>
                                {this.props.text.stringValue}
                            </p>
                            }
                            {this.renderQuickReplies(this.props.payload)}
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuickReplies;