import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import styles from './FormPage.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getGenres } from '../../redux/actions/actions';

// Función para validar los campos del formulario
const validate = (form) => {
  let errors = {}
  if (!form.name) {
    errors.name = 'Insert a valid name👆🏻'
  } else if (!/^[a-zA-Z\s]+$/.test(form.name)) {
    errors.name = 'The name must only contain letters and spaces';
  }
  if (!form.description) {
    errors.description = 'Insert a valid description👆🏻'
  } else if (form.description.length < 10) {
    errors.description = 'Description must be at least 10 characters';
  }
  if (!form.platforms) {
    errors.platforms = 'Insert valid platforms👆🏻'
  }
  if (!form.image) {
    errors.image = 
    !form.image.includes('https://' || 'http://')
    ? 'Insert a valid URL image👆🏻' 
    : ''
  }
  if (!form.released) {
    errors.released = 'Insert a valid release date👆🏻'
  }
  if (!form.rating) {
    errors.rating = 'Insert a valid rating👆🏻'
  } else if (!/^[1-5]$/.test(form.rating)) {
    errors.rating = 'The rating must be between 1 and 5';
  }
  if (form.genres.length === 0) {
    errors.genres = 'Select at least one genre👆🏻'
  }
  return errors;
}

const FormPage = () => {

  const dispatch = useDispatch()
  const allGenres = useSelector((state) => state.genres)

  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch, allGenres.length])

  const handleGenres = (event) => {
    if (!form.genres.includes(event.target.value)) {
      setForm({
        ...form,
        genres: [...form.genres, event.target.value]
      })
      setErrors(validate({
        ...form, 
        genres: [...form.genres, event.target.value],
      }))
    } 
  }

  const [form, setForm] = useState({
    name: '',
    description: '',
    platforms:[],
    image: '',
    released: '',
    rating: '',
    genres: [],
  })

  // Errores en el formulario
  const [errors, setErrors] = useState({
    name: true,
    description: true,
    platforms: true,
    image: true,
    released: true,
    rating: true,
    genres: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/videogames/create?name=', form)
      .then(res => alert('Game created successfully'))
      .catch(err => alert('Please fill in all the fields'));
    setForm({
      name: '',
      description: '',
      platforms:[],
      image: '',
      released: '',
      rating: '',
      genres: [],
    })
  }

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
    setErrors(validate({
      ...form, 
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.verticalText}>
      <p>CREATE</p>
      <p>VIDEOGAMES</p>
    </div>
      <div className={styles.content}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <section>
          <label htmlFor="name" className={styles.label}>Name: </label>
          <input 
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className={styles.input}
          />
        </section>
        {
          errors.name && (<p className={styles.error}>{errors.name}</p>)
        }
        <section>
          <label htmlFor="description" className={styles.label}>Description: </label>
          <input 
            type="text"
            name="description"
            onChange={handleInputChange}
            value={form.description}
            className={styles.input}
          />
        </section>
        {
          errors.description && (<p className={styles.error}>{errors.description}</p>)
        }
        <section>
          <label htmlFor="platforms" className={styles.label}>Platforms: </label>
          <input 
            type="text"
            name="platforms"
            onChange={handleInputChange}
            value={form.platforms}
            className={styles.input}
          />
        </section>
        {
          errors.platforms && (<p className={styles.error}>{errors.platforms}</p>)
        }
        <section>
          <label htmlFor="image" className={styles.label}>Image link: </label>
          <input 
            type="url"
            name="image"
            onChange={handleInputChange}
            value={form.image}
            className={styles.input}
          />
        </section>
        {
          errors.image && (<p className={styles.error}>{errors.image}</p>)
        }
        <section>
          <label htmlFor="released" className={styles.label}>Released: </label>
          <input 
            type="date"
            name="released"
            onChange={handleInputChange}
            value={form.released}
            className={styles.input}
          />
        </section>
        {
          errors.released && (<p className={styles.error}>{errors.released}</p>)
        }
        <section>
          <label htmlFor="rating" className={styles.label}>Rating: </label>
          <input 
            type="number"
            name="rating"
            onChange={handleInputChange}
            value={form.rating}
            className={styles.input}
          />
        </section>
        {
          errors.rating && (<p className={styles.error}>{errors.rating}</p>)
        }
        <section>
          <label htmlFor="genres" className={styles.label}>Genres: </label>
          <select onChange={(e) => handleGenres(e)} defaultValue='default' className={styles.select} multiple>
            <option value="default" disabled >Select Genre</option>
            {
              allGenres?.map((genre) => (
                <option key={genre.name} value={genre.name}>
                  {genre.name}
                </option>
              ))
            }
          </select>
        </section>
        
        {errors.genres && (<p className={styles.error}>{errors.genres}</p>)}
        <button type="submit" className={styles.button}>Create Videogame</button>
      </form>
      </div>
    </div>
  )
}

export default FormPage
