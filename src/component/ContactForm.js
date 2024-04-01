import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [uploadImgUrl, setUploadImgUrl] = useState("/images/img_photo.png");
  const dispatch = useDispatch();
  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber, uploadImgUrl },
    });
    setName("");
    setPhoneNumber("");
    setUploadImgUrl("/images/img_photo.png");
  };

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
      <Form.Group controlId='formFile' className='input_items'>
        <Form.Label className='label'>프로필 사진</Form.Label>
        <div className='profile_photo'>
          <img src={uploadImgUrl} alt='프로필 사진' />
          <Form.Control
            type='file'
            onChange={onchangeImageUpload}
            className='btn_select_photo'
          />
        </div>
      </Form.Group>

      <Form.Group controlId='formName' className='input_items'>
        <Form.Label className='label'>이름</Form.Label>
        <Form.Control
          type='text'
          placeholder='이름을 입력해주세요'
          onChange={(event) => setName(event.target.value)}
          value={name}
          className='text_field'
        />
      </Form.Group>

      <Form.Group controlId='formContact' className='input_items'>
        <Form.Label className='label'>전화번호</Form.Label>
        <Form.Control
          type='number'
          placeholder='전화번호를 입력해 주세요'
          onChange={(event) => setPhoneNumber(event.target.value)}
          value={phoneNumber}
          className='text_field'
        />
      </Form.Group>

      <Button type='submit' className='btn_add'>
        추가하기
      </Button>
    </Form>
  );
};

export default ContactForm;
