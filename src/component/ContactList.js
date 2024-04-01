import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
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
      <div className='search_box_content'>
        <SearchBox />
        <span className='total'>
          <strong>총 인원: </strong>
          {filteredList.length} 명
        </span>
      </div>

      <Row>
        {filteredList.map((item, index) => (
          <Col md={4} sm={6} xs={12} className='card_list'>
            <ContactItem item={item} key={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ContactList;
