import React from "react";
import styles from "./birthdayRecord.module.scss";

export const BirthdayRecord = () => {

    const [nameRadio, setNameRadio] = React.useState(false);
    const [ageRadio, setAgeRadio] = React.useState(false);
    const [persons, setPersons] = React.useState([]);


    const fetchData = () => {
        fetch("https://mocki.io/v1/00c533eb-14ad-4e6a-9135-c4e1ac4d9bc9")
            .then((res) => res.json())
            .then((data) => setPersons(data))
    }

    React.useEffect(() => { fetchData() }, []);

    const nameSort = () => {
        setNameRadio(true);
        setAgeRadio(false);
        const sortedArray = [...persons].sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        })
        setPersons(sortedArray);
    }

    const dateSort = () => {
        setNameRadio(false);
        setAgeRadio(true);
        const sortedArray = [...persons].sort((a, b) => {
            if (a.date < b.date) {
                return -1;
            }
            if (a.dage > b.date) {
                return 1;
            }
            return 0;
        })
        setPersons(sortedArray);
    }



    return (
        <div className={styles.root}> 
            <h1>Sort By</h1>
            <div>
                <input className={styles.radio}
                    type="radio"
                    name="name"
                    id="name"
                    data-testid="name"
                    value={nameRadio}
                    checked={nameRadio === true}
                    onChange={nameSort}
                />
                <label className={styles.label} htmlFor="name">
                    Name
                </label>
                <input className={styles.radio}
                    type="radio"
                    name="age"
                    id="age"
                    data-testid="age"
                    value={ageRadio}
                    checked={ageRadio === true}
                    onChange={dateSort}
                />
                <label className={styles.label} htmlFor="age">
                    Age
                </label>
                <table data-testid="table" className={styles.table}>
                    <tr>
                        <th className={styles.th}>Person Name</th>
                        <th className={styles.th}>Date of Birth</th>
                    </tr>

                    {persons.map(person => (
                        <tr>
                            <td className={styles.td} align="left" >{person.name}</td>
                            <td className={styles.td} align="left" >{person.date}</td>
                        </tr>
                    ))}
                </table>

            </div>
        </div>
    )

}