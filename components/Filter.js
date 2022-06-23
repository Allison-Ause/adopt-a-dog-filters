

export default function createFilter(form, { handleFilter }) {
    const input = form.querySelector('input');
    const select = form.querySelector('select');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
// specifying which data we want from the form
        const breed = formData.get('breed'); // creating variables that go into object
        const age = formData.get('age');

// *** call handleFilter with an object that has the breed and age;
// could also have written handleFilter( { breed: formData.set('breed'), age: formData.set('age') }) rather than const iding them above
        handleFilter(
            { breed, age }
        );
    });

    return ({ breed, age }) => {
        // *** set the values of the select and input
        select.value = breed; //already defined breed above, only need value of select and input
        input.value = age; // no need to be more specific (breed.Select.value because there's only one input and one select)
    };
}