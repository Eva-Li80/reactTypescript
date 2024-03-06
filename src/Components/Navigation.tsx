type NavigatipnProps = {
    links: { 
        text: string; 
        url: string; 
    }[];
}

const Navigation = ({links}: NavigatipnProps) => {
  return (
    <div className="navigation">
      <nav>
        <ul>
         {links.map((link, index) => (
            <li key={index}>{link.text}</li>
         ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
