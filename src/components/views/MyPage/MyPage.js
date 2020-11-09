import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import {useDispatch} from "react-redux";
import { withRouter } from "react-router-dom";
import { auth } from "_actions/user_action";
import MainNav from "components/views/NavBar/MainNav";
import JourneyThumb from "components/views/Journey/JourneyThumb";
import { journeyMypage } from "_actions/journey_action";
import example from "images/mainboat.png"
import example2 from "images/mainbeach.jpg"
import userimg from "images/user.png";



function MyPage(props) {

  // const [UserName, setUserName] = useState("");
  // const [MyJour, setMyJour] = useState([]);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(auth()).then((response) => {
  //     setUserName(response.payload.name);
  //   });

  //   dispatch(journeyMypage()).then((response) => {
  //     setMyJour(response.payload);
  //   })
    
  // }, []);

  const [FollowVisible, setFollowVisible] = useState(false);

  const onClickEdit = () => {
    props.history.push("mypage/profile-edit");
  }

  const openFollowModal = () => {
    setFollowVisible(true);
  }

  const closeFollowModal = () => {
    setFollowVisible(false);
  }

  const MyJour = [
    { 
      id: 1,
      name: "Still Stand Tall1",
      username: "aaaaa",
      category: "geek",
      accompany: "",
      img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    { 
      id: 2,
      name: "Still Stand Tall2",
      username: "aaaaa",
      category: "geek",
      accompany: "",
      img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    { 
      id: 3,
      name: "Still Stand Tall3",
      username: "aaaaa",
      category: "geek",
      accompany: "",
      img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    { 
      id: 4,
      name: "Still Stand Tall4",
      username: "aaaaa",
      category: "geek",
      accompany: "",
      img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    { 
      id: 5,
      name: "Still Stand Tall5",
      username: "aaaaa",
      category: "geek",
      accompany: "",
      img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    { 
      id: 6,
      name: "Still Stand Tall6",
      username: "aaaaa",
      category: "geek",
      accompany: "",
      img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    { 
      id: 7,
      name: "Still Stand Tall7",
      username: "aaaaa",
      category: "geek",
      accompany: "",
      img: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },

  ];

  return (
    <>
      <MainNav />
        <div className="mypage-info">
          <div className="mypage-profile-img"></div>
          <div className="mypage-profile-contents">
            <div className="mypage-profile-first">
              <span className="mypage-username">Username</span>
              <button className="mypage-profile-edit-btn" onClick={onClickEdit}>프로필편집</button>
            </div>
            <div className="mypage-profile-others">
              <span className="mypage-profile-text follow" onClick={openFollowModal}>팔로워</span>
              <Modal
                isOpen={FollowVisible}
                //onAfterOpen={afterOpenModal}
                onRequestClose={closeFollowModal}
                className="modal-follow"
                overlayClassName="modal-follow-overlay"
                contentLabel="Example Modal"
              >
                <div className="modal-follow-header">
                  <span className="modal-follow-title">팔로우</span>
                  <span className="modal-follow-close" onClick={closeFollowModal}><i class="fa fa-times" aria-hidden="true"></i></span>
                </div>
                
                <div className="modal-follow-container">
                  <div className="modal-follow-item">
                    <div className="modal-follow-user">
                      <img className="follow-profile-img" src={userimg} alt="userprofile"/>
                      <div className="follow-name">name</div>
                    </div>
                    <button>팔로우</button>
                  </div>
                </div>
              </Modal>
              <span className="mypage-profile-text margin">1000</span>
              <span className="mypage-profile-text follow" onClick={openFollowModal}>팔로잉</span>
              <span className="mypage-profile-text">1000</span>
            </div>
            <div className="mypage-profile-others">
              <span className="mypage-profile-text">Journey Type</span>
              <span>geek</span>
            </div>
            <div className="mypage-profile-others">
              <span className="mypage-profile-text">Life Style</span>
              <span>cafe</span>
            </div>
          </div>
        </div>
      
      <div className="mypage-container">
      <div className="common-catergory">팔로우</div>
      <div className="common-journey">
        {MyJour.map((journey, index) => {
          return (
            <JourneyThumb id={journey.id} name={journey.name} category={journey.category} accompany={journey.accompany} img={journey.img} key={index}/>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default withRouter(MyPage);

 