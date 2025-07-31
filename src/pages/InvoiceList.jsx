import React, { useState } from "react";
import ReuseTable from "./ReuseTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react"; 

const tableHeading = {
  column1: "Invoice No.",
  column2: "Date",
  column3: "Name",
  column4: "Status",
  column5: "Method",
  column6: "Amount",
  column7: "Action",
};

const invoiceData = [
  {
    id: "INV001",
    date: "30/07/2025",
    name: "Arun",
    status: "Paid",
    method: "Credit Card",
    amount: "$250",
  },
  {
    id: "INV002",
    date: "29/07/2025",
    name: "Sanjay",
    status: "Paid",
    method: "Cash",
    amount: "$250",
  },
  {
    id: "INV003",
    date: "06/08/2025",
    name: "George",
    status: "Unpaid",
    method: "PayPal",
    amount: "$250",
  },
];

const InvoiceList = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [invoiceNo, setInvoiceNo] = useState();
  const [name, setName] = useState();
  const [status, setStatus] = useState("Choose payType");
  const [method, setMethod] = useState("Choose Payment Mode");
  const [amount, setAmount] = useState();
  const [date, setDate] = useState(new Date());

  function submitForm() {
    let newInvoiceData = {
      id: invoiceNo,
      date: date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
      name: name,
      status: status,
      method: method,
      amount: amount,
    };
    invoiceData.push(newInvoiceData);
    setShowCreateForm(false);
    setInvoiceNo();
    setName();
    setStatus("Choose payType");
    setMethod("Choose Payment Mode");
    setAmount();
  }

  return (
    <>
      <div className="text-right m-5">
        <Button
          onClick={() => setShowCreateForm(true)}
          className="mb-4"
          style={{ backgroundColor: "#333", color: "white" }}
        >
          <Plus size={18} />
          Add New Invoice
        </Button>
        <ReuseTable thead={tableHeading} tbody={invoiceData} />
      </div>
      {showCreateForm && (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-end">
          <div className="w-full max-w-2xl h-full bg-white p-6 overflow-y-auto shadow-lg">
            <form>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-gray-900 bg-gray-300 font-bold pl-2">
                    Invoice Information
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="invoice-no"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Invoice No:
                      </label>
                      <input
                        id="invoice-no"
                        name="invoice-no"
                        type="text"
                        value={invoiceNo}
                        onChange={(e) => setInvoiceNo(e.target.value)}
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-black placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="invoice-date"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Date:
                      </label>
                      <div className="mt-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <button
                              type="button"
                              className="w-full text-left bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center justify-between"
                            >
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-2 h-4 w-4 text-gray-500" />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              captionLayout="dropdown"
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="customer-name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Customer Name:
                      </label>
                      <input
                        id="customer-name"
                        name="customer-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline outline-black placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="amount"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Amount:
                      </label>
                      <input
                        id="amount"
                        name="amount"
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline outline-black placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="status"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Payment Status:
                      </label>
                      <select
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="mt-2 w-full rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900  outline outline-black focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      >
                        <option value="Choose payType" disabled>
                          Choose PayType
                        </option>
                        <option value="Paid">Paid</option>
                        <option value="Partially Paid">Partially Paid</option>
                        <option value="Unpaid">Unpaid</option>
                      </select>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="payment-mode"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Payment Mode
                      </label>
                      <select
                        id="payment-mode"
                        name="payment-mode"
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                        className="mt-2 w-full rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900  outline outline-black focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      >
                        <option value="Choose Payment Mode" disabled>
                          Choose Payment Mode
                        </option>
                        <option value="Cash">Cash</option>
                        <option value="Debit/Credit Card">
                          Debit/Credit Card
                        </option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Online/UPI">Online/UPI</option>
                      </select>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Street Address
                      </label>
                      <input
                        id="street-address"
                        name="street-address"
                        type="text"
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline outline-black placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-900"
                      >
                        City
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline outline-black focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-900"
                      >
                        State / Province
                      </label>
                      <input
                        id="state"
                        name="state"
                        type="text"
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline outline-black focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="zip"
                        className="block text-sm font-medium text-gray-900"
                      >
                        ZIP / Postal Code
                      </label>
                      <input
                        id="zip"
                        name="zip"
                        type="text"
                        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline outline-black focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold text-gray-900"
                  onClick={() => setShowCreateForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => submitForm()}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default InvoiceList;
