// src/components/ArticleList.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import ArticleUpdateForm from "./ArticleUpdateForm";

function ArticleList() {
    const [articles, setArticles] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const fetchArticles = async () => {
        const snapshot = await getDocs(collection(db, "articles"));
        const articlesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setArticles(articlesData);
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Articles</h2>
            {articles.map(article => (
                <div key={article.id} style={{ border: "1px solid #ccc", marginBottom: "1rem", padding: "1rem" }}>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                    <button onClick={() => setEditingId(article.id)}>Update</button>
                    {editingId === article.id && (
                        <ArticleUpdateForm article={article} onFinish={() => {
                            setEditingId(null);
                            fetchArticles();
                        }} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default ArticleList;
