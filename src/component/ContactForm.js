import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();
  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber, uploadImgUrl },
    });
    setName("");
    setPhoneNumber("");
    setUploadImgUrl("");
  };
  const [uploadImgUrl, setUploadImgUrl] = useState("");

  const onchangeImageUpload = (e) => {
    const { files } = e.target;
    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setUploadImgUrl(reader.result);
    };
  };
  return (
    <Form onSubmit={addContact}>
      <Form.Group className='mb-3' controlId='formName'>
        <Form.Label>이름</Form.Label>
        <Form.Control
          type='text'
          placeholder='이름을 입력해주세요'
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formContact'>
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type='number'
          placeholder='전화번호를 입력해 주세요'
          onChange={(event) => setPhoneNumber(event.target.value)}
          value={phoneNumber}
        />
      </Form.Group>

      <Form.Group controlId='formFile' className='mb-3'>
        <Form.Label>프로필 사진</Form.Label>
        <Form.Control type='file' onChange={onchangeImageUpload} />
        <img src={uploadImgUrl} alt='img' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        추가하기
      </Button>
    </Form>
  );
};

export default ContactForm;
