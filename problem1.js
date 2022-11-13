let btnDeposit = document.querySelector('#btnDeposit');
let btnWithdraw = document.querySelector('#btnWithdraw');
let balance = document.querySelector('#balance');
let recordTransaction = document.querySelector('#recordTransactions');

var today = new Date();
var date =
  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

var time = today.toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
  second: 'numeric',
});

class SIMPLE_ATM {
  constructor(balance = 0) {
    this.balance = balance;
    this.recordTransac = [];
  }
  checkBalance() {
    return this.balance;
  }
  deposit(amount) {
    if (isNaN(amount) || amount === '') {
      alert('Please enter a number!');
    } else {
      this.balance += amount;
      this.recordTransac.push(`Deposited on  ${date} ${time} ==> ₱${amount}`);
    }

    return this.balance;
  }
  checkWithdraw(amount) {
    if (amount <= this.balance) {
      return true;
    } else {
      return false;
    }
  }
  withdraw(amount) {
    if (this.checkWithdraw(amount)) {
      this.balance -= amount;
      this.recordTransac.push(
        `Money withdrawn on   ${date} ${time} ==> ₱${amount}`
      );
    } else {
      alert('Insufficient funds');
    }
    return this.balance;
  }
  printTransactions() {
    return this.recordTransac.join('\n');
  }
}
function demoAtmInitiliaze() {
  balance.innerText = `Account Balance :  ₱${atm1.checkBalance()}`;
}

function recordTransactions() {
  recordTransaction.innerText = `${atm1.printTransactions()}`;
}

function deposit() {
  let depositAmount = parseInt(document.querySelector('#atmDeposit').value);
  atm1.deposit(depositAmount);
  balance.innerText = `Account Balance : ₱${atm1.checkBalance()}`;
  recordTransactions();
}

function withdraw() {
  let withdrawAmount = parseInt(document.querySelector('#atmWithdraw').value);
  atm1.withdraw(withdrawAmount);
  balance.innerText = `Account Balance : ₱${atm1.checkBalance()}`;
  recordTransactions();
}

function exit() {
  window.location.href = 'index.html';
}

function validate() {
  let valueCard = document.getElementById('loginCard').value;
  let cardPassword = '12345';
  let message;
  if (valueCard != cardPassword) {
    message = 'Wrong Password Please Try Again';
  } else if (valueCard === cardPassword) {
    window.location.href = 'menu.html';
    message = '';
  } else {
    message = '';
  }
  document.getElementById('message').innerHTML = message;
}

var atm1 = new SIMPLE_ATM(0);
demoAtmInitiliaze();

btnDeposit.addEventListener('click', deposit);
btnWithdraw.addEventListener('click', withdraw);
