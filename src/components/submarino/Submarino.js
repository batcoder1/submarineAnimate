import React from 'react';
import './Submarino.css';
class Submarino extends React.Component  {
    render() {
        return (
        <div className="sea">
            <div className="circle-wrapper">
                <div className="bubble"></div>
                <div className="bubble b2"></div>
                <div className="bubble2"></div>
                <div className="bubble2 b2"></div>
                <div className="submarine-wrapper">
                    <div className="submarine-body">
                        <div className="window w1"></div>
                        <div className="window w2"></div>
                        <div className="window w3"></div>
                        <div className="window w4"></div>
                        <div className="engine"></div>
                        <div className="light"></div>
                        <div className="launcher"></div>

                    </div>
                    <div className="helix"></div>
                    <div className="hat">
                    <div className="leds-wrapper">
                        <div className="periscope"></div>
                        <div className="leds"></div>
                        <div className="leds"></div>
                        <div className="leds"></div>

                    </div>
                    </div>
                </div>
            </div>
          {/* <div className="button fire">Fire</div>  */}
        </div>

        )}
}
export default Submarino;