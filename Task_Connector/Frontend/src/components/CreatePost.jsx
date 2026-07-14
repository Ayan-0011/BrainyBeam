import { useState } from "react";
import axios from "axios";

function CreatePost() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!image || !caption) {
      return alert("Fill all fields");
    }

    const formData = new FormData();

    formData.append("image", image);
    formData.append("caption", caption);

    try {
      await axios.post( "http://localhost:3000/create-post", formData);

      alert("Uploaded Successfully");

      setImage(null);
      setCaption("");

      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])} />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}/>

      <br />
      <br />

      <button>Upload</button>
    </form>
  );
}

export default CreatePost;