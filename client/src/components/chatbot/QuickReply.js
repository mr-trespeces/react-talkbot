import React from 'react';


const QuickReply = (props) => {
    if (props.reply.structValue.fields.payload) {
        return (
            <a style={{ margin: 3, height: "auto"}} href="/" className="btn btn-light w-100"
               onClick={(event) =>
                   props.click(
                       event,
                       props.reply.structValue.fields.payload.stringValue,
                       props.reply.structValue.fields.text.stringValue
                   )
               }>
                {props.reply.structValue.fields.text.stringValue}
            </a>
        );
    } else {
        return (
            <a style={{ margin: 3, height: "auto"}} href={props.reply.structValue.fields.link.stringValue}>
                {props.reply.structValue.fields.text.stringValue}
            </a>
        );
    }
};

export default QuickReply;