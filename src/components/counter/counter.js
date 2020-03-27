import React from "react"
import moment from "moment"
import "../../style/counter/counter.scss"

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            month: undefined,
            days: undefined,
            hours: undefined,
            minutes: undefined,
            seconds: undefined,
        }
    }

    componentWillMount() {
        this.startTimer()
    }

    startTimer() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props
            const then = moment(timeTillDate, timeFormat)
            const now = moment()
            const counter = moment(then - now)
            const month = counter.format("MM") - 1
            const days = counter.format("D")
            const hours = counter.format("HH")
            const minutes = counter.format("mm")
            const seconds = counter.format("ss")

            this.setState({ month, days, hours, minutes, seconds })
        }, 1000)
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }

    render() {
        const { month, days, hours, minutes, seconds } = this.state
        if (!seconds) {
            return null
        }
        return (
            <div className="animated zoomIn delay-0s">
                <div className="counter">
                    <div className="counter-card">
                        {month}
                        <span className="counter-card-text">Month</span>
                    </div>
                    <div className="counter-card">
                        {days}
                        <span className="counter-card-text">Days</span>
                    </div>
                    <div className="counter-card">
                        {hours}
                        <span className="counter-card-text">Hours</span>
                    </div>
                    <div className="counter-card">
                        {minutes}
                        <span className="counter-card-text">Minutes</span>
                    </div>
                    {/* <div className="counter-card">
                        {seconds}
                        <span className="counter-card-text">Secounds</span>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Counter;
