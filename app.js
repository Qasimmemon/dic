// var num_generate_1 = Math.ceil(Math.random()*6)
// console.log(num_generate_1);
// var num_generate_2 = Math.ceil(Math.random()*6)
// console.log(num_generate_2);
// var i_2 = document.getElementById('i_2')
// var i_1 = document.getElementById('i_1')
// var sun = document.getElementById('sun')
// sun.addEventListener('click', function () {
//     var num_generate_1 = Math.ceil(Math.random()*6)
// console.log(num_generate_1);
// var num_generate_2 = Math.ceil(Math.random()*6)
// console.log(num_generate_2);
//    if (i_1 == i_2) {
//     alert('Match')
//    } 
// })
// i_1 = num_generate_1
// i_2 = num_generate_2

function rollDice() {
    // Generate random numbers between 1 and 6 for both players
    const player1Roll = Math.floor(Math.random() * 6) + 1;
    const player2Roll = Math.floor(Math.random() * 6) + 1;

    // Display the dice roll results using Unicode dice characters
    document.getElementById('player1').textContent = getDiceFace(player1Roll);
    document.getElementById('player2').textContent = getDiceFace(player2Roll);

    // Determine the winner and display the result
    let resultText = '';
    if (player1Roll == player2Roll) {
        resultText = 'Match!';
    } else {
        // resultText = 'It\'s a Draw!'; resultText = 'Wrong!';
    }
    document.getElementById('result').textContent = resultText;
}

function getDiceFace(number) {
    const diceFaces = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
    return diceFaces[number - 1];
}
