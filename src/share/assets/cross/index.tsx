import   "./index.css";

const CrossSvg = (props) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" onClick={props.setActive} className={'svg'}>
      <line x1="0" x2="100" y1="0" y2="100" />
      <line x1="0" x2="100" y1="100" y2="0" />
    </svg>
  );
};

export default CrossSvg;