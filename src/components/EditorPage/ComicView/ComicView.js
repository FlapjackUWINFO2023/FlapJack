import React from 'react';
import './ComicView.css'

const ELEMENT_TYPE_SPRITE = 'sprite';

class ComicView extends React.Component {
    // Given a classObj that maps classes to booleans and optional default classes, returns className
    toClassName(classObj, classes) {
        let className = classes || '';
        const keys = Object.keys(classObj);
        for (let i = 0; i < keys.length; i++) {
            const attr = keys[i];
            if (classObj[attr]) {
                className += ` ${attr}`;
            }
        }
        return className;
    }

    // Get parsed elements in current frae
    getElements() {
        return this.props.frame.map(element => ({
            ...element,
            x: `${element.x}%`,
            y: `${element.y}%`,
        }));
    }

    // Get on click listener for a sprite at a particular index
    getSpriteOnClickListenerForIdx(idx) {
        if (!this.props.onClickListeners || idx >= this.props.onClickListeners.length) {
            // Return no-op if there are no on-click listeners for this index
            return () => {};
        }

        return this.props.onClickListeners[idx](idx);
    }

    // Render an element as a sprite
    renderSprite(element, idx) {
        // Loaded from Editor Page
        let ifFromEditor = false;
        if (this.props.onEditorPage) {
            ifFromEditor = true;
        }

        const classes = {
            'flip-x': !!element.flipX,
        };
        const id = !!element.id ? `assigned-${this.props.sceneName}-${element.id}` : null;
        return (
            <>
                <img
                    className={this.toClassName(classes, 'comic-view-sprite')}
                    id={id + idx}
                    style={{
                        left: element.x,
                        top: element.y,
                        width: `${element.size}%`,
                    }}
                    onClick={this.getSpriteOnClickListenerForIdx(idx)}
                    alt=""
                    src={`/sprites/sprite-${element.image}.png`}
                    key={id || idx}
                    // Offcanvas Editor
                    data-bs-toggle="offcanvas" 
                    href={'#sprite-' + id + idx}  
                    role="button" 
                    aria-controls="offcanvasExample"
                />
                {
                    ifFromEditor &&
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id={'sprite-' + id + idx}  aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Sprite</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            {this.props.LoadSpriteEditor}
                        </div>
                    </div>
                }
            </>
        )
    }

    // Render an element
    renderElement(element, idx) {
        if (element.type === ELEMENT_TYPE_SPRITE) {
            return this.renderSprite(element, idx);
        }
        return (<div></div>);
    }

    // Render dialogue
    renderDialogue(dialogue) {
        let type = dialogue.type;
        let image = '';
        if (type === 'nospeaker') {
            image = '/sprites/misc-textbubble-nospeaker.png';
        } else if (type === 'left') {
            image = '/sprites/misc-textbubble-left.png';
        } else {
            image = '/sprites/misc-textbubble-right.png';
        }
        
        return (<div id="dialogue" className={`dialogue-${dialogue.type}`}>
            <img src={image} alt="Text bubble background" />
            <div className="message-container">
                <p>{dialogue.message}</p>
            </div>
            {
                dialogue.speaker.length > 0 &&
                    <div className="speaker-container">
                        <span>{dialogue.speaker}</span>
                    </div>
            }
        </div>);
    }

    // Render decision
    renderDecision(decision) {
        const onDecisionClickListener = this.props.onDecisionClickListener || (() => {});
        return <div id="decision">
            {Object.keys(decision).map(label => {
                return (<button onClick={() => onDecisionClickListener(decision[label])}>{label}</button>)
            })}
        </div>;
    }

    render() {
        return (
            <div className="comic-view" style={{
                backgroundImage: `url("/sprites/bg-${this.props.background}.png")`
            }}>
                {this.props.dialogue && this.renderDialogue(this.props.dialogue)}
                {this.getElements().map((element, idx) => this.renderElement(element, idx))}
                {this.props.decision && this.renderDecision(this.props.decision)}
            </div>
        );
    }
}

export default ComicView;