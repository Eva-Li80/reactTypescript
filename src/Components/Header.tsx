type HeaderPros = {
    title: string;
    level: number;
    children: React.ReactNode
}


const Header = ({title, level, children}: HeaderPros) => {
  return (
    <div className="header">
       <h1>{title}</h1>
       <p>Level: {level}</p>
       <div>{children}</div>
    </div>
  )
}

export default Header

