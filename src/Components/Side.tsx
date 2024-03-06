import Navigation from "./Navigation"

const Side = () => {

    const links = [
        { text: "Home", url: "/" },
        { text: "About", url: "/about" },
    ]

  return (
    <div className="sidebar">
        <Navigation links={links}/>
      
    </div>
  )
}

export default Side
