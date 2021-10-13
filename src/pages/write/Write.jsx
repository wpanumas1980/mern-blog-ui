import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Context } from '../../components/context/Context';
import './write.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Write() {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = e => {

    const formData = new FormData();
    formData.append('files', e.target.files[0]);
    axios
      .post(`${BASE_URL}/upload`, formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    // const author = user.user.id;
    // const aut = [3,5];
    const categories = [3, 5];
    const newPost = {
      title,
      description,
      categories
      // author
    };

    const formData = new FormData();
    formData.append('data', newPost);
    formData.append('files.image', file);


    // if (file) {
    //   const data = FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   newPost.image = filename;
    //   try {

    //   } catch (error) {

    //   }
    // }
    // console.log('newPost: ', formData);
    const res = await axios.post(`${BASE_URL}/posts`, formData);
    console.log('res =>', res);
  }
  // console.log('User: ', user);
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus" />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleUpload}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story"
            type="text"
            className="writeInput writeText"
            onChange={e => setTitle(e.target.value)}
          >
          </textarea>
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
      </form>
    </div>
  )
}
