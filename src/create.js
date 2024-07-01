import { useState } from "react";
import { useNavigate } from "react-router";

const Create = () => {
    const  [title, setTitle] = useState('') ;
    const [body, setContent] = useState('') ;
    const [author, setAuthor] = useState('') ;
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author} ;
        setIsPending(true);

        fetch('http://localhost:8000/post-blog', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate('/')
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input required type="text" value={title} onChange={ (e) => setTitle(e.target.value)}/>

                <label>Blog Content:</label>
                <textarea required value={body} onChange={ (e) => setContent(e.target.value)} />

                <label>Blog Author:</label>
                <input required type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>         

                { !isPending && <button 
                    style={{
                        color: "white",
                        backgroundColor: "#50b2df",
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        padding:'10px',
                    }}
                >Add Blog</button>   }
                { isPending && <button 
                    style={{
                        color: "white",
                        backgroundColor: "#50b2df",
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        padding:'10px',
                    }}
                >Adding Blog ......</button>   }
            </form>
        </div>
     );
}
 
export default Create;

