import React from "react";

const ContactItem = ({ item }) => {
  return (
    <div className='card_content'>
      <div className='card_photo'>
        <img src={item.uploadImgUrl} alt={`${item.name} 프로필 사진`} />
      </div>
      <div className='name'>{item.name}</div>
      <div className='phone'>{item.phoneNumber}</div>
    </div>
  );
};

export default ContactItem;
