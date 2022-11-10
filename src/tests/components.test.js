import { render, screen } from "@testing-library/react"
import Cards from "../components/Cards/Cards"

describe("Applications", () => {
    test("renders correctly", () => {
        render("Aplicaciones renderizadas correctamente", () => {
            render(<Cards />);
            const AppsElement = screen.find("description");
            screen.debug
            expect(AppsElement).toBeInTheDocument();
        })
    })

    test("Should renders the img", ()=>{
        render(<Cards/>);
        
        const imgUrl = screen.queryAllByAltText("url");
        expect(imgUrl).toBeInTheDocument(); 
    })
})