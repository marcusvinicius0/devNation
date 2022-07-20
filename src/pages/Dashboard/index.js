import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import firebase from 'firebase';

import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import PublicModal from '../../components/PublicationModal';
import NewsBox from '../../components/NewsBox';
import ChatModal from '../../components/ChatModal';
import ModalEditPublication from '../../components/ModalEditPublication';

import banner from '../../assets/banner.png';

import { AiFillPicture } from 'react-icons/ai';
import { FiVideo } from 'react-icons/fi';
import { FaUsers, FaUserCircle } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { FaEnvelopeOpenText } from 'react-icons/fa';

import avatar from '../../assets/avatar.png';

import { AuthContext } from '../../contexts/auth';
import Feed from '../../components/Feed';

export default function Dashboard() {
    const { signOut, user } = useContext(AuthContext);
    const [showPostModal, setShowPostModal] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [editPublication, setEditPublication] = useState(false)


    function toggleEditPublication() {
        setEditPublication(!editPublication)
    };

    function togglePostModal() {
        setShowPostModal(!showPostModal)
    };

    return (
		<>
			<Header />
        <div className={styles.dashboard}>
            <div className={styles.sideBox}>
                <div className={styles.bannerBox}>
                    <img src={user.bannerUrl === null ? banner : user.bannerUrl} alt="banner" />
                </div>
                <div className={styles.pictureBox}>
                    <Link to="/profile">
                        {avatarUrl === null ?
                            <img src={avatar} alt="foto avatar" />
                            :
                            <img src={avatarUrl} alt="foto usuario" />
                        }
                    </Link>
                </div>
                <p className={styles.userName}>{user.name}</p>
                <p className={styles.role}>{user.role}</p>
                <hr />
                <div className={styles.routesBox}>
                    <Link to="/profile">
                        <span>
                            <FaUserCircle color="var(--soft-blue)" size={24} />
                            <p>Meu perfil</p>
                        </span>
                    </Link>

                    <Link to="/followers">
                        <span>
                            <FaUsers color="var(--soft-blue)" size={24} />
                            <p>Seguidores</p>
                        </span>
                    </Link>

                    <span>
                        <FaEnvelopeOpenText color="var(--soft-blue)" size={22} />
                        <p>Meus projetos</p>
                    </span>
                    <span className={styles.logoutBox} onClick={signOut}>
                        <IoLogOut color="var(--soft-blue)" size={25} />
                        <p>Sair</p>
                    </span>
                </div>
            </div>
            <div className={styles.mainFeedContainer}>
                <div className={styles.createPublicationContainer}>
						<div className={styles.contentBox}>
							{avatarUrl === null ? <img src={avatar} alt="user-profile" /> : <img src={avatarUrl} alt="user-profile" />}
							<div
									className={styles.publication}
									onClick={() => togglePostModal()}

							>
									<p>No que você está pensando?</p>
							</div>
						</div>
						<span>
							<AiFillPicture size={25} color="var(--soft-blue)" onClick={() => togglePostModal()} />
							<FiVideo size={25} color="var(--soft-blue)" onClick={() => togglePostModal()} />
						</span>
					 </div>
					 <Feed />
            </div>
				<NewsBox />
            <ChatModal />

            {showPostModal && (
                <PublicModal
                    close={togglePostModal}
                />
            )}

            {editPublication && (
                <ModalEditPublication
                    close={toggleEditPublication}
                />
            )}
        </div>
		</>
    )
}