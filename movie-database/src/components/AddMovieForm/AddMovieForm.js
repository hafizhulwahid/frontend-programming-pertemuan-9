import { nanoid } from "nanoid";
import { useState }from "react";
import styles from "./AddMovieForm.module.css";
import Alert from "../Alert/Alert";


function AddMovieForm(props) {
  const {movies, setMovies} = props;
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    pict: "",
    type: "",
  });

  const [formDataError, setFormDataError] = useState({
    titleError: false,
    dateError: false,
    pictError: false,
  });

  function handleChange(event) {
    // console.log(event.target.name, event.target.value);
    const { name, value } = event.target;

    // console.log({ 
    //   ...formData,
    //   [name] : value
    // });

    setFormData({
      ...formData,
      [name] : value,
    });
  }

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPictError, setIsPictError] = useState(false);

  const options = [
    {
      label: "Action",
      value: "action",
    },
    {
      label: "Drama",
      value: "drama",
    },
    {
      label: "Horror",
      value: "horror",
    },
    {
      label: "Comedy",
      value: "comedy",
    },
  ];

  const { title, date, pict, type } = formData;
  const { titleError, dateError, pictError} = formDataError;

  function validate() {
    if (title == "") {
      setFormDataError({
        ...formDataError,
        titleError : true,
      });
      return false;
    } else if (date == "") {
      setFormDataError({
        ...formDataError,
        titleError : false,
        dateError : true,
      });
      return false;
    } else if (pict == "") {
      setFormDataError({
        ...formDataError,
        titleError : false,
        dateError : false,
        pictError : true,
      });
      return false;
    }else {
      setFormDataError({
        ...formDataError,
        titleError : false,
        dateError : false,
        pictError : false,
      });
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id : nanoid,
      title : title,
      year : date,
      type : type,
      poster : pict,
    };

    setMovies([...movies, movie]);
    // console.log(movie);
  }

  function handleSubmit(event) {
    event.preventDefault();

    validate() && addMovie();
  }


    return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
          className={styles.form__image}
          src="https://picsum.photos/536/354"
          alt="placeholder"
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie</h2>
          <form onSubmit={handleSubmit}>
            <label className={styles.form__label} for="title">Title</label><br />
            <input className={styles.form__input} type="text" id="title" value={title} name="title" onChange={handleChange} /><br />
            {titleError && <Alert>Title Wajib Di Isi !</Alert>} 
            <label className={styles.form__label} for="year">Year</label><br />
            <input className={styles.form__input} type="text" id="date" value={date} name="date" onChange={handleChange} /><br />
            {dateError ? <p>Tahun Wajib Di Isi !</p> : "" } 
            <label className={styles.form__label} for="link">Link Gambar</label><br />
            <input className={styles.form__input} type="text" id="pict" value={pict} name="pict" onChange={handleChange} /><br />
            {pictError && <Alert>Link Gambar Wajib Di Isi !</Alert>} 
            <label className={styles.form__label} for="link">Type Movie</label><br />
            <select className={styles.form__select} name="type" onChange={handleChange}>
            {options.map((option) => (
              <option value={option.value}  onChange={handleChange} >{option.label}</option>
            ))}
            </select><br /><br />
            <button className={styles.form__button} >Submit</button>
          </form>
        </div>
      </section>
    </div>
    );
}

export default AddMovieForm;

