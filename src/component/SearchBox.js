import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [filterName, setFilterName] = useState("");
  const dispatch = useDispatch();

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH", payload: { filterName } });
  };

  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col>
          <Form.Control
            type='text'
            placeholder='이름을 입력해주세요'
            onChange={(event) => setFilterName(event.target.value)}
            className='text_field'
          />
        </Col>
        <Col>
          <Button variant='primary' type='submit' className='btn_search'>
            검색하기
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
