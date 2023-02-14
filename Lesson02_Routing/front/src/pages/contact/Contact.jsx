
import {isMobile} from 'react-device-detect';

function Contact(){
    console.log(isMobile);
    if(isMobile) {
        return (
            <>
            <div className="page">
                <section> 
                        <h2>Mibile</h2>
                        Contact
                    </section>
                    <section> 
                        <h2>section 2</h2>
                        section 2
                    </section>
                    <section> 
                        <h2>section 3</h2>
                        section 3
                    </section>
            </div>
           
            </>
        )
    } else {
        return (
            <>
            <div className="page">
                <section> 
                        <h2>Desctop</h2>
                        Contact
                    </section>
                    <section> 
                        <h2>section 2</h2>
                        section 2
                    </section>
                    <section> 
                        <h2>section 3</h2>
                        section 3
                    </section>
            </div>
           
            </>
        ) 
    }
   
}

export default Contact