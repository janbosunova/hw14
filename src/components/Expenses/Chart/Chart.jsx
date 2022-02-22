import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
	const dataPointValues = props.dataPoints.map((data) => data.value)
	//dataPointValues = [20,300,0,0,0]
	const totalMax = Math.max(...dataPointValues) //берет самые максимальные числа и передает к totalMax
	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMax}
					label={dataPoint.label}
				/>
            ))}
		</div>
	)
}

export default Chart
