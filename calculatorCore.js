//ღილაკებიდან სიმბოლოების აღება გამოსახულებისთვის
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
//ველის გასუფთავების ფუნქცია
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
// ველიდან გამოსახულების აღება და  გამოთვლის შემდეგ მნიშვენლობის მინიჭება
  function calculate() {
    // ველიდან გამოსახულების აღება
    let expression = document.getElementById('display').value;
    let result;
   //გამოთვლის ფუნქცია
      result = evaluateExpression(expression);
      //შედეგის მინიჭება
      document.getElementById('display').value = result;
    
  }
//ძირითადი ფუნქცია
  function evaluateExpression(expression) {
    //ვშლით შემოსულ გამოსახულებას რიცხვების და ოპერატორების მასივად
    let parts = expression.match(/(\d+|\+|\-|\*|\/)/g);
    //ვიმახსოვრებთ პირველ რიცხვს
    let result = parseInt(parts[0]);
    for (let i = 1; i < parts.length; i += 2) {
      //ვიღებთ დანარჩენ რიცხვებს გამოსახულებიდან
      let operator = parts[i];
      //ვიღებთ ოპერატორებს გამოსახულებიდან
      let operand = parseInt(parts[i + 1]);
//შესაბამის  ოპერატორზე აკეთებს რიცხვებზე მოქმედებას
      switch (operator) {
        case '+':
          result += operand;//result=result+operand
          break;
        case '-':
          result -= operand;
          break;
        case '*':
          result *= operand;
          break;
        case '/':
          //თუ გაყოფისას გამოიყენეს ნული
          if (operand === 0) {
            result= 'ნულზე გაყოფა არ შეიძლება';
          }
          result /= operand;
          break;
        default:
          //თუ ქეისებში არ მოვიდა რომელიმე ოპერატორი
          result= 'არასწორი ოპერატორი';
      }
    }

    return result;
  }