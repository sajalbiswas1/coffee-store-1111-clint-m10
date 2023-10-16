import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const loadedData = useLoaderData();
    const { _id, coffee, quantity, supplier, taste, category, details, photo } = loadedData;
    console.log(coffee)
    const handleCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const coffee = form.coffee.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffeeItems = { coffee, quantity, supplier, taste, category, details, photo }
        console.log(coffeeItems)
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(coffeeItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your coffee is Update',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })

    }

    return (
        <div className="bg-[#F4F3F0]">
            <h3 className="text-3xl p-10 ">Update this a coffee</h3>
            <form onSubmit={handleCoffee} className="p-10">
                {/* form row coffee & quantity */}
                <div className="flex gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="coffee" defaultValue={coffee} placeholder="Coffee Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form row Supplier & Taste */}
                <div className="flex gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form row Category & Details */}
                <div className="flex gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Category Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form row Photo url */}
                <div className="flex gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo Url" className="input input-bordered" />
                        </label>
                    </div>

                </div>
                <input type="submit" value="Update Coffee" className="btn btn-neutral mt-5" />
            </form>
        </div>
    );
};

export default UpdateCoffee;