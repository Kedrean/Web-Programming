// src/components/ArticleUpdateForm.jsx
import React, { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

function ArticleUpdateForm({ article, onFinish }) {
    const [title, setTitle] = useState(article.title);
    const [content, setContent] = useState(article.content);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const ref = doc(db, "articles", article.id);
        await updateDoc(ref, { title, content });
        onFinish();
    };

    return (
        <form onSubmit={handleUpdate} style={{ marginTop: "1rem" }}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} required /><br />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} required /><br />
            <button type="submit">Save</button>
        </form>
    );
}

export default ArticleUpdateForm;
