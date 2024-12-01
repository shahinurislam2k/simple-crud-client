import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();
    const {name, email} = loadedUser;

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateUser = {name, email};
        console.log(updateUser)


        fetch(`http://localhost:5000/users/${loadedUser._id}` , {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                alert('user updated successfully')

            }
        })

    }

    return (
        <div>
            <h3>Update information of  {name} --- {email}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text"  name="name" id="" defaultValue={loadedUser?.name}/>
                <br />
                <input type="email"  name="email" id="" defaultValue={loadedUser?.email}/>
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;