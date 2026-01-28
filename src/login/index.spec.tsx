import { fireEvent, render, screen } from "@testing-library/react";
import Login from "."

const navigateMock = vi.fn();

describe("Testa o componente de login", () => {
    vi.mock("react-router-dom", () => ({
        useNavigate() {
            return navigateMock;
        }
    }))

    test("Deve haver um título escrito 'Login'", async () => {
        render(<Login />)

        const title = await screen.findByRole('heading', { name: "Login" })

        expect(title).toBeInTheDocument()
    })

    test("Devem haver dois inputs na minha tela", async () => {
        render(<Login />)

        const inputs = await screen.findAllByRole("textbox")

        expect(inputs).toHaveLength(2)
    });


    test("Deve haver um botão na minha tela", async () => {
        render(<Login />)

        const button = await screen.findByRole("button")

        expect(button.textContent).toBe("Enviar")
    })


    test("Deve haver um input para e-mail", async () => {
        render(<Login />)

        const inputEmail = await screen.findByPlaceholderText("Insira seu e-mail")

        expect(inputEmail).toBeInTheDocument()
    })


    test("Deve haver um input para senha", async () => {
        render(<Login />)

        const inputSenha = await screen.findByPlaceholderText("Insira sua senha")

        expect(inputSenha).toBeInTheDocument()
    })


    
    test("teste final", async () => {
        render(<Login />)

        const button = await screen.findByRole("button")
        fireEvent.click(button);

        expect(navigateMock).toHaveBeenCalledTimes(1)
    })
})