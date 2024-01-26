import { useState } from 'react';
import { useAddPlayerMutation } from '../API/index';

const NewPlayerForm = () => {
  const [addNewPlayer] = useAddPlayerMutation();
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    status: '',
    imageURL: '',
    teamID: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewPlayer(formData)
      .unwrap()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });

    setFormData({
      name: '',
      breed: '',
      status: '',
      imageURL: '',
      teamID: '',
    })
  }

  return (
    <div>
      <h1>New Player Form</h1>
      <form className='addPlayer' name='addPlayer' onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type='text' 
            name='name'
            value={formData.name} 
            onChange={handleFormChange} />
        </label>
        <label>
          Status:
          <input 
          type='text' 
          name='status'
          value={formData.status} 
          onChange={handleFormChange} />
        </label>
        <label>
          Breed:
          <input 
          type='text'
          name='breed'
          value={formData.breed} 
          onChange={handleFormChange} />
        </label>
        <label>
          Image:
          <input 
          type='file' 
          name='image'
          accept='image/*' 
          onChange={handleFormChange} />
        </label>
        <button type='submit'>Add Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
