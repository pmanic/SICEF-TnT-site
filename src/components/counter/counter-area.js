import React from "react";
import Counter from "./counter";
import "../../style/counter/counter-area.scss";

class CounterArea extends React.Component {
    render() {
        return (
            <div className="counter-area">
                <Counter
                    timeTillDate="05 04k 2020, 00:00 am"
                    timeFormat="DD MM YYYY, h:mm a">
                </Counter>
            </div>
        )
    }
}

export default CounterArea