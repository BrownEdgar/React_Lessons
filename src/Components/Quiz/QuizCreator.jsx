import { Component } from 'react'
import classes from './QuizCreator.module.css'
import Button from '../Auth/Button/Button'
import Select from '../UI/Select/Select'
import { createControl } from "./form/myFramework";
import Input from '../Auth/input/Input';

//նույն կոդը "state"-ում չգրելու համար
//ստեղծված է այս ֆունկցիան
function createOptionControl(number) {
  return createControl({
    label: `Вариант ${number}`,
    errorMessage: "Некерректный ответ",
    id: number,
  }, { reqiured: true });
}

// "formControls"-ը զրոյացնելու ֆունկցիա
// նաև թեթվացնում է "state"-ը դարձնելով ընթեռնելի
function createformControls() {
  return {
    question: createControl({
      label: "Введите вопроc",
      errorMessage: "Некерректный вопрос"
    }, { reqiured: true }),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  }
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: createformControls(),
    rightAnswerId: 1
  }
  addQuestionhandler = () => {

  }
  createQuizHandler = () => {

  }
  changeHandler = (value, controlName) => {

  }
  crateInputs = () => {
    return Object.keys(this.state.formControls)
      .map((controlName, index) => {

        const control = this.state.formControls[controlName];
        return (
          <React.Fragment key={index}>
            <Input
              label={control.label}
              value={control.value}
              valid={control.valid}
              touched={control.touched}
              errorMessage={control.errorMessage}
              shouldValidate={!!control.validation}
              // event.target.value-ն միանգամից կարող ենք փոխանցել
              onChange={event => this.changeHandler(event.target.value, controlName)}
            />
            {/* // Առաջին ՛Input՛-ից հետո ավելացնել <hr/> */}
            {index === 0 ? <hr /> : null}
          </React.Fragment>
        )
      })
  }
  selectChangehandler = (event) => {
    this.setState({ rightAnswerId: event.target.value });
  }
  submitHandler = (e) => {
    e.preventDefault();
  }
  render() {
    // Select-ին փոխանցվող տվյալները տալիս ենք այստեղ
    const select = <Select
      label={"Выберите правельный ответ"}
      value={this.state.rightAnswerId}
      onChange={this.selectChangehandler}
      options={[
        { text: 1, value: 1 },
        { text: 2, value: 2 },
        { text: 3, value: 3 },
        { text: 4, value: 4 },
      ]}
    ></Select>
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание Теста</h1>
          <form onSubmit={this.submitHandler}
            className={classes.quizForm}>
            {this.crateInputs()}
            {select}
            <Button
              type='primary'
              onClick={this.addQuestionhandler}
            >Добавить вопрос</Button>
            <Button
              type='success'
              onClick={this.createQuizHandler}
            >Создатаь тест</Button>
          </form>
        </div>
      </div>
    )
  }
}
