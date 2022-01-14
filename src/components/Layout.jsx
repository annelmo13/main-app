
   
import { Button } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink'

const Layout = () => {
    return (
        <>
        <header>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/login">
                <Button variant="primary">Log In</Button>
            </CustomLink>
        </header>

        <main className="container">
            <Outlet />
        </main>

        <footer className="container">&copy; Book Collections 2022</footer>
        </>
    )
}

export {Layout}