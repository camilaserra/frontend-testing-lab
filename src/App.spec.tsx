import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testa o componente App", () => {

    test("Devem haver dois títulos na página", async () => {
        render(<App />);

        const titles = await screen.findAllByRole('heading');

        expect(titles).toHaveLength(2)
    });


    test("Deve haver um título escrito 'Morgana'", async () => {
        render(<App />);

        const title = await screen.findByRole('heading', {
            name: "Morgana"
        });

        expect(title.textContent).toBe("Morgana");
    }); 

})