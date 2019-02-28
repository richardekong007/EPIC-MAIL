const titleText = "Reset Password";

const contents =
    "<br>"
    + "<br>"
    + "<form id='resetPasswordForm'>"
    + "<label for='email'>Email:</label>"
    + "<input id='email' type='text' placeholder=' Please provide email' required />"
    + "<label for='password'>Password:</label>"
    + "<input id='password' type='password' placeholder=' Please provide password' required/>"
    + "<label for='newPassword'>New Password:</label>"
    + "<input id='newPassword' type='password' placeholder=' Please provide new password' required/>"
    + "<label for='repeatPassword'>Repeat Password:</label>"
    + "<input id='repeatPassword' type='password' placeholder=' Please repeat new password' required/>"
    + "<button id='resetPasswordFormButton' type='submit'>Reset</button>"
    + "</form>";

const message = "Executing your request, \n Do you wish to proceed?";

const resetConfirmationMarkups =
    +"<p>" + message + "</p>"
    + "<div>"
    + "<button id='no'>No</button>"
    + "<button id='yes'>Yes</button>"
    + "</div>";

function displayPasswordResetUI() {
    const mainSection = document.getElementById('content');
    const title = document.getElementById('headerTitle');
    const resetConfirmationSection = document.createElement('div');
    resetConfirmationSection.setAttribute('id', 'resetDialog');
    resetConfirmationSection.innerHTML = resetConfirmationMarkups;
    title.textContent = titleText;
    mainSection.innerHTML = contents;

    let resetConfirmDialog = new Dialog(resetConfirmationSection);
    let formButton = document.getElementById('resetPasswordFormButton');
    formButton.onclick = ()=>{
        handleDialogEvent(resetConfirmDialog);
    };

}

function handleDialogEvent(dialog) {
    let negativeButton = document.getElementById('no');
    let positiveButton = document.getElementById('yes');

        negativeButton.onclick = () => {
            dialog.restore()
        };
        positiveButton.onclick = () => {
            dialog.restore();
        };
}