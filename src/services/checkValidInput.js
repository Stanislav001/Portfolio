const isEmpty = (value) => value.trim() === '';

export function checkValidInput(enteredFirstName, enteredLastName, enteredEmail, enteredMessage) {
    const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
    const enteredLastNameIsValid = !isEmpty(enteredLastName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredMessagesValid = !isEmpty(enteredMessage);

    if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid && enteredMessagesValid) {
        return true;
    }

    return false;
}