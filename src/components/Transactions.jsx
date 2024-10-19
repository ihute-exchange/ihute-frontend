import React, { useEffect, useState } from "react";
import { LuChevronRight, LuMoreHorizontal } from "react-icons/lu";
import { Link } from "react-router-dom";
import TransactionHistory from "../utils/Transactions";
import Money from "../utils/Money";

function Transactions() {
  const [transactionSearch, setTransactionSearch] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [selectedTransactions, setSelectedTransactions] = useState([]);
  const handleSearch = () => {
    const searchTerm = transactionSearch.toLowerCase();
    const filtered = TransactionHistory.filter(
      (transaction) =>
        transaction.name.toLowerCase().includes(searchTerm) ||
        transaction.date.includes(searchTerm)
    );
    setFilteredTransactions(filtered);
  };
  useEffect(() => {
    handleSearch();
  }, [transactionSearch]);
  const handleCheckboxChange = (transaction) => {
    setSelectedTransactions((prevSelected) => {
      if (prevSelected.includes(transaction)) {
        // If already selected, remove it
        return prevSelected.filter((t) => t !== transaction);
      } else {
        // If not selected, add it
        return [...prevSelected, transaction];
      }
    });
  };
  return (
    <div className="w-full ring-1 ring-stone-100 rounded-2xl flex flex-col mb-5 overflow-hidden relative">
      {/* card header */}
      <div className="flex items-center justify-between p-5 flex-wrap max-md:items-start gap-4">
        <div className="flex flex-col">
          <h1 className="text-xl font-medium text-lightBlackText/80">
            Transactions
          </h1>
          <h1 className="text-sm font-medium text-lightBlackText/60">
            Recent transactions report
          </h1>
        </div>
        <div className="flex items-center justify-end gap-4 max-md:w-full">
          <input
            onKeyUp={handleSearch}
            value={transactionSearch}
            onChange={(e) => setTransactionSearch(e.target.value)}
            onKeyDown={handleSearch}
            disabled={selectedTransactions.length !== 0 ? true : false}
            type="text"
            placeholder="Search..."
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-base placeholder:text-lightBlackText/30"
          />
          <button
            className="min-w-fit h-8 aspect-square flex items-center justify-center bg-stone-100 rounded-xl
                 text-lightBlackText/70 hover:text-mainColor"
          >
            <LuChevronRight className="text-xl" />
          </button>
        </div>
      </div>
      {/* table */}

      <div className="w-full h-full overflow-x-auto min-h-[400px] relative">
        <div
          className={`transition-all ${
            selectedTransactions.length !== 0
              ? "h-[60px] bg-mainColor/5 flex items-center gap-5 p-3 sticky top-0 left-0"
              : "h-0"
          }`}
        >
          {selectedTransactions.length !== 0 && (
            <>
              <button
                onClick={() => setSelectedTransactions([])}
                className="h-full px-4 rounded-xl flex items-center justify-center bg-mainColor text-white text-sm font-semibold"
              >
                Move to Trash
              </button>
              <button
                onClick={() =>
                  setSelectedTransactions(
                    filteredTransactions.map((t) => t.name)
                  )
                }
                className="h-full rounded-xl flex items-center justify-center bg-transparent text-mainColor text-sm font-semibold"
              >
                Select all
              </button>
              <button
                onClick={() => setSelectedTransactions([])}
                className="h-full rounded-xl flex items-center justify-center bg-transparent text-stone-500 text-sm font-semibold"
              >
                Cancel
              </button>
            </>
          )}{" "}
        </div>
        <table className="w-full text-left">
          <thead className="text-xs text-lightBlackText/70 uppercase bg-stone-100 border-b border-t border-stone-200">
            <tr>
              <th scope="col" className="truncate py-3 text-center w-[100px]">
                N<sup>o</sup>
              </th>
              <th scope="col" className="truncate py-3">
                Name
              </th>
              <th scope="col" className="truncate py-3">
                Date
              </th>
              <th scope="col" className="truncate py-3">
                Type
              </th>
              <th scope="col" className="truncate py-3">
                Amount
              </th>
              <th scope="col" className="truncate py-3 w-[100px]">
                Status
              </th>
              <th
                scope="col"
                className="truncate py-3 w-[120px] text-center px-4"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <tr
                key={index}
                className={`text-base whitespace-nowrap border-b border-stone-200 text-lightBlackText/80 
          ${
            selectedTransactions.includes(transaction.name)
              ? "bg-mainColor/5 "
              : "bg-transparent "
          }
        `}
              >
                <td className="truncate py-2 px-4 text-center">
                  {index + 1}
                </td>
                <td className="truncate py-2 pr-5 text-left font-medium text-lightBlackText/80 tracking-tight flex items-center gap-2">
                  {transaction.name}
                </td>
                <td className="truncate py-2 pr-5">
                  {transaction.date}
                </td>
                <td className="truncate py-2 pr-5">
                  {transaction.type}
                </td>
                <td className="truncate py-2 pr-5 text-text-color-black">
                  ${Money(transaction.amount)}
                </td>
                <td className="truncate py-2 pr-5 capitalize">
                  {transaction.status}
                </td>
                <td className="truncate py-2 max-lg:pr-10 flex items-center justify-center">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden peer"
                      checked={selectedTransactions.includes(transaction.name)}
                      onChange={() => handleCheckboxChange(transaction.name)}
                    />
                    <div className="w-4 h-4 border-2 border-stone-300/80 rounded-md peer-checked:border-mainColor/80 peer-checked:bg-mainColor/40 transition-all duration-300"></div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
