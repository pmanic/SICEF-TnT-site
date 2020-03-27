import React from "react";
import "../../style/signin/signin-area.scss";

class SignIn extends React.Component {
    render() {
        return (
            <div className="signin-area" id="signin">
                <div className="signin-area-tekst">
                    <p className="naslov">Prijavi se</p>
                    <p className="linija"></p>
                    <p className="tekst">Popunite formular da biste rezervisali mesto na konferenciji. Možete se prijaviti iako niste student. Učešće na konferenciji je besplatno. Za sva dodatna pitanja, kontaktirajte nas.</p>
                </div>
                <div className="animated infinite bounce delay-1s">
                    <button className="signin-area-dugme">Prijavi se</button>
                </div>
            </div >
        )
    }
}

export default SignIn;