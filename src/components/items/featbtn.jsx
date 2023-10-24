import './Featbtn.css'

export default function Featbtn(props) {
    // const buttonRef = useRef(null);
      
    //     useEffect(() => {
    //       const adjustButtonWidth = () => {
    //         const button = buttonRef.current;
      
    //         if (button.scrollWidth > button.clientWidth) {
    //           button.style.width = `${button.scrollWidth}px`;
    //         } else {
    //           button.style.width = 'auto';
    //         }
    //       };
      
    //       adjustButtonWidth();
      
    //       window.addEventListener('resize', adjustButtonWidth);
      
    //       return () => {
    //         window.removeEventListener('resize', adjustButtonWidth);
    //       };
    //     }, []);
      
    return (
      <div>
        <button style={{ width: props.width }} id="myButton"><p id="featext">{props.message}</p>
        <svg id="star" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M6.5 0.18042L8.85325 4.19751L13 6.47718L8.85325 8.75684L6.5 12.7739L4.14675 8.75684L0 6.47718L4.14675 4.19751L6.5 0.18042Z" fill="white"/>
</svg>
        </button>
      </div>
    )
  }