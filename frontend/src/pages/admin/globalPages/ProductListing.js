import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'
import ImageUploader from 'react-images-upload';

const ProductAddMain = () => {


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [images, setImages] = useState([]);

    const onRemove = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };


    return (
        <>
            <div className="App mt-5">
                <div className='AppGlass container produtlisting'>
                    <Sidebar />
                    <div class="formMain p-5">
                        <div class="mt-5">
                            <div class="row g-3">
                                <div class="col-8 shadow p-3 bg-white rounded text-dark">
                                    <h2 class="mb-2">Create A New Product</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div class="form-group">
                                            <label>
                                                Title:
                                            </label>
                                            <input
                                                type="text"
                                                className='form-control w-100'
                                                name="title"
                                                value={formData.username}
                                                onChange={handleChange}
                                                placeholder="Title"
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label>
                                                Description:
                                            </label>
                                            <input
                                                type="text"
                                                name="description"
                                                className='form-control'
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Description"
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label>
                                                Media:
                                            </label>
                                            <ImageUploader
                                                withIcon={true}
                                                buttonText='Choose images'
                                                onChange={(files) => setImages(files)}
                                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                maxFileSize={5242880}
                                            />

                                            <div>
                                                <h2>Uploaded Images:</h2>
                                                {images.map((image, index) => (
                                                    <div key={index}>
                                                        <img src={URL.createObjectURL(image)} alt={`uploaded-${index}`} style={{ width: '100%', height: 'auto' }} />
                                                        <button onClick={() => onRemove(index)}>Remove</button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <button class="btn" type="submit">Submit</button>
                                    </form>
                                </div>
                                <div class="col-3 shadow p-3 bg-white rounded text-dark"> sss</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductAddMain;