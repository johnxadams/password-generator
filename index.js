const passwordBox = document.querySelector('.big-container .password-box');

passwordBox.style.color = 'rgb(126, 33, 33)';

const randomPassword = () => {
    let result = [];
    let numAndStr = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ§$%&/()=?'*#-:,.<>|/^°abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 8; i++){
        result.push(numAndStr[Math.floor(Math.random() * numAndStr.length)]);
    }
    passwordBox.innerHTML = result.join(" ");
    return result.join("");
}