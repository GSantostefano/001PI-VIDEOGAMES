import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import styles from './FormPage.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getGenres } from '../../redux/actions/actions';
import mensajeBAD from "../../assets/mensajeBAD.png";
import mensajeOK from "../../assets/mensajeOK.png";


// Función para validar los campos del formulario

const FormPage = () => {

  const dispatch = useDispatch()
  const allGenres = useSelector((state) => state.genres)
  const videogames = useSelector((state) => state.videogames);

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [form, setForm] = useState({
            name: '',
            description: '',
            platforms:[],
            image: '',
            released: '',
            rating: '',
            genres: [],
                                   });

  
  useEffect(() => {
    if(allGenres.length===0){
    dispatch(getGenres());
  }
  }, [dispatch, allGenres.length])


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

    axios.post('http://localhost:3001/videogames/create', form)
      .then((res) => {
        setSuccessMessage('Game created successfully');
        setErrorMessage('');
      })
      .catch((err) => {
        setErrorMessage("something has gone wrong" );
        setSuccessMessage('');
      });

    setForm({
      name: '',
      description: '',
      platforms: '',
      image: '',
      released: '',
      rating: '',
      genres: [],
    });
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

const handleGenres = (event, genreName) => {
    if (event.target.checked) {
      setForm({
        ...form,
        genres: [...form.genres, genreName],
      });
    } else {
      setForm({
        ...form,
        genres: form.genres.filter((name) => name !== genreName),
      });
    }
  };

  






  const closeAlerts = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };
  const validate = (form) => {
    let errors = {}

    if (!form.name) {
      errors.name = '🎮Insert a valid name🕹️';
    } else if (!/^[a-zA-Z0-9\s]+$/.test(form.name)) {
      errors.name = 'The name must only contain letters, numbers, and spaces';
    }
    
    if (!form.description) {
      errors.description = '🎮Insert a valid description🕹️'
    } else if (form.description.length < 10) {
      errors.description = 'Description must be at least 10 characters';
    }
    if (!form.platforms) {
      errors.platforms = '🎮Insert valid platforms🕹️'
    }
    if (!form.image) {
      errors.image = 
      !form.image.includes('🎮https://' || 'http://🕹️')
      ? '🎮Insert a valid URL image🕹️' 
      : ''
    }
    if (!form.released) {
      errors.released = '🎮Insert a valid release date🕹️'
    }
    if (!form.rating) {
      errors.rating = '🎮Insert a valid rating🕹️';
    } else if (!/^\d+(\.\d+)?$/.test(form.rating) || parseFloat(form.rating) < 1 || parseFloat(form.rating) > 5) {
      errors.rating = '🕹️The rating must be a number between 1 and 5🕹️';
    }
    if (form.genres.length === 0) {
    errors.genres = '🎮Select at least one genre🕹️';
  } else {
    errors.genres = ''; // Reinicia el mensaje de error si hay géneros seleccionados
  }
    return errors;
  }
  
  return (


    <div>
        <div className={successMessage || errorMessage ? styles['success-overlay'] : styles['error-overlay']}>
          {successMessage && (
            <div className={styles['success-alert']}>
              <p>EXITO!!!</p>
              <img src={mensajeOK} alt="Descripción de la imagen de éxito" />
              <button className={styles.btnAlert} onClick={closeAlerts}>Cerrar</button>
            </div>
          )}
          {errorMessage && (
            <div className={styles['error-alert']}>
              <p>Something has gone wrong!</p>
              <img src={mensajeBAD} alt="Descripción de la imagen de error" />
              <button className={styles.btnAlert} onClick={closeAlerts}>Cerrar</button>
            </div>
          )}
        </div>
           

          <div className={styles.formContainer}>

            <div className={styles.verticalText}>
            <p>CREATE</p>
            <p>VIDEOGAMES</p>
            </div>



            <div className={styles.content}>

            <form onSubmit={(e) => handleSubmit(e)}>

              <section>
                <label htmlFor="name" className={styles.label}> Name: </label>
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
                <label className={styles.label}>Genres: </label>

                <div className={styles.genreList}>
                  {allGenres?.map((genre) => (
                    <label key={genre.name} className={styles.genreItem}>
                      <input
                        type="checkbox"
                        value={genre.name}
                        checked={form.genres.includes(genre.name)}
                        onChange={(e) => handleGenres(e, genre.name)}
                      />
                      <span>{genre.name}</span>
                    </label>
                  ))}
                </div>
              </section>

        {errors.genres && (<p className={styles.error}>{errors.genres}</p>)}


        <button type="submit" className={styles.button} disabled={Object.values(errors).some((error) => error)} >Create Videogame</button>
      
      
      </form>

      </div>
      </div>
    </div>
  )
}

export default FormPage
