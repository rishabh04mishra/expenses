import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense=(props)=> {

    const saveExpenseDataHandler=(inputExpense)=>{
        const expenseData={
            ...inputExpense,
            id:Math.random().toString(),
        };
        props.onSaveExpense(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
}

export default NewExpense;