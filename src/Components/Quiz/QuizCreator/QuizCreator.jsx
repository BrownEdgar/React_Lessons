import { Component } from 'react'
import classes from './QuizCreator.module.css'
import Button from '../../Auth/Button/Button'
import Select from '../../UI/Select/Select'
import { createControl, validate, validateForm } from "../form/myFramework";
import Input from '../../Auth/input/Input';
import axios from 'axios';

//նույն կոդը "state"-ում չգրելու համար
//ստեղծված է այս ֆունկցիան
function createOptionControl(number) {
  return createControl({
    label: `Вариант ${number}`,
    errorMessage: "Некерректный ответ",
    id: number,
  }, { required: true });
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
//--------------------------------------------------------------
export default class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: createformControls(),
    rightAnswerId: 1,
    isFormValid: false
  }

  // այս ֆունկցիան հարց է ավելացնում
  addQuestionhandler = (event) => {
    // կլոնավորման ևս մեկ տարբերակ
    const quiz = this.state.quiz.concat();
    const index = quiz.length + 1;
    const { question, option1, option2, option3, option4 } = this.state.formControls
    const questionItem = {
      question: question.value,
      id: index,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        { text: option1.value, id: option1.id },
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option3.id },
        { text: option4.value, id: option4.id }
      ]
    }
    //Ստեղծած հարցը ավելացնում ենք ՛quiz՛ կլոնի մեջ, հետո փոխում ենք ՛state՛ում
    quiz.push(questionItem);
    this.setState({
      quiz,
      formControls: createformControls(),
      rightAnswerId: 1,
      isFormValid: false
    });
  }
  createQuizHandler = async (event) => {
    //տարբերակ 1
    // axios.post("https://react-project-n1.firebaseio.com/quiz.json", this.state.quiz)
    // 	.then(response => {
    // 		console.log('response', response)
    // 	}).catch(err => console.log(err))
    try {
      const response = await axios.post("https://react-project-n1.firebaseio.com/quiz.json", this.state.quiz);
      console.log('response', response)
      //ամեն անգամ երբ սերվերը պատաասխան ուղարկի 
      // զրոյացնում ենք ՛state՛-ը,որպեսզի վերադառնանք նախքին վիճակ
      this.setState({
        quiz: [],
        formControls: createformControls(),
        rightAnswerId: 1,
        isFormValid: false
      });
    } catch (error) {
      console.log('error', error)
    }
  }

  changeHandler = (value, controlName) => {
    //formControls local copy
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] }
    // քանի որ մի բան փոխել ենք եթե ֆունկցիան աշխատելա ապա՝
    control.touched = true;
    control.value = value;
    //  ստուգման համար դրսի ֆունկցիայի օգտագործում
    //control.value = input-ի մեջի գրածը
    control.valid = validate(control.value, control.validation);
    formControls[controlName] = control;
    this.setState({
      formControls,
      isFormValid: validateForm(formControls)
    });
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
          <form onSubmit={this.submitHandler}>
            {this.crateInputs()}
            {select}
            <Button
              type='primary'
              onClick={this.addQuestionhandler}
              disabled={!this.state.isFormValid}
            >Добавить вопрос</Button>
            <Button
              type='success'
              onClick={this.createQuizHandler}
              // եթե հարցեր չկան կոճակը disabled-ա
              disabled={this.state.quiz.length === 0}
            >Создатаь тест</Button>
          </form>
        </div>
      </div>
    )
  }
}
