import { useState } from "react";

const Form = () => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        setValue("");
        setCategory("");
    }

    return (
        <div className="todo-form">
            <h2>Make Task:</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Write the Tittle"
                    value={value}
                    onChange={ (e) => setValue(e.target.value) }    
                />
                <select value={category} onChange={ (e) => setCategory(e.target.value)}>
                    <option value="">Choose a category</option>
                    <option value="work">Work</option>
                    <option value="studies">Studies</option>
                    <option value="personal">Personal</option>
                </select>
                <button type="submit">Make Task</button>
            </form>
        </div>
    )
};

export default Form;