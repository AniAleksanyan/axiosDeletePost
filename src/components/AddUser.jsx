import axios from "axios";
import { useState } from "react";

export const AddUser = ({onAdd}) => {
    const [form, setForm] = useState({ name: "", surname: "", salary: "" })
    const handleSubmit = (e)  => {
        e.preventDefault();
        axios
        .post("http://localhost:3004/users", form)
        .then(res => {
            onAdd(res.data);
            setForm({name: "", surname: "", salary: ""})
        })
    }
    return <div>
        <h1>AddUser</h1>
        <form onSubmit={handleSubmit}>
            <label>name</label>
            <input
                value={form.name}
                onChange={e=>setForm({...form, name: e.target.value})}
            />

            <label>surname</label>
            <input
                value={form.surname}
                onChange={e=>setForm({...form, surname: e.target.value})}
            />

            <label>salary</label>
            <input
                value={form.salary}
                onChange={e=>setForm({...form, salary: e.target.value})}
            />

           <button>save</button>
        </form>
    </div>
}