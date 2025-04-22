
const Footer = () =>{
    return(
        <div>
            
            <footer className="cursor-pointer text-white bg-black w-screen flex justify-evenly ">
                <div>
                        <p className="text-2xl font-bold font-sans">Food-Hub</p>
                    </div>

                    <div>
                        <h2 className="font-bold">Company</h2>
                        <ul className="text-slate-400">
                            <li>About</li>
                            <li>Careers</li>
                            <li>Team</li>
                            <li>Food-hub One</li>
                            <li>Food-hub Instamart</li>
                            <li>Food-hub Genie</li>
                        </ul>
                    </div>

                    <div>
                        <div>
                            <h2 className="font-bold">Contact Us</h2>
                            <ul className="text-slate-400">
                                <li>Help & Support</li>
                                <li>Partner with us</li>
                                <li>Ride with us</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-bold pt-8">Legal</h2>
                            <ul className="text-slate-400">
                                <li>Terms & Conditions</li>
                                <li>Cookie Policy</li>
                                <li>Privacy policy</li>
                                <li>Investor Relations</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-bold">We deliver to :</h2>
                        <ul className="text-slate-400">
                            <li>Bengaluru</li>
                            <li>Gurgaon</li>
                            <li>Delhi</li>
                            <li>Mumbai</li>
                            <li>Pune</li>
                        </ul>
                    </div>
            </footer>
        </div>
            
            
    );
};

export default Footer;