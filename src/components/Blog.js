import '../styles/Blog.css';

function Blog(props) {
    const sections = ['Main', 'Archive', 'Bio', 'Blog', 'Connect'];
    const navLinks = sections.map( section => {
        return (
            <li><a href={'#' + section }>{section}</a></li>
            )
        })
        return (
            <nav>
                <h2 className="logo" >{props.logoTitle}</h2>
                
                <ul>
                    {navLinks}  
                </ul>
            </nav>
        );
    }

export default Blog;