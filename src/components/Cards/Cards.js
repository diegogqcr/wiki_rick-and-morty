import React from 'react'
import styles from './Cards.module.scss'

const Cards = ({ results }) => {
    let display;
    // console.log(results);

    if (results) {
        display = results.map((x) => {
            let {id, name, image, location, status} = x;
            return(
                <div key={id} className="col-4 position-relative mb-4">
                    <div className={styles.cards}>
                        <img src={image} alt="" className={`${styles.img} img-fluid`}/>
                        <div style={{padding:"10px"}}className="content">
                          <div className="fs-4 fw-bold mb-4">{name}</div>
                          <div className="fs-6">Last location</div>
                          <div className="fs-5">{location.name}</div>
                        </div>
                    </div>
                    {(()=>{
                      if(status === "Dead"){
                        return(
                          <div className={`${styles.badge} badge bg-danger position-absolute`}>
                            {status}
                          </div>
                        );
                      }
                      else if(status === "Alive"){
                        return(
                          <div className={`${styles.badge} badge bg-success position-absolute`}>
                            {status}
                          </div>
                        );
                      } else {
                        return(
                        <div className={`${styles.badge} badge position-absolute bg-secondary`}>
                          {status}
                        </div>
                    );  
                    }
                    })()}
                </div>
            );
        });
    } else {
        display = "No characters Found :/";
    };
    return <>{display}</>;
};

export default Cards


// linea 21
//Se usa template literal para incluir una clase de scss con boostrap




// import React from 'react'

// const Cards = ({results}) => {
//     //console.log(results);
    
//     let display;
    
//     return (
//         <div className="col-4">Cards</div>
//     )
// }

// export default Cards