console.log('App is running!');

const obj = {
    title: 'Indecision App',
    subtitle: 'The Website.',
    options: [],
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        obj.options.push(option)
    }

    e.target.elements.option.value = '';

    render();
}

const removeAll = () => {
    obj.options.length = 0;
    render();
}

const appRootTwo = document.getElementById('root');

const render = () => {

    const template = (
        <div>
        <h1>{obj.title}</h1>
        {obj.subtitle && <p>{obj.subtitle}</p>}

        <p>{obj.options.length > 0 ? 'Options: ' : 'No Options'}</p>
        <p>{obj.options.length}</p>
         
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" id="option1"/>
            <button type="submit">Add</button>
          </form>

        <button type="reset" onClick={removeAll}>Remove All</button>

        <p>List:</p>
      <ol>
        {
            obj.options.map((option, index) => {

                return <li key={index}>{option}</li>
        })
        }
      </ol>

    </div>
    );

    ReactDOM.render(template, appRootTwo);
}

render();