import React from 'react';
import styles from './Search.module.scss';


const Search = ({ setSearch }) => {
    return (
        <from className="d-flex justify-content-center gap-4 mb-5 flex-sm-row flex-column align-items-center">
            <input
                onChange={e => {
                    setSearch(e.target.value);
                }}
                placeholder="Search for Characters"
                type="text"
                className={styles.input}
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                }}
                className={`${styles.btn} btn btn-primary fs-5`}
            >
                Search
            </button>
        </from>
    )
}

export default Search