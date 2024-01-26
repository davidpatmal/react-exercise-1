import "./App.css"
import FullData from "./FullData/FullData"
import Gallery from "./components/Gallery/Gallery"
import Header from "./components/Header/Header"
import Heading from "./components/Heading/Heading"
import Promotion from "./components/Promotion/Promotion"

const { header, promotion, heading, gallery } = FullData

function App() {
    return (
        <>
            <Header header={header}></Header>
            <Promotion promotion={promotion}></Promotion>
            <Heading heading={heading}></Heading>
            <Gallery gallery={gallery}></Gallery>
        </>
    )
}

export default App
