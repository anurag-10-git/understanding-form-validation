import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    hasError: firstNameInputHasError,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    hasError: lastNameInputHasError,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@") && value.trim() !== "");

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const onSubmissionHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid || !lastNameIsValid || !enteredEmailIsValid) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameClass = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClass = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameChangedHandler}
            value={firstName}
            onBlur={firstNameBlurHandler}
            type="text"
            id="name"
          />
           {firstNameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameChangedHandler}
            value={lastName}
            onBlur={lastNameBlurHandler}
            type="text"
            id="name"
          />
             {lastNameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={emailChangedHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
          type="text"
          id="name"
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty & includes @.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
