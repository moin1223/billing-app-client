import React from 'react';
import axios from "axios";
import DataTable from "react-data-table-component"
import { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Form from './Form/Form';

const BillingList = () => {
  const [modal, setmodal] = useState(false)
  // const [search, setSearch] = useState("");
  const [billingList, setbillingList] = useState([]);
  // const [filterbillingList, setFilterbillingList] = useState([]);

  const getBillingList = async () => {
    try {
      const response = await axios.get("https://hydro-mountie-84173.herokuapp.com/billing-list")
      setbillingList(response.data);
      // setFilterbillingList(response.data)
     

    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getBillingList();
  }, [])


  // useEffect((search) => {
  //   const result = billingList.filter(bill => {
  //     return bill.name.toLowerCase().match(search.toLowerCase());
  //   })
  //   setFilterbillingList(result)

  // }, [search,billingList])

  //delete
  const handleDelete = (_id) => {
    console.log("click", _id)

    fetch(`https://hydro-mountie-84173.herokuapp.com/deleteBilling/${_id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(result => {
        if (result) {

        }

        alert('Service is successfully deleted');
        // history.replace('/');
      });
  }

  const columns = [
    {
      name: "Billing ID",
      selector: row => row._id,
      sortable: true
    },
    {
      name: "Full Name",
      selector: row => row.fullName,
      sortable: true
    },
    {
      name: "Email",
      selector: row => row.email
    },
    {
      name: "Phone",
      selector: row => row.phone
    },
    {
      name: "Paid Amount",
      selector: row => row.paidAmount
    },
    {
      name: "Action",

      cell: (row) => <button>Edit</button>,



    },
    {
      name: "",

      cell: (row) => <button onClick={() => handleDelete(row._id)}>Delete</button>,


    },
  ]
  return <DataTable
    title="Billing List"
    columns={columns}
    // data={filterbillingList}
    data={billingList}
    pagination
    fixedHeader
    fixedHeaderScrollHeight='450px'
    actions={
      <div>
        <Modal
          size="lg"
          isOpen={modal}
          toggle={() => setmodal(!modal)}
        >
          <ModalHeader
            toggle={() => setmodal(!modal)}
          >
            popup
          </ModalHeader>
          <ModalBody>
            <div>
              <Form />
            </div>

          </ModalBody>
        </Modal>
        <button onClick={() => setmodal(true)} className='btn mt-3' style={{ backgroundColor: "blue" }}>
          Add New Bill

        </button>
      </div>
    }
    subHeader
    subHeaderComponent={
      <input
        type="text"
        placeholder='Search here'
        className='w-25 from-control'
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
      />
    }
    subHeaderAlign="left"

  />


};

export default BillingList;