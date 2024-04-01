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
        <span className='total'>총 인원: {filteredList.length} 명</span>
      </div>

      <Row className='card_list'>
        {filteredList.map((item, index) => (
          <Col lg={4}>
            <ContactItem item={item} key={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ContactList;
