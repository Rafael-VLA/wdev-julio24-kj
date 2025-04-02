import { UserFormControlado } from "../components/UserFormControlado"

export const ContactPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold">Contact page</h1>
            <hr className="my-4" />

            {/* <UserFormNoControlado /> */}
            <UserFormControlado />
        </div>
    )
}