import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function AdminAddMovie() {
    const [file, setFile] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();

        formData.append("title", data.title);
        formData.append("genre", data.genre);
        formData.append("duration", data.duration);
        formData.append("release_date", data.release_date);
        formData.append("language", data.language);
        formData.append("description", data.description);
        formData.append("director", data.director);
        formData.append("production", data.production);
        formData.append("cast", data.cast);
        formData.append("trailer_url", data.trailer_url);

        if (file) {
            formData.append("poster_url", file);
        }

        axios
            .post("http://localhost:5000/api/addmovies", formData)
            .then((response) => {
                console.log("Success:", response);
                alert(response.data.message);
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error");
            });
    };

    console.log(errors);

    const validationRules = {
        title: {
            required: "**Title is required",
            minLength: {
                value: 3,
                message: "**Title must have at least 3 characters",
            },
        },
        genre: {
            required: "**Genre is required",
        },
        duration: {
            required: "**Duration is required",
        },
        release_date: {
            required: "**Release date is required",
        },
        language: {
            required: "**Language is required",
        },
        description: {
            required: "**Description is required",
        },
        director: {
            required: "**Director is required",
        },
        production: {
            required: "**Production is required",
        },
        cast: {
            required: "**Cast is required",
        },
        poster_url: {
            required: "**Poster URL is required",
        },
        trailer_url: {
            required: "**Trailer URL is required",
        },
    };







    return (
        <div style={{ backgroundColor: "#f2f7ff" }}>
            <div id="main">
                <header className="mb-3">
                    <p className="burger-btn d-block d-xl-none">
                        <i className="bi bi-justify fs-3"></i>
                    </p>
                </header>
                <div className="page-heading">
                    <div>
                        <h3>Add New Theater</h3>
                    </div>
                </div>
                <div className="page-content">
                    <section id="basic-horizontal-layouts">
                        <div className="row match-height">
                            <div className="col-md-6 col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Horizontal Form</h4>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">




                                            <form
                                                className="form form-horizontal"
                                                onSubmit={handleSubmit(onSubmit)}
                                            >
                                                <div className="form-body">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label>Title</label>
                                                        </div>
                                                        <div className="col-md-8 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="title"
                                                                {...register("title", validationRules.title)}
                                                                placeholder="Movie title"
                                                            />
                                                            <p className="text-danger">
                                                                {" "} {errors?.title && errors.title.message}
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label>Genre</label>
                                                        </div>
                                                        <div className="col-md-8 form-group">
                                                            <select
                                                                className="form-control"
                                                                name="genre"
                                                                defaultValue=""
                                                                {...register("genre", validationRules.genre)}
                                                            >
                                                                <option value="">Select a genre</option>
                                                                <option value="action">Action</option>
                                                                <option value="comedy">Comedy</option>
                                                                <option value="drama">Drama</option>
                                                                <option value="horror">Horror</option>
                                                                {/* Add more genre options here */}
                                                            </select>
                                                            <p className="text-danger">
                                                                {errors?.genre && errors.genre.message}
                                                            </p>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <label>Duration</label>
                                                        </div>
                                                        <div className="col-md-8 form-group">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                name="duration"
                                                                placeholder="Movie duration"
                                                                {...register(
                                                                    "duration",
                                                                    validationRules.duration
                                                                )}
                                                            />
                                                            <p className="text-danger">
                                                                {errors?.duration && errors.duration.message}
                                                            </p>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <label>Release Date</label>
                                                        </div>
                                                        <div className="col-md-8 form-group">
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                name="release_date"
                                                                {...register(
                                                                    "release_date",
                                                                    validationRules.release_date
                                                                )}
                                                                placeholder="Movie release date"
                                                            />
                                                            <p className="text-danger">
                                                                {errors?.release_date &&
                                                                    errors.release_date.message}
                                                            </p>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <label>Language</label>
                                                        </div>
                                                        <div className="col-md-8 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="language"
                                                                placeholder="Movie language"
                                                                {...register(
                                                                    "language",
                                                                    validationRules.language
                                                                )}
                                                            />
                                                        </div>

                                                        <div className="col-md-4">
                                                            <label>Description</label>
                                                        </div>
                                                        <div className="col-md-8 form-group">
                                                            <textarea
                                                                className="form-control"
                                                                name="description"
                                                                {...register(
                                                                    "description",
                                                                    validationRules.description
                                                                )}
                                                                placeholder="Movie description"
                                                            ></textarea>
                                                            <p className="text-danger">
                                                                {errors?.description &&
                                                                    errors.description.message}
                                                            </p>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <label>Director</label>
                                                        </div>
                                                        <div className="col-md-8 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="director"
                                                                {...register(
                                                                    "director",
                                                                    validationRules.director
                                                                )}
                                                                placeholder="Movie director"
                                                            />
                                                            <p className="text-danger">
                                                                {errors?.director && errors.director.message}
                                                            </p>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <label>Production</label>
                                                        </div>
                                                        <div className="col-md-8 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="production"
                                                                {...register(
                                                                    "production",
                                                                    validationRules.production
                                                                )}
                                                                placeholder="Movie production"
                                                            />
                                                            <p className="text-danger">
                                                                {errors?.production &&
                                                                    errors.production.message}
                                                            </p>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <label>Cast</label>
                                                        </div>
                                                        <div className="col-md-8 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="cast"
                                                                {...register("cast", validationRules.cast)}
                                                                placeholder="Movie cast"
                                                            />
                                                            <p className="text-danger">
                                                                {errors?.cast && errors.cast.message}
                                                            </p>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <label>Poster URL</label>
                                                        </div>
                                                        <div className="col-md-8 form-group">
                                                            <input
                                                                type="file"
                                                                className="form-control"
                                                                name="poster_url"
                                                                onChange={(e) => setFile(e.target.files[0])}
                                                            />
                                                            <p className="text-danger">
                                                                {errors?.poster_url &&
                                                                    errors.poster_url.message}
                                                            </p>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <label>Trailer URL</label>
                                                        </div>
                                                        <div className="col-md-8 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="trailer_url"
                                                                {...register(
                                                                    "trailer_url",
                                                                    validationRules.trailer_url
                                                                )}
                                                                placeholder="Movie trailer URL"
                                                            />
                                                            <p className="text-danger">
                                                                {errors?.trailer_url &&
                                                                    errors.trailer_url.message}
                                                            </p>
                                                        </div>

                                                        <div className="col-sm-12 d-flex justify-content-end">
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary me-1 mb-1"
                                                            >
                                                                Submit
                                                            </button>
                                                            <button
                                                                type="reset"
                                                                className="btn btn-light-secondary me-1 mb-1"
                                                            >
                                                                Reset
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AdminAddMovie;
