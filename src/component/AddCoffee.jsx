import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const coffee = form.coffee.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffeeItems = {coffee,quantity,supplier,taste,category,details,photo}
        console.log(coffeeItems)
        fetch('http://localhost:5000/coffee', {
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(coffeeItems)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'Your coffee is added',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
        })

    }
    return (
        <div className="bg-[#F4F3F0]">
            <h3 className="text-3xl p-10 ">Add a coffee</h3>
            <form onSubmit={handleCoffee} className="p-10">
                {/* form row coffee & quantity */}
                <div className="flex gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="coffee" placeholder="Coffee Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered" />
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
                            <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered" />
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
                            <input type="text" name="category" placeholder="Category Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered" />
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
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" />
                        </label>
                    </div>

                </div>
                <input type="submit" value="Add Coffee" className="btn btn-neutral mt-5"/>
            </form>
        </div>
    );
};

export default AddCoffee;