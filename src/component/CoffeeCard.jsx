import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ Acoffee,coffees,setCoffees }) => {
    const { _id, coffee, quantity, supplier, taste, category, details, photo } = Acoffee;
    
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(coffee => coffee._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{coffee}</h1>
                        <p className="py-6">andae et a id nisi.{details}</p>
                        <button className="btn btn-primary mr-3">View</button>
                        <Link to={`updateCoffee/${_id}`}><button className="btn  btn-accent mr-3">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-error mr-3">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;