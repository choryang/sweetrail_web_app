import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import {useDispatch, useSelector} from "react-redux";
import FollowItem from "components/fragments/FollowItem";
import {FaTimes} from "react-icons/fa"
import "css/modal.scss";
import "css/common.scss";
import { getFollowerList } from "_actions/follow_action";

function FollowerModal (props) {

    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isAuth);
    const [FollowList, setFollowList] = useState([]);

    useEffect(() => {
        dispatch(getFollowerList(props.userId)).then((response) => {
            setFollowList(response.payload);
        });
    },[isAuth]);


    return (
        <Modal
        isOpen={props.isOpen}
        //onRequestClose={closeFollowModal}
        className="common-modal"
        overlayClassName="common-modal-overlay"
        contentLabel="Follow Modal"
        >
            <div className="common-modal-header">
                <span className="common-modal-title">팔로워</span>
                <span className="common-modal-close" onClick={props.close}><FaTimes /></span>
            </div>

            <div className="modal-follow-container">
            {FollowList.map((follow, index) => {
                return (
                    <FollowItem userId={follow.followerId} img={follow.followerImg} name={follow.followerName} key={follow.id}/>
                );
            })}
            </div>
        </Modal>    
    );

}

export default FollowerModal;