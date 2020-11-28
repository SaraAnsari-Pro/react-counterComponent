import './Counter.css';


function Counter(props) {

    var startCount = props.startCount;
    var countRate = props.countRate;
    // console.log("StartCount: ", startCount);
    // console.log("CountRate: ", countRate);

    function buttonClicked(rate) {
        // console.log(rate);
        startCount += countRate;
        console.log("startCount:", startCount);

    }
    function buttonClick(start) {
        // console.log(start);
        startCount -= countRate;
        //countRate -= startCount;
        console.log("startCount:", startCount);

    }

    return (

        <div className="container">
            <h1> Counter: {startCount} </h1>
            <h1> Count Rate:{countRate}  </h1>
            <div>
                <button onClick={() => buttonClicked(countRate)}> + </button>
                <button onClick={() => buttonClick(startCount)}> - </button>
            </div>
        </div>

    );
}
export default Counter;