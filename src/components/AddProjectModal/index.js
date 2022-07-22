import { useContext, useState } from 'react';
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi';
import { AiOutlineCloudUpload } from 'react-icons/ai';

import { toast } from 'react-toastify';
import firebase from 'firebase';
import { AuthContext } from '../../contexts/auth';

export default function AddProjectModal({closeModal, reloadProjects}) {
	const { user } =  useContext(AuthContext)
	
	const [imageProjectUrl, setImageProjectUrl] = useState(null);
	const [imageProject, setImageProject] = useState(null);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [repo, setRepo] = useState("");
	const [liveLink, setLiveLink] = useState("");

	async function handleNewProject(e) {
		e.preventDefault()

		let data = { 
			imageProject,
			title,
			description,
			repo, 
			liveLink
		}

		await firebase.storage().ref(`images/${user.uid}/${imageProject.name}`)
            .put(imageProject)
            .then(async () => {
                console.log('Foto enviada com sucesso.')
                await firebase.storage().ref(`images/${user.uid}`)
                    .child(imageProject.name).getDownloadURL()
                    .then(async (url) => {
                        let urlFoto = url
                        await firebase.firestore().collection('projects')
                            .add({
                                imageProjectUrl: urlFoto,
                                title,
                                description,
										  repo,
										  liveLink,
										  user_id: user.uid
                            })
                            .then(() => {
                                toast.success('Projeto adicionado com sucesso.');
										  reloadProjects();
										  closeModal();
										  setImageProjectUrl(null);
										  setImageProject(null);
										  setTitle("");
										  setDescription("");
										  setRepo("");
										  setLiveLink("");
                            })
                            .catch( (error) => {
                                toast.error('Ops, algo deu errado no DB.')
                            })
                        
                    })
                    .catch( (error) => {
                        toast.error('Ops, algo deu errado.')
                    })
            })
            .catch( (error) => {
                toast.error('Ops, algo deu errado.')
            })
	}

	function handleFile(e) {
		if(e.target.files[0]) {
			const image = e.target.files[0]
			if(image.type === 'image/jpeg' || image.type === 'image/png' || image.type === 'image/jpg' || image.type === 'image/gif') {
				setImageProject(image)
				setImageProjectUrl(URL.createObjectURL(image))
			} else {
				toast.warning('Envie uma imagem do tipo JPG, JPEG ou PNG.')
				setImageProject(null)
				return null
			}
		}
	}

   return(
      <div className={styles.containerModal}>
			<div className={styles.contentModal}>
				<header>
					<h2>Adicionar projeto</h2>
					<button onClick={closeModal}><FiX size={24} /></button>
				</header>
				<form onSubmit={handleNewProject} >
					<div className={styles.inputFile}>
						<AiOutlineCloudUpload size={50} />
						<input type="file" onChange={handleFile} />
						{imageProject !== null && <img src={imageProjectUrl} alt="" />}
					</div>
					<label>
						Título do projeto
						<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
					</label>
					<label>
						Descrição do projeto
						<textarea value={description} onChange={(e) => setDescription(e.target.value)} />
					</label>
					<label>
						Link do projeto
						<input type="text" value={liveLink} onChange={(e) => setLiveLink(e.target.value)} />
					</label>
					<label>
						Link do repositório do projeto
						<input type="text" value={repo} onChange={(e) => setRepo(e.target.value)} />
					</label>
					<button>Adicionar</button>
				</form>
			</div>
		</div>
   )
}