import LineChartGraph from "./LineChart";
import PieChartGraph from './PieChart';
import BarchartGraph from './BarChart';

const DummyIndex = () => {
    return (
        <>
            <LineChartGraph />
            <BarchartGraph />
            <PieChartGraph />
        </>
    )
}

export default DummyIndex;