import React from 'react';
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
    console.log(data)
    
        const billingData = {
            fullName: data.fullName,   
            email: data.email,
            phone: data.phone,
            paidAmount:data.paidAmount

          
        }

        const url = `https://hydro-mountie-84173.herokuapp.com/add-billing`

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(billingData),
        })
        .then(res => res.json())
        .then(data => {
            alert(' Bill is successfully added')  
            //  history.push('/dashboard/addAdmin');
        })

    };

    return (
       <>
         <div className="container  p-3 mb-2  rounded col-md-8 col-sm-8 col-6">
            <h3 className="text-center">Billing</h3>
            <div className="row pt-3 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="col-10 form-group mx-auto">
                        <label className="mb-1"><b>Full Name</b></label>
                        <input type= "text" {...register("fullName", { required: true, maxLength: 20 })} />


                    </div>
                    <div className="col-10 form-group mx-auto mt-3">
                        <label className="mb-1"><b>Email</b></label>
                        
                        <input type="email" {...register("email", {  required: true })} />
                       
                    </div>
                    <div className="col-10 form-group mx-auto mt-3">
                        <label className="mb-1"><b>Phone</b></label>
                        
                        <input type="number" {...register("phone", {  required: true, min:11 })} />

                    </div>
                    <div className="col-10 form-group mx-auto mt-3">
                        <label className="mb-1"><b>Paid Amount</b></label><br />
                        <input type="number" {...register("paidAmount", {   required: true, })} />


                    </div>
                    <div className="col-10 text-center w-100 mt-3">

                        <button className="w-50" type="submit" class="btn btn-success">Add Billing</button>

                    </div>

                </form>
            </div>
        </div>
       </>
      
   
    );
};

export default Form;