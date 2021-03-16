import React from 'react';
import './App.css';

function App() {
    const [state, setState] = React.useState({nameField: '', age: '', field: '', selector: 'Anders'})
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    const submit = event => {
        console.log(`
NAAM:           ${state.nameField}
LEEFTIJD:       ${state.age}
HOE GEVONDEN:   ${state.selector}
OPMERKINGEN:    ${state.field}`);
        event.preventDefault()
    }
    return (
        <>
            <header><h1>Jouw mening telt!</h1></header>
            <form onSubmit={submit}>
                <fieldset className='form'>
                    <legend>Gegevens</legend>
                    <div><label htmlFor="name"/>Naam:
                        <input name="nameField"
                               type="text"
                               className='field'
                               value={state.nameField}
                               onChange={handleChange}/></div>
                    <div><label htmlFor='age'/>Leeftijd:
                        <input name="age"
                               type='number'
                               placeholder='0'
                               className='field'
                               value={state.age}
                               onChange={handleChange}/></div>
                </fieldset>
                <fieldset className='form'>
                    <legend>Jouw Review</legend>
                    <label htmlFor='selector'/>Hoe heb je dit recept gevonden?
                    <select name='selector'
                        className='field'
                            value={state.selector}
                            onChange={handleChange}>
                        <option>Google</option>
                        <option>Vriend</option>
                        <option>Advertentie</option>
                        <option>Anders</option>
                    </select>
                    <label htmlFor='input-field'/>Opmerkingen:
                    <textarea name='field'
                              id='input-opmerkingen'
                              className='field'
                              placeholder='Wat vond je van het Recept?'
                              value={state.field}
                              onChange={handleChange}
                    />
                    <button type='submit' id='send-button' className='field'>Verstuur</button>
                </fieldset>
            </form>
        </>
    );
}

export default App;
