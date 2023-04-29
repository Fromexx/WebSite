function sendFeedbackForm()
{
    const nameField = document.getElementById('feedback-form__name');
    const emailField = document.getElementById('feedback-form__email');

    if(nameField.value == '' || emailField.value == '')
    {
        window.alert('Пожалуйста! Заполните все поля!');
    }
}