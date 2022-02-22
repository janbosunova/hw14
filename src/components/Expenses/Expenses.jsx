import React from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

//так как компоненты это функции которые возвращают JSX код, мы даем этим функциям такое же название какое дали файлу.
//Еще когда мы объявляем компоненту они должны начинатся с большой функции

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2022') //значение по умолчению, которое может меняться при выборе

	const filteredChangeInput = (selectedYear) => {
		setFilteredYear(selectedYear)
	} //метод который используется внутри компоненты expenseFilter вызывается как props для получения данных

	const filteredExpenses = props.data.filter((expense) => {
		//идет фильтрация
		return expense.date.getFullYear().toString() === filteredYear //возвращает год указанной даты по местному времени. От expense
	})
	// console.log(props.data)
	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filteredChangeInput}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList
				expenses={filteredExpenses}
				selected={filteredYear}
				data={props.data}
			/>
		</Card>
	)
}

export default Expenses
