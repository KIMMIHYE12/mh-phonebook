import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const filterName = useSelector((state) => state.filterName);

  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (filterName !== "") {
      let list = contactList.filter((item) => item.name.includes(filterName));

      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [filterName, contactList]);
  return (
    <div>
      <SearchBox />
      <div>
        갯수: {filteredList.length}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
