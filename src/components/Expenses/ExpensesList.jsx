import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
	//берет фильтрированный массив
	if (props.selected === 'All') {
		return props.data.map((el) => {
			return (
				<ExpenseItem
					key={el.id}
					title={el.title}
					amount={el.amount}
					date={el.date}
				/>
			)
		})

		
	} else if (props.expenses.length === 0) {
		return <h2 className='expenses-list__fallback'>No expenses Found</h2>
	}
	return (
		<ul className='expenses-list'>
			{props.expenses.map((expense) => {
				return (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				)
			})}
		</ul>
	)
}

export default ExpensesList
