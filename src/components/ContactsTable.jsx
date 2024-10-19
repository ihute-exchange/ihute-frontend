import React, { useEffect, useState } from "react";
import { LuChevronRight, LuMoreHorizontal } from "react-icons/lu";
import { Link } from "react-router-dom";
import Contacts from "../utils/Contacts";
import { FormatPID } from "../utils/FormatPID";

function ContactsTable() {
  const [contactsSearch, setContactsSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const handleSearch = () => {
    const searchTerm = contactsSearch.toLowerCase();
    const filtered = Contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchTerm) ||
        contact.email.includes(searchTerm)
    );
    setFilteredContacts(filtered);
  };
  useEffect(() => {
    handleSearch();
  }, [contactsSearch]);
  const handleCheckboxChange = (contacts) => {
    setSelectedContacts((prevSelected) => {
      if (prevSelected.includes(contacts)) {
        // If already selected, remove it
        return prevSelected.filter((t) => t !== contacts);
      } else {
        // If not selected, add it
        return [...prevSelected, contacts];
      }
    });
  };
  return (
    <div className="w-full ring-1 ring-stone-100 rounded-2xl flex flex-col overflow-hidden relative">
      {/* card header */}
      <div className="flex items-center justify-between p-5 flex-wrap max-md:items-start gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-base font-medium text-lightBlackText/80">
            You have 223 contacts
          </h1>
          <Link
            to={"/"}
            className="text-sm w-fit font-medium text-mainColor hover:underline text-lightBlackText/60"
          >
            Add Contact
          </Link>
        </div>
        <div className="flex items-center justify-end gap-4 max-md:w-full">
          <input
            onKeyUp={handleSearch}
            value={contactsSearch}
            onChange={(e) => setContactsSearch(e.target.value)}
            onKeyDown={handleSearch}
            disabled={selectedContacts.length !== 0 ? true : false}
            type="text"
            placeholder="Search..."
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-base placeholder:text-lightBlackText/30"
          />
        </div>
      </div>
      {/* table */}
      <div className="w-full h-fit overflow-x-auto min-h-[400px] relative">
        <div
          className={`transition-all ${
            selectedContacts.length !== 0
              ? "h-[60px] bg-mainColor/5 flex items-center gap-5 p-3 sticky top-0 left-0"
              : "h-0"
          }`}
        >
          {selectedContacts.length !== 0 && (
            <>
              <button
                onClick={() => setSelectedContacts([])}
                className="h-full px-4 rounded-xl flex items-center justify-center bg-mainColor text-white text-sm font-semibold"
              >
                Move to Trash
              </button>
              <button
                onClick={() =>
                  setSelectedContacts(filteredContacts.map((t) => t.name))
                }
                className="h-full rounded-xl flex items-center justify-center bg-transparent text-mainColor text-sm font-semibold"
              >
                Select all
              </button>
              <button
                onClick={() => setSelectedContacts([])}
                className="h-full rounded-xl flex items-center justify-center bg-transparent text-stone-500 text-sm font-semibold"
              >
                Cancel
              </button>
            </>
          )}{" "}
        </div>
        <table className="w-full text-left table-fixed max-lg:table-auto">
          <thead className="text-sm text-lightBlackText/70 Capitalize bg-stone-100 border-b border-t border-stone-200">
            <tr>
              <th
                scope="col"
                className="truncate py-3 w-[100px] text-center px-2 max-lg:px-7"
              ></th>
              <th scope="col" className="truncate py-3">
                Person/Company
              </th>
              <th scope="col" className="truncate py-3">
                Email
              </th>
              <th scope="col" className="truncate py-3">
                PID
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.sort((a, b) => a.name.localeCompare(b.name)).map((contact, index) => (
              <tr
                key={index}
                className={`text-base whitespace-nowrap border-b border-stone-200 text-lightBlackText/80 
          ${
            selectedContacts.includes(contact.name)
              ? "bg-mainColor/5 "
              : "bg-transparent "
          }
        `}
              >
                <td className="truncate py-2 px-2 text-center">
                  <label className="flex items-center whitespace-nowrap justify-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden peer"
                      checked={selectedContacts.includes(contact.name)}
                      onChange={() => handleCheckboxChange(contact.name)}
                    />
                    <div className="w-4 h-4 border-2 border-stone-300/80 rounded-md peer-checked:border-mainColor/80 peer-checked:bg-mainColor/40 transition-all duration-300"></div>
                  </label>
                </td>
                <td className="truncate py-2 pr-5 text-left font-medium text-lightBlackText/80 tracking-tight flex items-center gap-2">
                  <div className="h-[30px] min-w-fit aspect-square rounded-full overflow-hidden">
                    {contact.pfp ? (
                      <img
                        src={contact.pfp}
                        className="h-fit min-h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full text-lg aspect-square rounded-full flex items-center justify-center font-semibold bg-mainColor text-white">
                          {contact.name.charAt(0)}
                        </div>
                    )}
                  </div>
                  {contact.name}
                </td>
                <td className="truncate py-2 pr-5 text-text-color-black">
                  {contact.email}
                </td>
                <td className="truncate py-2 pr-5 capitalize">{FormatPID(contact.pid)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactsTable;
