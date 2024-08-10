
class Question {

    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices
        this.answer = answer;
    }

    correctAnswer(choice) {
        return choice === this.answer
    }

}

const question = new Question('What is the capital of France?', ['Berlin', 'Madrid', 'Paris', 'London'], 'Paris')  
    

console.log(question.correctAnswer('Berlin')) // false








