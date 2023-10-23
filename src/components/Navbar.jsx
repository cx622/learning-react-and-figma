import './Navbar.css'

export default function App() {
  return (
    <nav>
        <h1>
            <a id="logo" href="./index.html">AI Developer Team</a>
        </h1>
        <div id="navigation">
            <ul>
                <li>
                    <a className="navlinks" href="#">About</a>
                </li>
                <li>
                    <a className="navlinks" href="#">Our Team</a>
                </li>
                <li>
                    <a className="navlinks" href="#">Projects</a>
                </li>
                <li>
                    <a className="navlinks" href="#">Contacts</a>
                </li>
            </ul>
        </div>
        <div id="join-team" className="flex">
            <div id="join-team-button">
                <p>Join Team</p>
            </div>

            <div id="button-right"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                <circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 12 1)" fill="#111111" stroke="#111111" stroke-width="1.5"/>
                <path d="M1 14.9347C1 14.0743 1.54085 13.3068 2.35109 13.0175C6.00404 11.7128 9.99596 11.7128 13.6489 13.0175C14.4591 13.3068 15 14.0743 15 14.9347V16.2502C15 17.4376 13.9483 18.3498 12.7728 18.1818L11.8184 18.0455C9.28565 17.6837 6.71435 17.6837 4.18162 18.0455L3.22721 18.1818C2.0517 18.3498 1 17.4376 1 16.2502V14.9347Z" fill="#111111" stroke="#111111" stroke-width="1.5"/>
                </svg></div>

        </div>
    </nav>

  )
}
